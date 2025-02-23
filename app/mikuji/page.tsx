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

interface VoteCountItem {
  tulip_code: string;
  vote_count: number;
}

interface VoteCounts {
  total: number;
  items: VoteCountItem[];
}

const mikujiItems = [
  {
    img: "izumi100.jpg",
    name: "スプリング吉",
  },
  {
    img: "royal100.jpg",
    name: "ロイヤル吉",
  },
  {
    img: "prince100.jpg",
    name: "プリンス吉",
  },
] as const;

export default function VoteResult(): JSX.Element {
  const [voteCounts, setVoteCounts] = useState<VoteCounts>({ total: 0, items: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageSources = [
    "izumi100.jpg",
    "royal100.jpg",
    "prince100.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % mikujiItems.length);
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  const sortedItems = voteCounts.items.slice().sort((a, b) => b.vote_count - a.vote_count);

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center">
      <main className="flex-grow">
        <PortalHeader />

        <div className="flex-grow flex flex-col items-center justify-center p-8">
          <h1 className="text-2xl font-bold mb-2">
            チューリップみくじ
          </h1>
          <div className="mb-6">
            <p className="text-lg">
              スクショを撮ってください
            </p>
          </div>
          <div className="">
            <div className="text-center flex flex-col items-center">
              <Image
                src={`/mikuji/${mikujiItems[currentImageIndex].img}`}
                alt="Rotating Tulip"
                width={150}
                height={150}
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

        </div>
      </main>
    </div>
  );
}
