import Image from "next/image";
import Link from "next/link";

export default function PortalHeader() {
  return (
    <div className="relative h-32 overflow-hidden">
      <Image
        src="/tulip_back.jpeg"
        alt="チューリップ画像"
        fill
        priority
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-pink-300 bg-opacity-20 flex items-center justify-center">
        <Link href="/" className="underline" style={{ color: "#c1c2ff" }}>
          <h2
            className="text-white text-3xl sm:text-5xl font-bold text-center px-4"
            style={{ color: "#bdffd8" }}
          >
            六甲アイランドチューリップ祭ポータル
          </h2>
        </Link>
      </div>
    </div>
  );
}
