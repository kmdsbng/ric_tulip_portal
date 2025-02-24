import "./globals.css"
import type { Metadata } from "next"
import { Quicksand } from "next/font/google"
import type React from "react"

const quicksand = Quicksand({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "六甲アイランドチューリップ祭ポータルサイト",
  description:
    "六甲アイランドでチューリップ祭来場者向けサイトです。チューリップみくじ、オンライン投票、クイズ、花壇マップが利用できます。",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={quicksand.className}>{children}</body>
    </html>
  )
}

