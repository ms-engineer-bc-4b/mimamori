
"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

import './globals.css';
import Header from '../components/Header';

// シンプルなヘッダーコンポーネント


// Home コンポーネント
export default function Home() {




  return (   
    <div className="form-container   ">
      {/* 背景のdiv */}
    
      <Header />

      {/* メインコンテンツ */}
      <main className={`toppage`}>

        
        <div className="text-green-950 text-3xl font-normal font-['Zen Maru Gothic']">遠くにいても安心。<br /></div>
        <div className="text-green-950 text-xl font-normal font-['Zen Maru Gothic']">みまもりは高齢者と家族をつなぐ、安心のコミュニケーションアプリです<br /></div>
        <div className={`flex-grow flex flex-col  p-24 relative z-10 items-center`}>
        <div className="text-black text-[25px] font-normal font-['Inter']">新規登録はこちらから</div>
  
        {/* 新規登録画面へのリンク */}
     
        <Link href="/register" passHref>
          <div className="w-[304px] h-[90px] bg-gradient-to-b from-teal-500 via-lime-600 to-green-400 rounded-[10px] flex items-center justify-center" >
            <div className="w-[183px] h-[45px] text-black text-[40px] font-normal font-['Inter'] items-center">
              新規登録
            </div>
          </div>
        </Link>
        </div>
      </main>
  
      {/* フッターの呼び出し */}
    </div>
  );}