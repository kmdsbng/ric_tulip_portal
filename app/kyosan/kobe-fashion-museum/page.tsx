import PortalHeader from '@/components/PortalHeader';
import React from 'react';
import Link from 'next/link';

const KobeFashionMuseumPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center">
      <main className="flex-grow">
        <PortalHeader />

        <div className="flex-grow flex flex-col items-center justify-center">
          <Link href="/kyosan" className="underline">↩協賛一覧へ</Link>
          <h1 className="text-2xl font-bold mb-2 mt-2">神戸ファッション美術館</h1>
          <p>〒658-0032 神戸市東灘区向洋町中２丁目９−１ 神戸ファッションプラザ 1F</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1247.7539532308508!2d135.26934464114888!3d34.688444374284174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008d7ca2d0f97f%3A0x3f1431d5fb4ca005!2z56We5oi444OV44Kh44OD44K344On44Oz576O6KGT6aSo!5e0!3m2!1sja!2sjp!4v1741870043406!5m2!1sja!2sjp" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </main>
    </div>
  );
};

export default KobeFashionMuseumPage;
