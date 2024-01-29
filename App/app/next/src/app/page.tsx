
"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Calendar from '@/components/Calendar';
import VoiceToText from '@/components/VoiceToText';

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

      <Calendar />

      {/* メインコンテンツ */}
      <main className="flex-grow flex flex-col items-center p-24">
        <p>遠くにいても安心。みまもりは高齢者と家族をつなぐ、安心のコミュニケーションアプリです</p>

       

        {/* 新規登録画面へのリンク */}
        <Link href="/register" passHref>
        
       新規登録
        </Link>
      </main>

      {/* フッターの呼び出し */}
    </div>
  );
}
