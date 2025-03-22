"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import { Flower2, CheckCircle2, XCircle } from "lucide-react";
import PortalHeader from "@/components/PortalHeader";
import React from "react";
import { getTulipName } from "@/domain/tulip";
import { mikujiItems } from "../mikuji/page";

interface VoteCountItem {
  tulip_code: string;
  vote_count: number;
}

interface VoteCounts {
  total: number;
  items: VoteCountItem[];
}


export default function VoteResult(): JSX.Element {
  const [voteCounts, setVoteCounts] = useState<VoteCounts>({ total: 0, items: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [omikujiStarted, setOmikujiStarted] = useState(true);
  const [showWhiteBackground, setShowWhiteBackground] = useState(false);

  const imageSources = [
    "izumi100.jpg",
    "royal100.jpg",
    "prince100.jpg",
  ];

  useEffect(() => {
    const id: NodeJS.Timeout = setInterval(() => {
      if (omikujiStarted) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % mikujiItems.length);
      }
    }, 400);
    setIntervalId(id);

    return () => clearInterval(id);
  }, [omikujiStarted]);

  const handleStop = () => {
    setOmikujiStarted(false);
    setShowWhiteBackground(true);
    setTimeout(() => {
      setShowWhiteBackground(false);
    }, 500);
  };

  const handleStart = () => {
    setOmikujiStarted(true);
  };

  const sortedItems = voteCounts.items.slice().sort((a, b) => b.vote_count - a.vote_count);

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

        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-6 text-black shadow-md">
            チューリップみくじ
          </h1>
          <div className="">
            <div className="text-center flex flex-col items-center">
              <img
                src={`/mikuji/${mikujiItems[currentImageIndex].img}`}
                alt="Rotating Tulip"
                width={300}
                height={300}
                className="object-cover rounded-lg shadow-md"
              />
              <div className="pt-2 text-lg">
                あなたの運勢
              </div>
              <div className="pt-2 text-4xl font-bold">
                {mikujiItems[currentImageIndex].name}
              </div>
            </div>
          </div>
          <div className="mt-6">
            {
              omikujiStarted ? (
                <Button className="rounded-full bg-red-500 text-white font-bold py-3 px-6 text-lg hover:bg-red-300" style={{fontSize: '1.5em', borderRadius: '9999px', height: '80px'}} onClick={handleStop}>ストップ</Button>
              ) : (
                <Button className="rounded-full bg-green-500 text-white font-bold py-3 px-6 text-lg hover:bg-green-100" style={{fontSize: '1.5em', borderRadius: '9999px', height: '80px'}} onClick={handleStart}>スタート</Button>
              )
            }
          </div>
        </div>
      </main>
    </div>
  );
}
