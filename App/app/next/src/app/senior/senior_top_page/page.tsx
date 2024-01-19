import Link from 'next/link';

// シンプルなヘッダーコンポーネント
const Header = () => {
  return (
    <header className="text-center py-4 bg-gray-200">
      {/* ここにヘッダーのコンテンツを追加 */}



      <div className="w-[1100px] h-px left-[44px] top-[102px] absolute bg-zinc-300 rounded-[5px]"></div>

      
    </header>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヘッダーの呼び出し */}
      {/* <Header /> */}

      {/* メインコンテンツ */}
      <main className="flex-grow flex flex-col items-center p-24">
        {/* <p>シニア用トップページ</p> */}
        {/*  
        
        // みまもり
            text-green-950
            text-[64px]
            font-bold
            font-['Zen
            Maru
            Gothic']
            ---
            // 管理画面
            text-green-950
            text-lg
            font-normal
            font-['Inter']
            ---
            // ログアウト
            text-green-950
            text-lg
            font-normal
            font-['Inter']
            ---
            // メニューを選んでください
            text-black
            text-[17px]
            font-normal
            font-['Inter']
            ---
            // 本日の健康の登録
            text-white
            text-[32px]
            font-normal
            font-['Inter']
            ---
            // 管理画面
            text-white
            text-[32px]
            font-normal
            font-['Inter']
        
        
        */}

        {/* CSS */}
        <div className="w-[1188px] h-[703px] relative">
             <div className="w-[1200px] h-[2000px] p-2 left-0 top-0 absolute bg-gradient-to-b from-yellow-200 to-yellow-300 border border-black"></div>


            <div className="w-[327px] h-[27px] left-[96px] top-[133px] absolute text-black text-[17px] font-normal font-['Inter']">メニューを選んでください</div>
            <div className="w-[476px] h-[196px] left-[356px] top-[253px] absolute bg-blue-700 rounded-[10px]"></div>
            <div className="w-64 h-[39px] left-[466px] top-[332px] absolute text-white text-[32px] font-normal font-['Inter']">⁩本日の健康の登録</div>
            <div className="w-[476px] h-[196px] left-[356px] top-[562px] absolute bg-red-600 rounded-[10px]"></div>
            <div className="left-[517px] top-[641px] absolute text-white text-[32px] font-normal font-['Inter']">管理画面</div>
        </div>

      </main>

      {/* フッターの呼び出し */}
    </div>
  );
}
