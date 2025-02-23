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

export default function VoteResult(): JSX.Element {
  const [voteCounts, setVoteCounts] = useState<VoteCounts>({total: 0, items: []});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  const sortedItems = voteCounts.items.slice().sort((a, b) => b.vote_count - a.vote_count);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://fnrbegfgqf.execute-api.ap-northeast-1.amazonaws.com/vote_count');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: VoteCounts = await response.json();
        setVoteCounts(data);
      } catch (e: any) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError(String(e));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center">
      <main className="flex-grow">
        <PortalHeader />

        <div className="flex-grow flex flex-col items-center justify-center p-8">
          <h1 className="text-4xl font-bold mb-4">
            投票結果
          </h1>
          <div className="mb-8">
            <p className="text-lg">
              投票ありがとうございました！現在の投票結果です！
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {sortedItems.map((item) => (
              <Card key={item.tulip_code} className="bg-white rounded-lg shadow-md p-4">
                <div className="text-center flex flex-col items-center">
                  <img
                    src={`/tulip_photo/${item.tulip_code}100.jpg`}
                    alt={getTulipName(item.tulip_code)}
                    className="w-10 h-10 object-cover rounded-lg shadow-md"
                  />
                  <div className="pt-2">
                    <span className="font-bold">{getTulipName(item.tulip_code)}:</span> {item.vote_count} 票
                  </div>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
