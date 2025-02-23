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

interface VoteCounts {
  [tulipName: string]: number;
}

export default function VoteResult(): JSX.Element {
  const [voteCounts, setVoteCounts] = useState<VoteCounts>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <PortalHeader />
        <h1 className="text-4xl font-bold text-white mb-4">
          投票結果
        </h1>
        <div className="text-white mb-8">
          <p className="text-lg">
            現在の投票結果です！
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {Object.entries(voteCounts).map(([tulipName, count]) => (
            <div key={tulipName} className="bg-white rounded-lg shadow-md p-4">
              <div className="text-center">
                <span className="font-bold">{tulipName}:</span> {count} 票
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
