import Link from 'next/link';

// シンプルなヘッダーコンポーネント
const Header = () => {
            return (
            <header className="text-center p-2 left-0 top-0 bg-gradient-to-b from-yellow-200 to-yellow-300">
            {/* ここにヘッダーのコンテンツを追加 */}
            <div className="left-[96px] top-[8px] absolute text-green-950 text-[64px] font-bold font-['Zen Maru Gothic']">
             みまもり
            </div>
            <div className="left-[768px] top-[69px] absolute text-green-950 text-lg font-normal font-['Inter']">
              <Link href="/register">
                新規登録
              </Link>
            </div>
            <div className="left-[900px] top-[69px] absolute text-green-950 text-lg font-normal font-['Inter']">
              <Link href="/senior/senior_login">
                シニア用ログイン
              </Link>
            </div>
            <div className="left-[1100px] top-[69px] absolute text-green-950 text-lg font-normal font-['Inter']">
              <Link href="/login">
                ご家族用ログイン
              </Link>
            </div>

            <div className="w-[1188px] h-[703px] left-[6px] top-0 absolute">
            </div>

            </header>
            );
  };

export default function SeniorLogin() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヘッダーの呼び出し */}
      <Header />

      {/* メインコンテンツ */}
      <main className="flex-grow flex flex-col items-center">
      <div className="w-[220px] h-[23px] left-[500px] top-[233px] absolute text-black text-xl font-normal font-['Inter']">
        <p>シニアの方のログインページです</p>
      </div>


      {/* 背景 */}
      {/* 全体的な構成 */}
        <div className="w-[1200px] h-[2000px]">
          {/* 黄色背景*/}
          {/* <div className="w-[1200px] h-[2000px] p-2 left-0 top-0 absolute bg-gradient-to-b from-yellow-200 to-yellow-300 border border-black"></div> */}
            <div className="w-[1188px] h-[703px] left-[6px] top-0 absolute">
              {/* ID */}
                <div className="w-[499px] h-[52.48px] left-[367px] top-[277px] absolute">
                    <div className="w-[499px] h-[52.48px] left-0 top-0 absolute">
                        <div className="w-[117.18px] h-[51.72px] left-0 top-0 absolute bg-zinc-300 border border-black">
                        </div>
                          </div>
                          {/*ID  */}
                            <div className="w-[69.35px] h-[19.78px] left-[48px] top-[16.61px] 
                            absolute text-green-950 text-xl font-normal font-['Inter']">
                              ID
                            </div>
                            {/* ID入力フォーム */}
                            <input className="input is-large w-[381.82px] h-[52.48px] left-[117.18px] top-0 absolute bg-white border border-black">
                            </input>
                </div>
              {/* パスワード */}
                <div className="w-[499px] h-[51px] left-[367px] top-[348px] absolute">
                    <div className="w-[499px] h-[51px] left-0 top-0 absolute">
                        <div className="w-[117.18px] h-[50.26px] left-0 top-0 absolute bg-zinc-300 border border-black">
                        </div>
                        {/* 入力フォーム */}
                    </div>
                    <div className="w-28 h-[18px] left-[10px] top-[16px] absolute text-green-950 text-xl font-normal font-['Inter']">
                      パスワード
                    </div>
                    {/* 入力 */}
                    <input className="input is-large w-[381.82px] h-[52.48px] left-[117.18px] top-0 absolute bg-white border border-black">
                    </input>
                </div>
                <div className="w-[261px] h-[65px] left-[516px] top-[424px] absolute">
                    {/* <img className="w-[45px] h-[41px] left-[463px] top-[436px] absolute" src="https://via.placeholder.com/45x41" /> */}
                    <div className="w-[261px] h-[65px] left-0 top-0 absolute bg-zinc-300 rounded-[10px] shadow">
                    </div>
                    <div className="left-[79px] top-[18px] absolute text-black text-[25px] font-normal font-['Inter']">
                    <Link href="/senior/senior_top_page" passHref>
                      ログイン
                    </Link>
                    </div>
                </div>
            </div>
        </div>
      </main>

      {/* フッターの呼び出し */}
    </div>
  );
}
