import PortalHeader from '@/components/PortalHeader';
import React from 'react';
import Link from 'next/link';

const MagicPanPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center">
      <main className="flex-grow">
        <PortalHeader />

        <div className="flex-grow flex flex-col items-center justify-center">
          <Link href="/kyosan" className="underline">↩協賛一覧へ</Link>
          <h1 className="text-2xl font-bold mb-2 mt-2">マジックパン</h1>
          <p>〒658-0032 兵庫県神戸市東灘区向洋町中２丁目２ 2F アイランドセンター駅改札前</p>
          {/* eslint-disable-next-line  */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.1587369215398!2d135.26891590430228!3d34.689161772305866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008d0c2b611a4d%3A0xb8f88026d8521fc9!2z44Oe44K444OD44Kv44OR44OzIOWFreeUsuOCouOCpOODqeODs-ODieW6lw!5e0!3m2!1sja!2sjp!4v1741871923948!5m2!1sja!2sjp" style={{border:0, width: "100%", height: "350px"}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


        </div>
      </main>
    </div>
  );
};

export default MagicPanPage;
