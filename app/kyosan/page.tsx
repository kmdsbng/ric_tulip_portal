import PortalHeader from '@/components/PortalHeader';
import React from 'react';
import Link from 'next/link';
import { kyosans } from '@/domain/kyosan';

const KyosanPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center">
      <main className="flex-grow">
        <PortalHeader />

        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-2">協賛団体一覧</h1>

          <div className="flex flex-col items-center">
            <ul className="list-disc list-inside">
              {kyosans.map((kyosan) => (
                <li key={kyosan.id} className="mb-2">
                  <Link
                    href={`/kyosan/${kyosan.id}`}
                    className="text-xl font-semibold text-pink-700 hover:text-pink-900 transition-colors duration-200 underline"
                  >
                    {kyosan.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default KyosanPage;
