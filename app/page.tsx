import Link from "next/link";
import PortalHeader from "@/components/PortalHeader";

export default function Home() {

  // href="https://tulip-vote-asset-bucket.s3.ap-northeast-1.amazonaws.com/index.html"



  return (
    <div className="min-h-screen flex flex-col bg-pink-50">
      <main className="flex-grow">
        <PortalHeader />

        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <FeatureCard
              title="チューリップみくじ"
              href="/mikuji"
              icon="🥠"
              targetBlank={false}
            />
            <FeatureCard
              title="オンライン投票"
              href="/vote"
              icon="🌷"
              targetBlank={false}
            />
            <FeatureCard
              title="チューリップクイズ"
              href="/tulip-quiz"
              icon="❓"
              targetBlank={false}
            />
            <FeatureCard
              title="花壇マップ"
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
  href,
  icon,
  targetBlank,
}: {
  title: string;
  href: string;
  icon: string;
  targetBlank: boolean;
}) {
  return (
    <Link
      href={href}
      className="block p-1 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-pink-200 hover:border-pink-300"
      target={targetBlank ? "_blank" : undefined}
    >
      <div style={{ display: "flex"}}>
        <div className="text-4xl mb-2">{icon}</div>
        <h4 className="text-xl font-semibold mb-2 text-pink-700 mt-2">{title}</h4>
      </div>
    </Link>
  );
}
