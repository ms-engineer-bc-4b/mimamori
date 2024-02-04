import React from "react";
import Link from "next/link";

// シンプルなヘッダーコンポーネント
const Header = () => {
  return (
    <header className="text-center h-[100px] p-2 left-0 top-0 bg-gradient-to-b from-yellow-200 to-yellow-300">
    {/* ここにヘッダーのコンテンツを追加 */}

    <div className="w-[1400px] h-[90px] relative">
      <div className="left-[96px] top-[8px] absolute text-green-950 text-[64px] font-bold font-['Zen Maru Gothic']">
        みまもり
      </div>
      <div className="left-[902px] top-[60px] absolute text-green-950 text-lg font-normal font-['Inter']">
      <Link href="/senior/senior_home">
        管理画面
      </Link>
      </div>
      <div className="left-[992px] top-[60px] absolute text-green-950 text-lg font-normal font-['Inter']">
      <Link href="/senior/senior_login">
        ログアウト
      </Link>
      </div>
      <div className="w-[1100px] h-px left-[44px] top-[90px] absolute bg-zinc-300 rounded-[5px]"></div>
    </div>

  </header>
  );
};
export default Header;