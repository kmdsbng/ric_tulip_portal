"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import { Flower2, CheckCircle2, XCircle } from "lucide-react";
import PortalHeader from "@/components/PortalHeader";
import React from "react";
import { getTulipName } from "@/domain/tulip";
import { mikujiItems } from "@/domain/mikujiItems";

type SpeechRecognitionType  = {
   lang: string;
   interimResults: boolean;
   maxAlternatives: number;
   onresult: (event: any) => void;
   onspeechend: () => void;
   onerror: (event: any) => void;
   stop: () => void;
}

export default function VoteResult(): JSX.Element {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [omikujiStarted, setOmikujiStarted] = useState(true);
  const [showWhiteBackground, setShowWhiteBackground] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);

  const hasTouchScreen = () => {
    if (typeof window !== "undefined") {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    } else {
      return navigator.maxTouchPoints > 0;
    }
  };

  const SpeechRecognitionAPI: SpeechRecognitionType | null =
    typeof window !== "undefined"
      ? (((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition) as any)
      : null;

  const recognitionRef = useRef<SpeechRecognitionType | null>(null);

  useEffect(() => {
    if (!SpeechRecognitionAPI) {
      console.log("Speech Recognition API is not supported in this browser.");
      return;
    }

    let recognition: SpeechRecognitionType;

    try {
      recognition = new (SpeechRecognitionAPI as any)();
      recognition.lang = "ja-JP";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event: any) => {
        const result = event.results[0][0].transcript;
        setTranscript(result);
        console.log(`Result received: ${result}`);
        if (result === "スタート") {
          handleStart();
        } else if (result === "ストップ") {
          handleStop();
        }
      };

      recognition.onspeechend = () => {
        console.log("Speech has ended");
        recognition.stop();
        setListening(false);
      };

      recognition.onerror = (event: any) => {
        console.error(`Speech recognition error detected: ${event.error}`);
        setListening(false);
      };

      recognitionRef.current = recognition;
    } catch (error) {
      console.error("Error initializing speech recognition:", error);
      return;
    }

    const id: NodeJS.Timeout = setInterval(() => {
      if (omikujiStarted) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % mikujiItems.length);
      }
    }, 400);
    setIntervalId(id);

    return () => clearInterval(id);
  }, [omikujiStarted, listening, transcript]);

  const handleStop = () => {
    setOmikujiStarted(false);
    setShowWhiteBackground(true);
    setTimeout(() => {
      setShowWhiteBackground(false);
    }, 300);
  };

  const handleStart = () => {
    setOmikujiStarted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center">
      <AnimatePresence>
        {showWhiteBackground && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeIn' }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              zIndex: 10,
            }}
          />
        )}
      </AnimatePresence>
      <main className="flex-grow">
        <div>
          {
            mikujiItems.map((src, index) => (
              <img
                key={index}
                src={`/mikuji/${src.img}`}
                className="inline"
                style={{width: "1px", height: "1px"}}
              />
            ))
          }
        </div>

        <div className="flex">
          <div className="flex flex-col items-center justify-center" style={{width: "750px"}}>
            <h1 className="text-4xl font-bold mb-6 text-black shadow-md">
              チューリップみくじ
            </h1>
            <div className="">
              <div className="text-center flex flex-col items-center">
                <img
                  src={`/mikuji/${mikujiItems[currentImageIndex].img}`}
                  alt="Rotating Tulip"
                  width={500}
                  height={500}
                  className="object-cover rounded-lg shadow-md"
                />
                <div className="pt-2 text-lg">
                  あなたの運勢
                </div>
                <div className="pt-2 text-4xl font-bold">
                  {mikujiItems[currentImageIndex].name}
                </div>

                {
                  (!omikujiStarted && mikujiItems[currentImageIndex].supplement != "") ?  (
                    <div className="relative inline-block">
                      <motion.div
                        className="absolute transform translate-x-2/3 -translate-y-1/2 bg-yellow-500 text-white rounded-full px-5 py-2 font-bold"
                        style={{ width: '300px', right: '-370px', top: '-110px', fontSize: '1.5em', boxShadow: '0 0 10px rgba(0,0,0,0.3), 0 0 20px rgba(0,0,0,0.2), 0 0 30px rgba(0,0,0,0.1)' }}
                        animate={{
                          y: [0, 10, 0],
                        }}
                        transition={{
                          duration: 1.0,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {mikujiItems[currentImageIndex].supplement}
                      </motion.div>
                    </div>
                  ) : null
                }
              </div>
            </div>

          </div>


          <div className="mt-20 items-center justify-center">
            {
              omikujiStarted ? (
                <Button
                  className="rounded-full bg-red-500 text-white font-bold py-3 px-6 text-lg hover:bg-red-500"
                  style={{fontSize: '2.5em', borderRadius: '20px', height: '500px'}}
                  onTouchStart={hasTouchScreen() ? handleStop : undefined}
                  onClick={!hasTouchScreen() ? handleStop : undefined}
                >
                  ストップ
                </Button>
              ) : (
                <Button
                  className="rounded-full bg-green-500 text-white font-bold py-3 px-6 text-lg hover:bg-green-500"
                  style={{fontSize: '2.5em', borderRadius: '20px', height: '500px'}}
                  onTouchStart={hasTouchScreen() ? handleStart : undefined}
                  onClick={!hasTouchScreen() ? handleStart : undefined}
                >
                  スタート
                </Button>
              )
            }
          </div>
          <div>
            <Button onClick={() => {
              if (recognitionRef.current) {
                if (listening) {
                  recognitionRef.current.stop();
                  setListening(false);
                } else {
                  recognitionRef.current.start();
                  setListening(true);
                }
              }
            }}>
              {listening ? "音声認識停止" : "音声認識開始"}
            </Button>
            <p>Transcript: {transcript}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
