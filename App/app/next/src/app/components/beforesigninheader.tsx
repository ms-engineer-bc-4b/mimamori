import React from "react";
import Link from "next/link";

// ヘッダーコンポーネント
const FirstHeader = () => {
  return (
  <header className="text-center p-2 left-0 top-0 bg-gradient-to-b from-yellow-200 to-yellow-300">
  {/* ここにヘッダーのコンテンツを追加 */}
  <div className="left-[96px] top-[8px] absolute text-green-950 text-[64px] font-bold font-['Zen Maru Gothic']">
  みまもり
  </div>
  <div className="left-[768px] top-[69px] absolute text-green-950 text-lg font-normal font-['Inter']">
    <Link href="/register">
      新規登録
    </Link>
  </div>
  <div className="left-[900px] top-[69px] absolute text-green-950 text-lg font-normal font-['Inter']">
    <Link href="/senior/senior_login">
      シニア用ログイン
    </Link>
  </div>
  <div className="left-[1100px] top-[69px] absolute text-green-950 text-lg font-normal font-['Inter']">
    <Link href="/login">
      ご家族用ログイン
    </Link>
  </div>
  <div className="w-[1188px] h-[703px] left-[6px] top-0 absolute">
  </div>

  </header>
  );
};


export default FirstHeader;