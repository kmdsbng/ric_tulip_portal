"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import { Flower2, CheckCircle2, XCircle } from "lucide-react";
import PortalHeader from "@/components/PortalHeader";
import { Tulip, TULIPS } from "@/domain/tulip";
import React from "react";

export default function Vote() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [confirmedAnswer, setConfirmedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://fnrbegfgqf.execute-api.ap-northeast-1.amazonaws.com/voted',
          {
            mode: 'cors',
            credentials: 'omit',
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json_data = await response.json();
        const voted = json_data.result === 'voted';
        setHasVoted(voted);
      } catch (error) {
        alert('エラーが発生しました');
      }
    };
    fetchData();
  }, []);

  const sortedTulips = TULIPS.slice().sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }

    if (a.name > b.name) {
      return 1;
    }
    return 0;

  });


  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center">
      <main className="flex-grow">

        <PortalHeader />



        <div className="flex-grow flex flex-col items-center justify-center p-8">

          <h1 className="text-4xl font-bold mb-4">
            チューリップ投票
          </h1>


        {!hasVoted ? (
          <>
            <div className="mb-8">
              <p className="text-lg">
                お気に入りのチューリップに投票しよう！
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {sortedTulips.map((tulip) => (
                <div key={tulip.key} className="bg-white rounded-lg shadow-md p-4">
                  <a
                    href="#"
                    onClick={async (e) => {
                      e.preventDefault();
                      try {
                        const formData = new FormData();
                        formData.append('tulip_code', tulip.key);

                        const response = await fetch(
                          'https://fnrbegfgqf.execute-api.ap-northeast-1.amazonaws.com/save_vote',
                          {
                            method: 'POST',
                            mode: 'cors',
                            // headers: {
                            //   'Content-Type': 'application/json',
                            // },
                            // body: JSON.stringify({ tulip_code: tulip.key }),
                            body: formData,
                          }
                        );
                        if (response.ok) {
                          window.location.href = '/vote-result';
                        } else {
                          alert('エラーが発生しました');
                        }
                      } catch (error) {
                        alert('エラーが発生しました');
                      }
                    }}
                    className="block flex flex-col items-center text-center p-2 bg-pink-100 hover:bg-pink-200 rounded-md text-blue-500 hover:underline"
                  >
                    <img src={`/tulip_photo/${tulip.key}100.jpg`} alt={tulip.name} className="w-10 h-10 object-cover rounded-lg shadow-md" />
                    <div className="pt-2">
                      {tulip.name}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div>投票済みです。</div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <a
                href="/vote-result"
                className="block text-center p-2 bg-pink-100 hover:bg-pink-200 rounded-md text-blue-500 hover:underline"
              >
                投票結果を見る
              </a>
            </div>
          </>
        )}

        </div>

      </main>
    </div>
  );
}
