"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import { Flower2, CheckCircle2, XCircle } from "lucide-react";
import PortalHeader from "@/components/PortalHeader";

const quizData = [
  {
    question: "チューリップの名前の由来はどれ？",
    options: ["帽子", "ターバン", "風車", "王冠"],
    correctAnswer: 1,
  },
  {
    question: "オランダが世界で最も多くのチューリップを生産していますが、1年間に生産される球根の数はどのくらい？",
    options: ["約1,000万個", "約1億個", "約10億個", "約100億個"],
    correctAnswer: 2,
  },
  {
    question: "チューリップが正式に国花とされている国はどれでしょう？",
    options: ["フランス", "オランダ", "エジプト", "トルコ"],
    correctAnswer: 3,
  },
];

const tulipImages = [
  "/q1.png?height=150&width=150",
  "/q2.png?height=150&width=150",
  "/q3.png?height=150&width=150",
];

export default function TulipQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [confirmedAnswer, setConfirmedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((currentQuestion / quizData.length) * 100);
  }, [currentQuestion]);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    setConfirmedAnswer(selectedAnswer);
    setShowResult(true);

    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setConfirmedAnswer(null);
        setShowResult(false);
      } else {
        setQuizEnded(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setConfirmedAnswer(null);
    setScore(0);
    setQuizEnded(false);
    setShowResult(false);
    setProgress(0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-pink-50">
      <main className="flex-grow">
        <PortalHeader />

        <div className="container mx-auto py-8 px-4">
          <Card className="w-full max-w-md mx-auto shadow-lg border-2 border-pink-300 relative overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-pink-400 to-rose-400 text-white py-2">
              <CardTitle className="text-xl font-bold flex items-center justify-center">
                <Flower2 className="w-5 h-5 mr-2" />
                チューリップクイズ
                <Flower2 className="w-5 h-5 ml-2" />
              </CardTitle>
            </CardHeader>
            <Progress value={progress} className="w-full" />
            <CardContent className="p-4">
              <AnimatePresence mode="wait">
                {!quizEnded ? (
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center"
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      <Image
                        src={tulipImages[currentQuestion]}
                        alt={`Tulip ${currentQuestion + 1}`}
                        width={100}
                        height={100}
                        className="rounded-lg shadow-md"
                      />
                      <p className="text-sm font-semibold text-center flex-grow">
                        {quizData[currentQuestion].question}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 w-full">
                      {quizData[currentQuestion].options.map((option, index) => (
                        <Button
                          key={index}
                          variant={selectedAnswer === index ? "default" : "outline"}
                          className={`text-sm py-1 px-2 h-auto ${
                            showResult
                              ? index === quizData[currentQuestion].correctAnswer
                                ? "bg-green-500 hover:bg-green-600"
                                : index === confirmedAnswer
                                ? "bg-red-500 hover:bg-red-600"
                                : "hover:bg-rose-100"
                              : selectedAnswer === index
                                ? "bg-rose-500 hover:bg-rose-600"
                                : "hover:bg-rose-100"
                          }`}
                          onClick={() => handleAnswer(index)}
                          disabled={showResult}
                        >
                          <span className="flex-grow">{option}</span>
                          {showResult && index === quizData[currentQuestion].correctAnswer && (
                            <CheckCircle2 className="w-4 h-4 ml-1" />
                          )}
                          {showResult && confirmedAnswer === index && index !== quizData[currentQuestion].correctAnswer && (
                            <XCircle className="w-4 h-4 ml-1" />
                          )}
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <h2 className="text-xl font-bold mb-2">結果発表！</h2>
                    <p className="text-lg font-semibold mb-2">
                      スコア: {score} / {quizData.length}
                    </p>
                    <div className="flex justify-center">
                      {[...Array(score)].map((_, i) => (
                        <Flower2 key={i} className="w-5 h-5 text-rose-500" />
                      ))}
                    </div>
                    <p className="mt-2 text-sm text-rose-600 font-semibold">
                      {score === quizData.length
                        ? "全問正解！クイズ受付で合言葉「あかしろきいろ」を伝えてください"
                        : score > quizData.length / 2
                          ? "素晴らしい！"
                          : "もう一度挑戦！"}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
            <CardFooter className="p-2">
              <Button
                onClick={quizEnded ? resetQuiz : handleNext}
                disabled={!quizEnded && selectedAnswer === null}
                className="w-full bg-rose-500 hover:bg-rose-600 py-1 text-sm"
                variant="answer"
              >
                {quizEnded ? "もう一度" : showResult ? "次へ" : "回答"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
