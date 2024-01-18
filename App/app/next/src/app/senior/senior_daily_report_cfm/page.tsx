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

        <div class="w-[1200px] h-[2000px] relative">
    <div class="w-[1200px] p-2 left-0 top-0 absolute bg-gradient-to-b from-yellow-200 to-yellow-300 border border-black"></div>
    <div class="w-[1000px] h-[1310px] left-[100px] top-[8px] absolute">
        <div class="w-[1000px] h-[1156px] left-0 top-[154px] absolute bg-white rounded-[10px] border border-black border-opacity-50"></div>
        <div class="w-[206px] h-[26px] left-[385px] top-[175px] absolute text-black text-[17px] font-normal font-['Inter']">本日●月●日の健康の記録</div>
        <div class="left-0 top-0 absolute text-green-950 text-[64px] font-bold font-['Zen Maru Gothic']">みまもり</div>
    </div>
    <div class="w-[123px] h-[17px] left-[228px] top-[262px] absolute text-black text-[17px] font-normal font-['Inter']">1.体調について</div>
    <div class="w-[152px] h-[17px] left-[228px] top-[332px] absolute text-black text-[17px] font-normal font-['Inter']">2.調子の悪い箇所</div>
    <img class="w-[170px] h-[521px] left-[656px] top-[334px] absolute shadow border border-black" src="https://via.placeholder.com/170x521" />
    <div class="w-[152px] h-[17px] left-[228px] top-[906px] absolute text-black text-[17px] font-normal font-['Inter']">3.薬は飲みましたか</div>
    <div class="w-[333px] h-[17px] left-[228px] top-[986px] absolute text-black text-[17px] font-normal font-['Inter']">4.昨日の夕飯の写真を登録してください</div>
    <div class="w-[294px] h-9 left-[634px] top-[1079px] absolute">
        <div class="w-[98px] h-9 left-0 top-0 absolute bg-white border border-black"></div>
        <div class="w-[98px] h-9 left-[196px] top-0 absolute bg-white border border-black"></div>
        <div class="w-[98px] h-9 left-[98px] top-0 absolute bg-white border border-black"></div>
        <div class="left-[32px] top-[8px] absolute text-black text-[17px] font-normal font-['Inter']">完食</div>
        <div class="left-[126px] top-[8px] absolute text-black text-[17px] font-normal font-['Inter']">半分</div>
        <div class="left-[211px] top-[8px] absolute text-black text-[17px] font-normal font-['Inter']">半分以下</div>
    </div>
    <div class="w-[333px] h-[17px] left-[231px] top-[1070px] absolute text-black text-[17px] font-normal font-['Inter']">5.昨日の食欲はどうでしたか</div>
    <div class="w-[333px] h-[17px] left-[231px] top-[1155px] absolute text-black text-[17px] font-normal font-['Inter']">6.音声で体調を教えてください</div>
    <div class="w-[1100px] h-px left-[77px] top-[101px] absolute bg-zinc-300 rounded-[5px]"></div>
    <div class="w-[294px] h-9 left-[575px] top-[254px] absolute">
        <div class="w-[98px] h-9 left-0 top-0 absolute bg-black border border-black"></div>
        <div class="w-[98px] h-9 left-[98px] top-0 absolute bg-white border border-black"></div>
        <div class="w-[98px] h-9 left-[196px] top-0 absolute bg-white border border-black"></div>
        <div class="left-[32px] top-[8px] absolute text-white text-[17px] font-normal font-['Inter']">良い</div>
        <div class="left-[126px] top-[8px] absolute text-black text-[17px] font-normal font-['Inter']">普通</div>
        <div class="left-[228px] top-[8px] absolute text-black text-[17px] font-normal font-['Inter']">悪い</div>
    </div>
    <div class="w-10 h-[29px] left-[698px] top-[334px] absolute bg-red-600 rounded-full border border-red-600"></div>
    <div class="w-[195px] h-9 left-[627px] top-[899px] absolute">
        <div class="w-[98px] h-9 left-0 top-0 absolute bg-white border border-black"></div>
        <div class="w-[98px] h-9 left-[97px] top-0 absolute bg-black border border-black"></div>
        <div class="left-[19px] top-[8px] absolute text-black text-[17px] font-normal font-['Inter']">飲んだ</div>
        <div class="left-[103px] top-[8px] absolute text-white text-[17px] font-normal font-['Inter']">飲んでない</div>
    </div>
    <img class="w-[129px] h-[72px] left-[693px] top-[988px] absolute" src="https://via.placeholder.com/129x72" />
    <div class="w-[294px] h-9 left-[633px] top-[1079px] absolute">
        <div class="w-[98px] h-9 left-0 top-0 absolute bg-white border border-black"></div>
        <div class="w-[98px] h-9 left-[196px] top-0 absolute bg-white border border-black"></div>
        <div class="w-[98px] h-9 left-[98px] top-0 absolute bg-black border border-black"></div>
        <div class="left-[32px] top-[8px] absolute text-black text-[17px] font-normal font-['Inter']">完食</div>
        <div class="left-[126px] top-[8px] absolute text-white text-[17px] font-normal font-['Inter']">半分</div>
        <div class="left-[211px] top-[8px] absolute text-black text-[17px] font-normal font-['Inter']">半分以下</div>
    </div>
    <div class="w-[294px] h-[89px] left-[634px] top-[1166px] absolute">
        <div class="w-[294px] h-[89px] left-0 top-0 absolute bg-white border border-black"></div>
        <div class="w-[294px] h-[89px] left-0 top-0 absolute text-black text-[17px] font-normal font-['Inter']">元気です。<br/>ご飯は胃もたれして食べれませんでし<br/>た。</div>
    </div>
    <div class="w-[261px] h-[65px] left-[297px] top-[1344px] absolute bg-zinc-300 rounded-[10px] shadow"></div>
    <div class="left-[401px] top-[1362px] absolute text-black text-[25px] font-normal font-['Inter']">戻る</div>
    <div class="w-[261px] h-[65px] left-[674px] top-[1344px] absolute bg-zinc-300 rounded-[10px] shadow"></div>
    <div class="left-[780px] top-[1362px] absolute text-black text-[25px] font-normal font-['Inter']">送信</div>
    <div class="w-[91px] h-[27px] left-[566px] top-[115px] absolute text-black text-[17px] font-normal font-['Inter']">確認画面</div>
    <div class="left-[924px] top-[74px] absolute justify-start items-start inline-flex">
        <div class="text-green-950 text-lg font-normal font-['Inter']">管理画面</div>
    </div>
    <div class="left-[1014px] top-[74px] absolute text-green-950 text-lg font-normal font-['Inter']">ログアウト</div>
</div>

      </main>

      {/* フッターの呼び出し */}
    </div>
  );
}



