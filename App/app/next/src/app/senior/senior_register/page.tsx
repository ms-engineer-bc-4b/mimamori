import Link from 'next/link';

// シンプルなヘッダーコンポーネント
const Header = () => {
            return (
            <header className="text-center p-2 left-0 top-20 bg-gradient-to-b from-yellow-200 to-yellow-300">
            {/* ここにヘッダーのコンテンツを追加 */}
            <div className="left-[96px] top-[8px] absolute text-green-950 text-[64px] font-bold font-['Zen Maru Gothic']">
             みまもり
            </div>
            </header>
            );
  };

export default function SeniorRegister() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヘッダーの呼び出し */}
      <Header />

      {/* メインコンテンツ */}
      <main className="flex-grow flex flex-col items-center">
      <div class="w-[1200px] h-[900px] text-black text-[17px] font-normal font-['Inter']">
        会員登録ページです。<br/>
        下記を入力してください。
      </div>


      {/* 背景 */}
      {/* 全体的な構成 */}
        <div className="w-[1200px] h-[2000px]">
          {/* 黄色背景*/}
          {/* <div className="w-[1200px] h-[2000px] p-2 left-0 top-0 absolute bg-gradient-to-b from-yellow-200 to-yellow-300 border border-black"></div> */}
            <div className="w-[1188px] h-[703px] left-[6px] top-0 absolute">
              {/* Mail */}
                <div className="w-[499px] h-[52.48px] left-[367px] top-[277px] absolute">
                    <div className="w-[499px] h-[52.48px] left-0 top-0 absolute">
                        <div className="w-[117.18px] h-[51.72px] left-0 top-0 absolute bg-zinc-300 border border-black">
                        </div>
                          </div>
                          {/*メールアドレス  */}
                            <div className="w-[69.35px] h-[19.78px] left-[48px] top-[16.61px] 
                            absolute text-green-950 text-xl font-normal font-['Inter']">
                              メールアドレス
                            </div>
                            {/* メールアドレス入力フォーム */}
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

                    <input className="input is-large w-[381.82px] h-[52.48px] left-[117.18px] top-0 absolute bg-white border border-black">
                    </input>
                </div>
                <div className="w-[261px] h-[65px] left-[516px] top-[424px] absolute">
                    <div className="w-[261px] h-[65px] left-0 top-0 absolute bg-zinc-300 rounded-[10px] shadow">
                    </div>
                    <div className="left-[100px] top-[18px] absolute text-black text-[25px] font-normal font-['Inter']">
                    <Link href="/senior/senior_login" passHref>
                      登録
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

