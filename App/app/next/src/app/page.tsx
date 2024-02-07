
"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaUserCircle, FaUserPlus } from "react-icons/fa";
import './globals.css';
import Header from '@/components/Header';
import { createContext } from 'vm';
import Image from 'next/image'

//import Calendar from '@/components/Calendar';
//import VoiceToText from '@/components/VoiceToText';

// シンプルなヘッダーコンポーネント

import '@fontsource/zen-maru-gothic';

// Home コンポーネント
export default function Home() {




  return (

    <div className="form-container   ">

      {/* 背景のdiv */}

      <Header />
      {/*  <Calendar />*/}


      {/* メインコンテンツ */}
      <main className={`toppage`}>

     
        <div className="text-green-950 text-3xl font-normal font-['Zen Maru Gothic']" style={{ fontFamily: 'Zen Maru Gothic', fontSize: '30px', fontWeight: 'bold' }}>遠くにいても安心。<br /></div>
        <div className="text-green-950 text-xl font-normal font-['Zen Maru Gothic'] " style={{ fontFamily: 'Zen Maru Gothic', fontSize: '20px', fontWeight: 'bold' }}>みまもりは高齢者と家族をつなぐ、安心のコミュニケーションアプリです<br /></div>
        <div className={`flex-grow flex flex-col  p-24 relative z-10 items-center`}>
        <Image
            src="/mimamori-top.png"
            alt="トップ画面"
            width={500}
            height={500}
            priority
          />
              <div className="text-black text-[25px] font-normal font-['Inter']"></div>
              <div style={{ marginTop: '20px' }}>
          <div className="text-black text-[25px] font-normal font-['Inter']" style={{ fontFamily: 'Zen Maru Gothic', fontSize: '20px', fontWeight: 'bold' }}>新規登録はこちらから</div>

          {/* 新規登録画面へのリンク */}
          </div>
         
          <div style={{ marginTop: '20px' }}>
             <button className="flex items-center bg-gray-500 border text-white p-3 rounded-full">
            <Link href="/register" passHref>
              <div className="flex items-center">
                <FaUserPlus className="text-3xl" />
              
                <div className="text-lg font-normal font-['Inter'] ml-2">
                  新規登録
                </div>
              </div>
            </Link>
          </button>
          </div>
        </div>
      </main>

      {/* フッターの呼び出し */}

    </div>

  );
}