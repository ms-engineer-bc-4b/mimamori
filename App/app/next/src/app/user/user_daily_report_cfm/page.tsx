import Link from 'next/link';
// import { getAllTodos } from "@/api";
// import AddTask from "./components/AddTask";
// import DailyReport from "./components/TodoList";
import SeniorReportCmf from '@/app/senior/senior_daily_report_cfm/page';

// シンプルなヘッダーコンポーネント
const Header = () => {
  return (
    <header className="text-center h-[160px] p-2 left-0 top-0 bg-gradient-to-b from-yellow-200 to-yellow-300">
    {/* ここにヘッダーのコンテンツを追加 */}

    <div className="w-[1400px] h-[703px] relative">
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

export default function UserReportCmf() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* メインコンテンツ */}
      <main>
        <SeniorReportCmf/>
        {/* 上記読み込むときの方法 要確認*/}

              {/* メッセージ入力フォーム */}
              <input className="input is-large w-[381.82px] h-[52.48px] left-[117.18px] top-0 absolute bg-white border border-black">
              </input>

              {/* 送信ボタンとその設定 */}
              <div className="w-[261px] h-[65px] left-[674px] top-[1344px] 
                absolute bg-zinc-300 rounded-[10px] shadow">
              </div>
                                  <input className="input is-large w-[381.82px] h-[52.48px] left-[117.18px] top-0 absolute bg-white border border-black">
                    </input>
              <div className="left-[780px] top-[1362px] 
                absolute text-black text-[25px] font-normal font-['Inter']">
                <Link href="/user/user_daily_report_done">
                メッセージの送信
                </Link>
              </div>
        
      </main>

      {/* フッターの呼び出し */}
    </div>
  );
}



