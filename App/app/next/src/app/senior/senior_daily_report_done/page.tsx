import Link from 'next/link';
// import { getAllTodos } from "@/api";
// import AddTask from "./components/AddTask";
// import DailyReport from "./components/TodoList";
import Header from '@/app/components/aftersigninheader';


// 日時取得
// 現在の日時を取得
const now = new Date();
// 日本語のロケールで日付のみを取得
const nowStr = now.toLocaleDateString('ja-JP', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
});


export default function SeniorReportDone() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヘッダーの呼び出し */}
      <Header />

      {/* メインコンテンツ */}
      <main className="flex-grow flex flex-col items-center p-24">
        {/* CSS */}

          {/* お礼文章 */}
          <div className="w-[999px] h-[116px] left-[101px] top-[176px] absolute text-center
           text-black text-[17px] font-normal font-['Inter']">
            {nowStr} の健康登録ありがとうございました。<br/>
            登録内容を家族へ送信しました。<br/>
            月次の管理画面を確認したい場合は管理画面ボタンを押下してください
          </div>
          {/* 管理画面ボタン */}
          <div className="w-[261px] h-[65px] left-[335px] top-[292px] absolute bg-zinc-300 rounded-[10px] shadow">
          </div>
          <div className="left-[416px] top-[309px] absolute text-black text-[25px] font-normal font-['Inter']">
            <Link href="/senior/senior_home">
              管理画面
            </Link>
          </div>
          {/* 閉じる画面ボタン */}
          <div className="w-[261px] h-[65px] left-[638px] top-[292px] absolute bg-zinc-300 rounded-[10px] shadow">
          </div>
          {/* 閉じるときのコードは？ */}
          <div className="left-[731px] top-[309px] absolute text-black text-[25px] font-normal font-['Inter']">
            閉じる
          </div>


      </main>

      {/* フッターの呼び出し */}
    </div>
  );
};
