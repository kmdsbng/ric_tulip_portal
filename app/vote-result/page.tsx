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

class Tulip {
  readonly key: string;
  readonly name: string;

  constructor(key: string, name: string) {
    this.key = key;
    this.name = name;
  }
}

const TULIPS: Tulip[] = [
  new Tulip('barcelona', 'バルセロナ'),
  new Tulip('fox_trot', 'フォックストロット'),
  new Tulip('negurije', 'ネグリジェ'),
  new Tulip('charming_beauty', 'チャーミングビューティー'),
  new Tulip('symphony', 'シンフォニー'),
  new Tulip('ballerina', 'バレリーナ'),
  new Tulip('match', 'マッチ'),
  new Tulip('g_prince', 'ゴールデンプリンスクラウス'),
  new Tulip('momotaro', '桃太郎'),
  new Tulip('prince', 'プリンスクラウス'),
  new Tulip('dynasty', 'ダイナスティ'),
  new Tulip('negrita', 'ネグリタ'),
  new Tulip('gaburiera', 'ガブリエラ'),
  new Tulip('clear_water', 'クリアウォーター'),
  new Tulip('strong_gold', 'ストロングゴールド'),
  new Tulip('sinaeda', 'シナエダアモール'),
  new Tulip('sara', 'サラ'),
  new Tulip('green', 'グリーンスピリット'),
  new Tulip('kuminz', 'クミンズ'),
  new Tulip('mistless', 'ミストレス'),
  new Tulip('sandol', 'サンドール'),
  new Tulip('sanne', 'サンネ'),
  new Tulip('continental', 'コンチネンタル'),
  new Tulip('yohan', 'ヨハンクライフ'),
  new Tulip('mariage', 'マリアージュ'),
  new Tulip('izumi', 'イズミ'),
  new Tulip('house', 'ハウステンボス'),
  new Tulip('acepink', 'エースピンク'),
  new Tulip('redproud', 'レッドプラウド'),
  new Tulip('royal', 'ロイヤルテン'),
  new Tulip('oreruan', 'オレルアンズ'),
  new Tulip('fostery', 'フォステリーキング'),
  new Tulip('redimpression', 'レッドインプレッション'),
  new Tulip('world', 'ワールドピース'),
  new Tulip('raribera', 'ラリベラ'),
  new Tulip('aquarel', 'アクアレル'),
  new Tulip('happy_upstar', 'ハッピーアップスター'),
  new Tulip('menfis', 'メンフィス')
] as const;

export default function VoteResult() {
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


  // const TULIPS: Tulip[] = [
  //   {'barcelona': 'バルセロナ'},
  //   'fox_trot': 'フォックストロット',
  //   'negurije': 'ネグリジェ',
  //   'charming_beauty': 'チャーミングビューティー',
  //   'symphony': 'シンフォニー',
  //   'ballerina': 'バレリーナ',
  //   'match': 'マッチ',
  //   'g_prince': 'ゴールデンプリンスクラウス',
  //   'momotaro': '桃太郎',
  //   'prince': 'プリンスクラウス',
  //   'dynasty': 'ダイナスティ',
  //   'negrita': 'ネグリタ',
  //   'gaburiera': 'ガブリエラ',
  //   'clear_water': 'クリアウォーター',
  //   'strong_gold': 'ストロングゴールド',
  
  //   'sinaeda': 'シナエダアモール',
  //   'sara': 'サラ',
  //   'green': 'グリーンスピリット',
  //   'kuminz': 'クミンズ',
  //   'mistless': 'ミストレス',
  //   'sandol': 'サンドール',
  //   'sanne': 'サンネ',
  //   'continental': 'コンチネンタル',
  //   'yohan': 'ヨハンクライフ',
  //   'mariage': 'マリアージュ',
  //   'izumi': 'イズミ',
  //   'house': 'ハウステンボス',
  //   'acepink': 'エースピンク',
  //   'redproud': 'レッドプラウド',
  //   'royal': 'ロイヤルテン',
  //   'oreruan': 'オレルアンズ',
  //   'fostery': 'フォステリーキング',
  //   'redimpression': 'レッドインプレッション',
  //   'world': 'ワールドピース',
  //   'raribera': 'ラリベラ',
  //   'aquarel': 'アクアレル',
  //   'happy_upstar': 'ハッピーアップスター',
  //   'menfis': 'メンフィス',
  // ] as const;


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
    <div className="min-h-screen flex flex-col bg-cover bg-center">
      <main className="flex-grow">

        <PortalHeader />



        <div className="flex-grow flex flex-col items-center justify-center p-8">

          <h1 className="text-4xl font-bold mb-4">
            チューリップ投票
          </h1>

          <div className="mb-8">
            <p className="text-lg">
              お気に入りのチューリップに投票しよう！
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {TULIPS.map((tulip) => (
              <div key={tulip.key} className="bg-white rounded-lg shadow-md p-4">
                <a href={`/tulip_detail.html?tulip_code=${tulip.key}`} className="block text-center p-2 bg-pink-100 hover:bg-pink-200 rounded-md text-blue-500 hover:underline">{tulip.name}</a>
              </div>
            ))}
          </div>

        </div>



      </main>
    </div>
  );
}
