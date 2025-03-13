import PortalHeader from '@/components/PortalHeader';
import React from 'react';
import Link from 'next/link';

const UsamiPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center">
      <main className="flex-grow">
        <PortalHeader />

        <div className="flex-grow flex flex-col items-center justify-center">
          <Link href="/kyosan" className="underline">↩協賛一覧へ</Link>
          <h1 className="text-2xl font-bold mb-2 mt-2">宇佐美</h1>
          <p>兵庫県神戸市</p>
          {/* マップを表示するコンポーネントを追加 */}
        </div>
      </main>
    </div>
  );
};

export default UsamiPage;
