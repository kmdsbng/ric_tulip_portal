import "./globals.css"
import type { Metadata } from "next"
import { Quicksand } from "next/font/google"
import type React from "react"

const quicksand = Quicksand({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "六甲アイランドチューリップ祭",
  description:
    "六甲アイランドで開催される美しいチューリップ祭りの公式サイトです。オンライン投票、クイズ、花壇マップをお楽しみください。",
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

