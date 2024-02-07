
// components/Header.tsx

import React from 'react';
import Link from 'next/link';
import { FaUserCircle, FaUserPlus } from "react-icons/fa";
import '@fontsource/zen-maru-gothic';
// シンプルなヘッダーコンポーネント
import { SlCalender } from "react-icons/sl";

const Header = () => {
  return (

    <header >
      <div className="flex items-center bg-yellow-100 p-4">
      <Link href="/" passHref>
      <div className="flex items-center p-4" style={{ fontFamily: 'Zen Maru Gothic', fontSize: '30px', fontWeight: 'bold' }}>
  みまもり
</div>
</Link>  
        <div className="absolute items-center flex space-x-4 right-4">
  <button className="flex items-center bg-gray-500 border text-white p-3 rounded-full">
    <Link href="/senior/senior_home" passHref>
      <div className="flex items-center">
      <SlCalender className="text-3xl"/>
    
        <div className="text-lg font-normal font-['Inter'] ml-2">
         管理画面
        </div>
      </div>
    </Link>
  </button>



</div>

      </div>
    </header>
  );
};


export default Header;

