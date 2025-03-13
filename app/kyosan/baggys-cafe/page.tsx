import PortalHeader from '@/components/PortalHeader';
import React from 'react';
import Link from 'next/link';

const BaggysCafePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center">
      <main className="flex-grow">
        <PortalHeader />

        <div className="flex-grow flex flex-col items-center justify-center">
          <Link href="/kyosan" className="underline">↩協賛一覧へ</Link>
          <h1 className="text-2xl font-bold mb-2 mt-2">Baggy&apos;s Cafe</h1>
          <p>兵庫県神戸市東灘区向洋町中２丁目１１</p>
          {/* eslint-disable-next-line  */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.31430683148!2d135.26960486476855!3d34.68932159608329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008d70b52890f1%3A0xd71232ae60081e81!2zQmFnZ3kncyBDYWZlICjjg5Djgq7jg7zjgrrjgqvjg5Xjgqcp!5e0!3m2!1sja!2sjp!4v1741871786540!5m2!1sja!2sjp" style={{border:0, width: "100%", height: "350px"}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </main>
    </div>
  );
};

export default BaggysCafePage;
