import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-pink-50">
      <main className="flex-grow">
        <div className="relative h-32 overflow-hidden">
          <Image
            src="/tulip_back.jpeg?height=100&width=800"
            alt="チューリップ画像"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-pink-300 bg-opacity-20 flex items-center justify-center">
            <h2
              className="text-white text-3xl sm:text-5xl font-bold text-center px-4"
              style={{ color: "#bdffd8" }}
            >
              六甲アイランドチューリップ祭ポータル
            </h2>
          </div>
        </div>

        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <FeatureCard
              title="オンライン投票"
              description=""
              href="/vote"
              icon="🌷"
              targetBlank={false}
            />
            <FeatureCard
              title="チューリップクイズ"
              description=""
              href="/tulip-quiz"
              icon="❓"
              targetBlank={false}
            />
            <FeatureCard
              title="花壇マップ"
              description=""
              href="https://www.google.com/maps/d/u/1/edit?mid=1J3PZkv5GbfvCY6ZS2rSJn2nziIC-Cvw&usp=sharing"
              icon="🗺️"
              targetBlank={true}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  href,
  icon,
  targetBlank,
}: {
  title: string;
  description: string;
  href: string;
  icon: string;
  targetBlank: boolean;
}) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow border-2 border-pink-200 hover:border-pink-300"
      target={targetBlank ? "_blank" : undefined}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <h4 className="text-xl font-semibold mb-2 text-pink-700">{title}</h4>
      <p className="text-pink-600">{description}</p>
    </Link>
  );
}
