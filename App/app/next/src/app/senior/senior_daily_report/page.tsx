import Link from 'next/link';
// import { getAllTodos } from "@/api";
// import AddTask from "./components/AddTask";
// import DailyReport from "./components/TodoList";

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

export default function SeniorReport() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヘッダーの呼び出し */}
      <Header />
      {/* メインコンテンツ */}
      <main>
        {/* CSSあり*/}
        <div className="w-[1200px] h-[6000px] relative">
              {/* 黄色背景 */}
              <div className="w-[1200px] h-[6000px] p-2 left-0 top-0 absolute 
                bg-gradient-to-b from-yellow-200 to-yellow-300 border border-black">
              </div>
              {/* 囲い枠 */}
              <div className="w-[1000px] h-[1310px] left-[100px] top-[8px] absolute">
                {/* className="flex-grow flex flex-col items-center p-24" */}
                  <div className="w-[91px] h-[27px] left-[566px] top-[115px] 
                    absolute text-black text-[17px] font-normal font-['Inter']">
                    登録画面
                  </div>
                  <div className="w-[1000px] h-[1156px] left-0 top-[154px] 
                    absolute bg-white rounded-[10px] 
                    border border-black border-opacity-50">
                  </div>
                  <div className="w-[206px] h-[26px] left-[385px] top-[175px] 
                    absolute text-black 
                    text-[17px] font-normal font-['Inter']">
                      {/* 日付関数  Yet*/}
                    本日●月●日の健康の記録
                  </div>
              </div>

              {/* 1 */}
              <div className="w-[123px] h-[17px] left-[228px] top-[262px] absolute text-black text-[17px] font-normal font-['Inter']">
                1.体調について
              </div>
                <div className="w-[294px] h-9 left-[575px] top-[254px] absolute">
                {/* いい */}
                <div className="w-[98px] h-9 left-0 top-0 absolute  bg-white border border-black">
                  </div>
                  <div className="left-[32px] top-[8px] 
                    absolute text-black text-[17px] font-normal font-['Inter']">
                    良い
                  </div>
                  {/* 普通 */}
                  <div className="w-[98px] h-9 left-[98px] top-0 absolute bg-white border border-black">
                  </div>
                  <div className="left-[126px] top-[8px] 
                    absolute text-black text-[17px] font-normal font-['Inter']">
                    普通
                  </div>
                  {/* 悪い */}
                  <div className="w-[98px] h-9 left-[196px] top-0 absolute bg-white border border-black">
                  </div>
                  <div className="left-[228px] top-[8px] 
                    absolute text-black text-[17px] font-normal font-['Inter']">
                    悪い
                  </div>
                </div>

                {/* 2 */}
              <div className="w-[152px] h-[17px] left-[228px] top-[332px] absolute text-black text-[17px] font-normal font-['Inter']">
                2.調子の悪い箇所
              </div>
                {/* image */}
                  <img className="w-[170px] h-[521px] left-[656px] top-[334px] 
                    absolute shadow border border-black" src="https://via.placeholder.com/170x521" />
                  {/* タップしたimage */}
                  {/* <div className="w-10 h-[29px] left-[698px] top-[334px] absolute bg-red-600 
                  rounded-full border border-red-600">
                  </div> */}
              
              {/* 3 */}
              <div className="w-[152px] h-[17px] left-[228px] top-[906px] 
                absolute text-black text-[17px] font-normal font-['Inter']">
                3.薬は飲みましたか
              </div>
              <div className="w-[195px] h-9 left-[627px] top-[899px] absolute">
                  <div className="w-[98px] h-9 left-0 top-0 absolute bg-white border border-black"></div>
                  <div className="w-[98px] h-9 left-[97px] top-0 absolute bg-white border border-black"></div>
                  <div className="left-[19px] top-[8px] absolute text-black text-[17px] font-normal font-['Inter']">
                    飲んだ</div>
                  <div className="left-[103px] top-[8px] absolute text-black text-[17px] font-normal font-['Inter']">
                    飲んでない</div>
              </div>
              

              {/* 4 */}
              <div className="w-[333px] h-[17px] left-[228px] top-[986px] 
                absolute text-black text-[17px] font-normal font-['Inter']">
                4.昨日の夕飯の写真を登録してください
              </div>
              {/* イメージ取得のコーディング必要 Yet*/}
              <img className="w-[129px] h-[72px] left-[693px] top-[988px] absolute" src="https://via.placeholder.com/129x72" />


              {/* 5 */}
              <div className="w-[333px] h-[17px] left-[231px] top-[1070px] 
                absolute text-black text-[17px] font-normal font-['Inter']">
                5.昨日の食欲はどうでしたか
              </div>
              <div className="w-[294px] h-9 left-[634px] top-[1079px] absolute">
                    <div className="w-[98px] h-9 left-0 top-0 absolute bg-white border border-black">
                    </div>

                    <div className="w-[98px] h-9 left-[196px] top-0 absolute bg-white border border-black">
                    </div>
                    <div className="w-[98px] h-9 left-[98px] top-0 absolute bg-white border border-black">
                    </div>
                    <div className="left-[32px] top-[8px] 
                      absolute text-black text-[17px] font-normal font-['Inter']">
                      完食
                    </div>
                    <div className="left-[126px] top-[8px] 
                      absolute text-black text-[17px] font-normal font-['Inter']">
                      半分
                    </div>
                    <div className="left-[211px] top-[8px] 
                      absolute text-black text-[17px] font-normal font-['Inter']">
                      半分以下
                    </div>
                </div>


              {/* 6 */}
              <div className="w-[333px] h-[17px] left-[231px] top-[1155px] 
                absolute text-black text-[17px] font-normal font-['Inter']">
                6.音声で体調を教えてください
              </div>
              <div className="w-[1100px] h-px left-[77px] top-[101px] 
                absolute bg-zinc-300 rounded-[5px]">
              </div>
              <div className="w-[294px] h-[89px] left-[634px] top-[1166px] absolute">
                  {/* <div className="w-[294px] h-[89px] left-0 top-0 
                    absolute bg-white border border-black">
                  </div> */}
                  {/* Wisperの反映どうすればいいか確認 Yet */}
                  <div className="w-[294px] h-[89px] left-0 top-0 
                    absolute text-black text-[17px] font-normal font-['Inter']">
                      音声登録する<br/>
                      
                  </div>
              </div>

              {/* 戻るボタンとその設定 */}
              <div className="w-[261px] h-[65px] left-[297px] top-[1344px] 
                absolute bg-zinc-300 rounded-[10px] shadow">
              </div>
              <div className="left-[401px] top-[1362px] 
                absolute text-black text-[25px] font-normal font-['Inter']">
                <Link href="/senior/senior_top_page">
                戻る
                </Link>
              </div>

              {/* 送信ボタンとその設定 */}
              <div className="w-[261px] h-[65px] left-[674px] top-[1344px] 
                absolute bg-zinc-300 rounded-[10px] shadow">
              </div>
              <div className="left-[780px] top-[1362px] 
                absolute text-black text-[25px] font-normal font-['Inter']">
                <Link href="/senior/senior_daily_report_cfm">
                送信
                </Link>
              </div>
        </div>
      </main>

      {/* フッターの呼び出し */}
    </div>
  );
}

