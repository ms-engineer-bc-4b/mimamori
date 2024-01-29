// Home.tsx
'use client'



"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

// シンプルなヘッダーコンポーネント
const Header = () => {
  return (
    <header className="text-center py-4 bg-gray-200">
      {/* ここにヘッダーのコンテンツを追加 */}
      みまもり
    </header>
  );
};

// Home コンポーネント
export default function Home() {
  



  return (
    <div className="flex flex-col min-h-screen">
      {/* ヘッダーの呼び出し */}
      <Header />

      {/* メインコンテンツ */}
      <main className="flex-grow flex flex-col items-center p-24">
        <p>新規登録完了しました</p>

       

        {/* 新規登録画面へのリンク */}
        <Link href="success/subscription" passHref>
        決済画面へ
      
        </Link>
      </main>

      {/* フッターの呼び出し */}
    </div>
  );
}
