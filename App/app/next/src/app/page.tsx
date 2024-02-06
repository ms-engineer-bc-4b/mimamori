
"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaUserCircle, FaUserPlus } from "react-icons/fa";
import './globals.css';
import Header from '@/components/Header';
import { createContext } from 'vm';
//import Calendar from '@/components/Calendar';
//import VoiceToText from '@/components/VoiceToText';

// シンプルなヘッダーコンポーネント

// Home コンポーネント
export default function Home() {




  return (

    <div className="form-container   ">

      {/* 背景のdiv */}
    
      <Header />
          {/*  <Calendar />*/}
    

      {/* メインコンテンツ */}
      <main className={`toppage`}>

        
        <div className="text-green-950 text-3xl font-normal font-['Zen Maru Gothic']">遠くにいても安心。<br /></div>
        <div className="text-green-950 text-xl font-normal font-['Zen Maru Gothic']">みまもりは高齢者と家族をつなぐ、安心のコミュニケーションアプリです<br /></div>
        <div className={`flex-grow flex flex-col  p-24 relative z-10 items-center`}>
        <div className="text-black text-[25px] font-normal font-['Inter']">新規登録はこちらから</div>
  
        {/* 新規登録画面へのリンク */}
     
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
      </main>
  
      {/* フッターの呼び出し */}
   
    </div>
  
  );}