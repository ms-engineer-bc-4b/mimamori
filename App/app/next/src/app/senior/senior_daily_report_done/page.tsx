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
        <div class="w-[327px] h-[27px] text-black text-[17px] font-normal font-['Inter']">本日●月●日の健康の記録をお願いします</div>

        {/* CSS*/}
        <div class="w-[375px] h-[1600px] pl-[29px] pt-[124px] pb-[1346px] flex-col justify-start items-center inline-flex">
    <div class="w-[346px] h-[130px] text-black text-[17px] font-normal font-['Inter']">メッセージありがとうございました。<br/>メッセージをシニア様へ送信しました。<br/>月次の管理画面を確認したい場合は管理画面ボタンを押下してください</div>
</div>

      </main>

      {/* フッターの呼び出し */}
    </div>
  );
}
