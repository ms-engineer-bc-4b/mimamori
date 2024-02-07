
// components/Header.tsx

import React from 'react';
import Link from 'next/link';
// import { FaUserCircle, FaUserPlus } from "react-icons/fa";
// import '@fontsource/zen-maru-gothic';
// シンプルなヘッダーコンポーネント

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
    <Link href="/register" passHref>
      <div className="flex items-center">
        {/* <FaUserPlus className="text-3xl" /> */}
        <div className="text-lg font-normal font-['Inter'] ml-2">
          新規登録
        </div>
      </div>
    </Link>
  </button>

  <button className="flex items-center bg-orange-500 text-white p-3 rounded-full">
    <Link href="/senior-login" passHref>
      <div className="flex items-center">
        {/* <FaUserCircle className="text-3xl" /> */}
        <div className="text-lg font-normal font-['Inter'] ml-2">
          助けられ上手ログイン
        </div>
      </div>
    </Link>
  </button>

  <button className="flex items-center bg-blue-500 text-white p-3 rounded-full">
    <Link href="/login" passHref>
      <div className="flex items-center">
        {/* <FaUserCircle className="text-3xl" /> */}
        <div className="text-lg font-normal font-['Inter'] ml-2">
          世話焼きさんログイン
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

