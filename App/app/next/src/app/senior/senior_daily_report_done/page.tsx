import Link from 'next/link';
// import { getAllTodos } from "@/api";
// import AddTask from "./components/AddTask";
// import DailyReport from "./components/TodoList";

// シンプルなヘッダーコンポーネント
const Header = () => {
  return (
    <header className="text-center p-2 left-0 top-0 bg-gradient-to-b from-yellow-200 to-yellow-300">
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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヘッダーの呼び出し */}
      <Header />

      {/* メインコンテンツ */}
      <main className="flex-grow flex flex-col items-center p-24">
        <div className="w-[206px] h-[26px] text-black text-[17px] font-normal font-['Inter']">本日●月●日の健康の記録</div>
        {/* CSS*/}
        <div className="w-[1200px] h-[2000px] relative">
        </div>
        {/* 背景 */}
          <div className="w-[1200px] p-2 left-0 top-0 absolute bg-gradient-to-b from-yellow-200 to-yellow-300 border border-black">
          </div>
          {/* ヘッダー */}
          <div className="left-[98px] top-[2px] absolute text-green-950 text-[64px] font-bold font-['Zen Maru Gothic']">
            みまもり
          </div>
          <div className="w-[1100px] h-px left-[46px] top-[102px] absolute bg-zinc-300 rounded-[5px]">
          </div>
          {/*  */}
          <div className="w-[206px] h-[26px] left-[493px] top-[115px] absolute text-black text-[17px] font-normal font-['Inter']">
            {/* 日付取得の関数を後ほど記載 */}
            本日●月●日の健康の記録
          </div>

          <div className="w-[999px] h-[116px] left-[101px] top-[176px] absolute text-center text-black text-[17px] font-normal font-['Inter']">
            登録ありがとうございました。<br/>
            登録内容を家族へ送信しました。<br/>
            月次の管理画面を確認したい場合は管理画面ボタンを押下してください
          </div>
          
          <div className="w-[261px] h-[65px] left-[335px] top-[292px] absolute bg-zinc-300 rounded-[10px] shadow">
          </div>

          <div className="w-[261px] h-[65px] left-[638px] top-[292px] absolute bg-zinc-300 rounded-[10px] shadow">
          </div>

          <div className="left-[416px] top-[309px] absolute text-black text-[25px] font-normal font-['Inter']">
            管理画面
          </div>
          <div className="left-[731px] top-[309px] absolute text-black text-[25px] font-normal font-['Inter']">
            閉じる
          </div>
          {/* 管理画面 */}
          <div className="left-[921px] top-[73px] absolute justify-start items-start inline-flex">
              <div className="text-green-950 text-lg font-normal font-['Inter']">
                管理画面
              </div>
          </div>
      <div className="left-[1011px] top-[73px] absolute text-green-950 text-lg font-normal font-['Inter']">
        ログアウト
      </div>
{/* </div> */}

      </main>

      {/* フッターの呼び出し */}
    </div>
  );
};
