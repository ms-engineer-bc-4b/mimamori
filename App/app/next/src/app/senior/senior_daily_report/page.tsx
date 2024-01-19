import Link from 'next/link';
// import { getAllTodos } from "@/api";
// import AddTask from "./components/AddTask";
// import DailyReport from "./components/TodoList";

// シンプルなヘッダーコンポーネント
const Header = () => {
  return (
    <header className="text-center py-4 bg-gray-200">
      {/* ここにヘッダーのコンテンツを追加 */}
      みまもり

      <Link href="/register" passHref>
      新規登録
      </Link>

      <Link href="/senior-login" passHref>
      シニア用ログイン
      </Link>

      <Link href="/login" passHref>
      ご家族用ログイン
      </Link>

      
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
        {/* <h1 className='text-2xl font-bold'>本日●月●日の健康の記録をお願いします</h1> */}
        <div className="w-[327px] h-[27px] text-black text-[17px] font-normal font-['Inter']">本日●月●日の健康の記録をお願いします</div>

        {/* // 本日●月●日の健康の記録をお願いします
          text-black
          text-[17px]
          font-normal
          font-['Inter'] */}
        {/* <AddTask /> */}
    
        {/* <DailyReport tasks={tasks} /> */}

      </main>

      {/* フッターの呼び出し */}
    </div>
  );
}
