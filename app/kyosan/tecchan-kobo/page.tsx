import PortalHeader from '@/components/PortalHeader';
import React from 'react';
import Link from 'next/link';

const TecchanKoboPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center">
      <main className="flex-grow">
        <PortalHeader />

        <div className="flex-grow flex flex-col items-center justify-center">
          <Link href="/kyosan" className="underline">↩協賛一覧へ</Link>
          <h1 className="text-2xl font-bold mb-2 mt-2">てっちゃん工房</h1>
          <p>兵庫県神戸市東灘区向洋町西５丁目８</p>
          {/* eslint-disable-next-line  */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.3467231500904!2d135.2610422784372!3d34.68768567062175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008d82996bffff%3A0x85d7c3d9e42ba88b!2z44Gm44Gj44Gh44KD44KT5bel5oi_!5e0!3m2!1sja!2sjp!4v1741871972513!5m2!1sja!2sjp" style={{border:0, width: "100%", height: "350px"}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </main>
    </div>
  );
};

export default TecchanKoboPage;
