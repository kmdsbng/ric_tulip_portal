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
          <h1 className="text-2xl font-bold mb-2 mt-2">apollostation 神戸六甲アイランドSS／㈱西日本宇佐美</h1>
          <p>兵庫県神戸市東灘区向洋町東１丁目４</p>
          {/* eslint-disable-next-line  */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1898.1249675323897!2d135.27090586720956!3d34.69443418351511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008d6fed126441%3A0xdfdd9bbd9ed3e0f8!2zYXBvbGxvc3RhdGlvbiDnpZ7miLjlha3nlLLjgqLjgqTjg6njg7Pjg4lTU--8j-OIseilv-aXpeacrOWuh-S9kOe-jg!5e0!3m2!1sja!2sjp!4v1741872117578!5m2!1sja!2sjp" style={{border:0, width: "100%", height: "350px"}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </main>
    </div>
  );
};

export default UsamiPage;
