import PortalHeader from '@/components/PortalHeader';
import React from 'react';
import Link from 'next/link';

const InThaDoorBrewingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center">
      <main className="flex-grow">
        <PortalHeader />

        <div className="flex-grow flex flex-col items-center justify-center">
          <Link href="/kyosan" className="underline">↩協賛一覧へ</Link>
          <h1 className="text-2xl font-bold mb-2 mt-2">IN THA DOOR BREWING</h1>
          <p>兵庫県神戸市東灘区向洋町中９丁目５</p>
          {/* eslint-disable-next-line  */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4046.784979668721!2d135.2695190489565!3d34.681806272535596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600093a75a6082d3%3A0xd54dc37e4b770fef!2sIN%20THA%20DOOR%20BREWING%20SEASIDE%20BEER%20TAP%20(BREWERY)!5e0!3m2!1sja!2sjp!4v1743151456456!5m2!1sja!2sjp" style={{border:0, width: "100%", height: "350px"}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </main>
    </div>
  );
};

export default InThaDoorBrewingPage;
