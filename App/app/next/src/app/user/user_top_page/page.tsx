import Link from 'next/link';

// シンプルなヘッダーコンポーネント
const Header = () => {
  return (
  <header className= "text-center h-[160px] p-2 left-0 top-0 bg-gradient-to-b from-yellow-200 to-yellow-300">
    {/* ここにヘッダーのコンテンツを追加 */}

    <div className="w-[1188px] h-[703px] relative">
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
    <div className="w-[1100px] h-px left-[44px] top-[102px] absolute bg-zinc-300 rounded-[5px]"></div>
    </div>

  </header>
  );
};

export default function UserTop() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヘッダーの呼び出し */}
      <Header />

      {/* メインコンテンツ */}
      <main>
        {/* 見守り用トップページ*/}        
        <div className="w-[1188px] h-[703px] relative">
          {/* 背景CSS */}
            <div className="w-[2600px] h-[2000px] p-2 left-0 top-0 absolute bg-gradient-to-b from-yellow-200 to-yellow-300">
            </div>
            {/* 文章 */}
            <div className="w-[327px] h-[27px] left-[96px] top-[133px] absolute text-black text-[17px] font-normal font-['Inter']">
              メニューを選んでください
            </div>

            <div className="w-[476px] h-[196px] left-[356px] top-[253px] absolute bg-blue-700 rounded-[10px]">
            </div>
            <div className="w-64 h-[39px] left-[466px] top-[332px] absolute text-white text-[32px] font-normal font-['Inter']">
              <Link href="/user/user_daily_report_cfm">
                本日の健康の確認
              </Link>
            </div>

            <div className="w-[476px] h-[196px] left-[356px] top-[562px] absolute bg-red-600 rounded-[10px]">
            </div>
            <div className="left-[517px] top-[641px] absolute text-white text-[32px] font-normal font-['Inter']">
              <Link href="/user/user_home">
                管理画面
              </Link>
            </div>
        </div>

      </main>

      {/* フッターの呼び出し */}
    </div>
  );
}
