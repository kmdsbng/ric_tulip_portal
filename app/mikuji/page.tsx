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
    img: "a.jpg",
    name: "2025吉",
  },
  {
    img: "a2.jpg",
    name: "満開吉",
  },
  {
    img: "aqua.jpg",
    name: "ハイパー吉",
  },
  {
    img: "baggys.jpg",
    name: "バギ吉",
  },
  {
    img: "barerina.jpg",
    name: "ラッキーバレリーナ",
  },
  {
    img: "bijutukan.jpg",
    name: "ファッショニスタ",
  },
  {
    img: "boru.jpg",
    name: "中吉",
  },
  {
    img: "yusyo.jpg",
    name: "優勝",
  },
  {
    img: "inthadoor.jpg",
    name: "ビール吉",
  },
  {
    img: "charming_beauty100.jpg",
    name: "チャーミング＆エレガント",
  },
  {
    img: "combi.jpg",
    name: "俺たちゃ最強のコンビだぜー！吉",
  },
  {
    img: "combi2.jpg",
    name: "無敵",
  },
  {
    img: "izumi100.jpg",
    name: "スプリング吉",
  },
  {
    img: "e.jpg",
    name: "E吉",
  },
  {
    img: "yurizaki.jpg",
    name: "春らんまん吉",
  },
  {
    img: "hasu.jpg",
    name: "運気⤴アゲ⤴アゲ吉",
  },
  {
    img: "heart.jpg",
    name: "いっぱいちゅき♡吉",
  },
  {
    img: "heart2.jpg",
    name: "電柱┃ハート🩷カプ吉",
  },
  {
    img: "world100.jpg",
    name: "ラブアンドピース吉",
  },
  {
    img: "hinode.jpg",
    name: "初日の吉",
  },
  {
    img: "itirin.jpg",
    name: "この世に一つだけの吉",
  },
  {
    img: "kuro.jpg",
    name: "黒に染まれ吉",
  },
  {
    img: "liner.jpg",
    name: "ライトアップ六甲ライナー吉",
  },
  {
    img: "magipan.jpg",
    name: "マジッ吉",
  },
  {
    img: "prince100.jpg",
    name: "プリンス吉",
  },
  {
    img: "nanohana.jpg",
    name: "ダブル吉",
  },
  {
    img: "peach.jpg",
    name: "ミルクピーチ吉",
  },
  {
    img: "red.jpg",
    name: "大吉",
  },
  {
    img: "orange_vandyke100.jpg",
    name: "なにもかもうまくいく吉",
  },
  {
    img: "river2.jpg",
    name: "ほのぼの吉",
  },
  {
    img: "negrita100.jpg",
    name: "ラッキーバイオレット吉",
  },
  {
    img: "sakura.jpg",
    name: "十分咲き吉",
  },
  {
    img: "syogun.jpg",
    name: "八代将軍大吉宗",
  },
  {
    img: "negurije100.jpg",
    name: "ちょっとだけ吉",
  },
  {
    img: "apricot_impression100.jpg",
    name: "インプレッションーーカミングーー吉",
  },
  {
    img: "fox.jpg",
    name: "ギガ吉",
  },
  {
    img: "tettyan.jpg",
    name: "ほぼ大吉",
  },
  {
    img: "yuri2.jpg",
    name: "フラッシュ！！吉",
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
    }, 400);

    return () => clearInterval(intervalId);
  }, []);

  const sortedItems = voteCounts.items.slice().sort((a, b) => b.vote_count - a.vote_count);

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center">
      <main className="flex-grow">
        <PortalHeader />
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
