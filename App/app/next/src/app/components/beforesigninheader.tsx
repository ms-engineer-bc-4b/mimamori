import React from "react";
import Link from "next/link";

// ヘッダーコンポーネント
const FirstHeader = () => {
  return (
  <header className="">
  {/* ここにヘッダーのコンテンツを追加 */}
  <div className="left-[96px] top-[8px] absolute text-green-950 text-[64px] font-bold font-['Zen Maru Gothic']">
  みまもり
  </div>
  <div className="left-[600px] top-[59px] absolute text-green-950 text-lg font-normal font-['Inter']">
    <Link href="/register">
      新規登録
    </Link>
  </div>
  <div className="left-[700px] top-[59px] absolute text-green-950 text-lg font-normal font-['Inter']">
    <Link href="/senior/senior_login">
      助けられ上手さん用ログイン
    </Link>
  </div>
  <div className="left-[955px] top-[59px] absolute text-green-950 text-lg font-normal font-['Inter']">
    <Link href="/login">
      世話焼きさん用ログイン
    </Link>
  </div>
  <div className="w-[1100px] h-px left-[44px] top-[90px] absolute bg-zinc-300 rounded-[5px]"></div>

  </header>
  );
};


export default FirstHeader;