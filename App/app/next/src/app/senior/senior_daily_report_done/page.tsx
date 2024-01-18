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
        <div class="w-[206px] h-[26px] text-black text-[17px] font-normal font-['Inter']">本日●月●日の健康の記録</div>
        {/* CSS*/}
        <div class="w-[1200px] h-[2000px] relative"></div>
    <div class="w-[1200px] p-2 left-0 top-0 absolute bg-gradient-to-b from-yellow-200 to-yellow-300 border border-black"></div>
    <div class="left-[98px] top-[2px] absolute text-green-950 text-[64px] font-bold font-['Zen Maru Gothic']">みまもり</div>
    <div class="w-[1100px] h-px left-[46px] top-[102px] absolute bg-zinc-300 rounded-[5px]"></div>
    <div class="w-[206px] h-[26px] left-[493px] top-[115px] absolute text-black text-[17px] font-normal font-['Inter']">本日●月●日の健康の記録</div>
    <div class="w-[999px] h-[116px] left-[101px] top-[176px] absolute text-center text-black text-[17px] font-normal font-['Inter']">登録ありがとうございました。<br/>登録内容を家族へ送信しました。<br/>月次の管理画面を確認したい場合は管理画面ボタンを押下してください</div>
    <div class="w-[261px] h-[65px] left-[335px] top-[292px] absolute bg-zinc-300 rounded-[10px] shadow"></div>
    <div class="w-[261px] h-[65px] left-[638px] top-[292px] absolute bg-zinc-300 rounded-[10px] shadow"></div>
    <div class="left-[416px] top-[309px] absolute text-black text-[25px] font-normal font-['Inter']">管理画面</div>
    <div class="left-[731px] top-[309px] absolute text-black text-[25px] font-normal font-['Inter']">閉じる</div>
    <div class="left-[921px] top-[73px] absolute justify-start items-start inline-flex">
        <div class="text-green-950 text-lg font-normal font-['Inter']">管理画面</div>
    </div>
    <div class="left-[1011px] top-[73px] absolute text-green-950 text-lg font-normal font-['Inter']">ログアウト</div>
</div>

      </main>

      {/* フッターの呼び出し */}
    </div>
  );
};
