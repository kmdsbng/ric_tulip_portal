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
          <p>兵庫県神戸市東灘区向洋町中５丁目１５ マーケットシーン 301A</p>
          {/* eslint-disable-next-line  */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.1453907698775!2d135.2676081993349!3d34.690508783757636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008ee5ee493c5b%3A0x801868b3745c58f2!2sIN%20THA%20DOOR%20BREWING!5e0!3m2!1sja!2sjp!4v1741872219465!5m2!1sja!2sjp" style={{border:0, width: "100%", height: "350px"}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </main>
    </div>
  );
};

export default InThaDoorBrewingPage;
