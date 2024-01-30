
// components/Header.tsx

import React from 'react';
import Link from 'next/link';

// シンプルなヘッダーコンポーネント
const Header = () => {
  return (
    
    <header className= "text-center h-[80px] p-2 left-0 top-0 bg-gradient-to-b from-yellow-200 to-yellow-300">
   
      <div className="left-[96px] top-[8px] absolute text-green-950 text-[40px] font-bold font-['Zen Maru Gothic']">
        みまもり
      </div>
      <div className="right-0 top-[30px] absolute flex space-x-4">
        <Link href="/register" passHref>
          <div className="text-green-950 text-lg font-normal font-['Inter']">
            新規登録
          </div>
        </Link>
        <Link href="/senior-login" passHref>
          <div className="text-green-950 text-lg  font-normal font-['Inter']">
            シニア用ログイン
          </div>
        </Link>
        <Link href="/login" passHref>
          <div className="text-green-950 text-lg font-normal font-['Inter']">
            ご家族用ログイン
          </div>
        </Link>
      </div>
    </header>
  );
};


export default Header;

