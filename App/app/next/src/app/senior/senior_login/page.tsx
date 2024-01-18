import Link from 'next/link';

// シンプルなヘッダーコンポーネント
const Header = () => {
            return (
            <header className="text-center py-4 bg-gray-200">
            {/* ここにヘッダーのコンテンツを追加 */}
            <div class="left-[96px] top-[8px] absolute text-green-950 text-[64px] font-bold font-['Zen Maru Gothic']">
            みまもり
            </div>
            <div class="left-[768px] top-[69px] absolute text-green-950 text-lg font-normal font-['Inter']">
            <Link href="/register">
            新規登録
            </Link>
            </div>
            <div class="left-[938px] top-[69px] absolute text-green-950 text-lg font-normal font-['Inter']">
            <Link href="/senior-login">
            シニア用ログイン
            </Link>
            </div>
            <div class="left-[1100px] top-[69px] absolute text-green-950 text-lg font-normal font-['Inter']">
            <Link href="/login">
            ご家族用ログイン
            </Link>
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
      <main className="flex-grow flex flex-col items-center p-24">
        <p>シニアの方のログインページです</p>
        {/* // シニアの方のページです */}
          {/* text-black
            text-xl
            font-normal
            font-['Inter']
            --- */}


        ID

          {/* // ID
          text-green-950
          text-xl
          font-normal
          font-['Inter'] */}

        パスワード

          {/* // パスワード
          text-green-950
          text-xl
          font-normal
          font-['Inter'] */}

        ログイン
          {/* // ログイン
          text-black
          text-[25px]
          font-normal
          font-['Inter']
          --- */}



      {/* CSS */}
      <div class="w-[1200px] h-[2000px]">
        
          <div class="w-[1200px] h-[2000px] p-2 left-0 top-0 absolute bg-gradient-to-b from-yellow-200 to-yellow-300 border border-black"></div>
          <div class="w-[1188px] h-[703px] left-[6px] top-0 absolute">
            
              <div class="w-[220px] h-[23px] left-[497px] top-[233px] absolute text-black text-xl font-normal font-['Inter']">シニアの方のページです</div>
              <div class="w-[499px] h-[52.48px] left-[367px] top-[277px] absolute">
                  <div class="w-[499px] h-[52.48px] left-0 top-0 absolute">
                      <div class="w-[117.18px] h-[51.72px] left-0 top-0 absolute bg-zinc-300 border border-black"></div>

                      <input class="input is-large" type="text" name="name" placeholder="Name" autofocus=""></input>

                      {/* 入力フォーム */}
                      {/* <div input 
                          type="text" 
                          onInput={handleInputText} //関数の指定必要
                          value={String(text)}
                          className={styles.item}
                        /> */}
                        {/* CSSで作成分 */}
                      <div class="w-[381.82px] h-[52.48px] left-[117.18px] top-0 absolute bg-white border border-black"></div>
                  </div>
                  <div class="w-[69.35px] h-[19.78px] left-[48px] top-[16.61px] absolute text-green-950 text-xl font-normal font-['Inter']">ID</div>
              </div>
              <div class="w-[499px] h-[51px] left-[367px] top-[348px] absolute">
                  <div class="w-[499px] h-[51px] left-0 top-0 absolute">
                      <div class="w-[117.18px] h-[50.26px] left-0 top-0 absolute bg-zinc-300 border border-black"></div>
                      
                      {/* 入力フォーム */}
                      <div class="w-[381.82px] h-[51px] left-[117.18px] top-0 absolute bg-white border border-black"></div>
                  </div>
                  <div class="w-28 h-[18px] left-[10px] top-[16px] absolute text-green-950 text-xl font-normal font-['Inter']">パスワード</div>
              </div>
              <div class="w-[261px] h-[65px] left-[516px] top-[424px] absolute">
                  <div class="w-[261px] h-[65px] left-0 top-0 absolute bg-zinc-300 rounded-[10px] shadow"></div>
                  <div class="left-[79px] top-[18px] absolute text-black text-[25px] font-normal font-['Inter']">ログイン</div>
              </div>
              {/* <img class="w-[45px] h-[41px] left-[463px] top-[436px] absolute" src="https://via.placeholder.com/45x41" /> */}



          </div>
      </div>



      </main>

      {/* フッターの呼び出し */}
    </div>
  );
}

