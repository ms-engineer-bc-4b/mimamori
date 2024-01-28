"use client"; // 追記
import Link from 'next/link';
// import { use client } from 'next/client';
import { app } from "@/lib/firebase/firebase";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from 'firebase/app';
import { useState } from 'react';


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
// フッダーコンポーネント
const Footer = ()=> {
                    return
                    (
                      <footer>
                        <div className = "w-[220px] h-[23px] left-[500px] top-[500px]　text-center text-gray-500 text-xs">
                          &copy;2024 Mimamori. All rights reserved.
                        </div>

                      </footer> 
                    )
                  }
// 




export default function SeniorLogin() {

  // メール・パスワード
  const [senior_email, setEmail] = useState("")
  const [senior_password, setPassword] = useState("")

  // Inputのハンドル操作
  const handleChangeEmail = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(() => e.target.value)
  }
  const handleChangePassword = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(() => e.target.value)
  }

  /**
   * ログイン処理を実行する
   * @param senior_email 
   * @param senior_password 
   */
  const doLogin = (senior_email: string, senior_password: string) => {
    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, senior_email, senior_password)
      .then((userCredential) => {
        const senior_user = userCredential.senior_user;
        alert(`ログインできたよ！${senior_user.senior_email}さん！`);
        console.log(senior_user);
      })
      .catch((error: FirebaseError) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode + "\n" + errorMessage)
      });
  }


  return (
      // {/* メインコンテンツ */}
      // <main className="flex-grow flex flex-col items-center">
      // <div className="w-[220px] h-[23px] left-[500px] top-[233px] absolute text-black text-xl font-normal font-['Inter']">
      //   <p>シニアの方のログインページです</p>
      // </div>


      // {/* 背景 */}
//    {/* 全体的な構成 */}
//         <div className="w-[1200px] h-[2000px]"> */}
//           黄色背景
//           <div className="w-[1200px] h-[2000px] p-2 left-0 top-0 absolute bg-gradient-to-b from-yellow-200 to-yellow-300 border border-black"></div> */}
//             <div className="w-[1188px] h-[703px] left-[6px] top-0 absolute">
        //     <div className="flex flex-col min-h-screen"> */}
              

    <div className="bg-slate-600 w-screen h-screen flex justify-center items-center">
       {/* ヘッダーの呼び出し */}
              <Header />
      <p>シニアの方のログインページです</p>
      <div className="w-full max-w-xs">
        <form className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="senior_email">
              E-mail
            </label>
            <input
              className="shadow bg-slate-50  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username" type="text" placeholder="Username" onChange={handleChangeEmail}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="senior_password">
              senior_password
            </label>
            <input
              className="shadow bg-slate-50  appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="senior_password" type="senior_password" placeholder="******************" onChange={handleChangePassword}
            />
            <p className="text-red-500 text-xs italic">Please choose a senior_password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => { doLogin(senior_email, senior_password) }}
            >
              Log In
            </button>
            {/* <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => { doSignup(senior_email, senior_password) }}
            >
              Sign Up
            </button> */}
          </div>
        </form>
      </div>
      //  {/* フッターの呼び出し */}
    <Footer />
    </div>
    // </main>




  )
}

// 



//               {/* ID */}
//                 <div className="w-[499px] h-[52.48px] left-[367px] top-[277px] absolute">
//                     <div className="w-[499px] h-[52.48px] left-0 top-0 absolute">
//                         <div className="w-[117.18px] h-[51.72px] left-0 top-0 absolute bg-zinc-300 border border-black">
//                         </div>
//                           </div>
//                           {/*ID  */}
//                             <div className="w-[69.35px] h-[19.78px] left-[48px] top-[16.61px] 
//                             absolute text-green-950 text-xl font-normal font-['Inter']">
//                               ID
//                             </div>
//                             {/* ID入力フォーム */}
//                             {/* <input className="input is-large w-[381.82px] h-[52.48px] left-[117.18px] top-0 absolute bg-white border border-black">
//                             </input> */}


//                 </div>
//               {/* パスワード 入力*/}
//                 <div className="w-[499px] h-[51px] left-[367px] top-[348px] absolute">
//                     <div className="w-[499px] h-[51px] left-0 top-0 absolute">
//                         <div className="w-[117.18px] h-[50.26px] left-0 top-0 absolute bg-zinc-300 border border-black">
//                         </div>
//                         {/* 入力フォーム */}
//                     </div>
//                     <div className="w-28 h-[18px] left-[10px] top-[16px] absolute text-green-950 text-xl font-normal font-['Inter']">
//                       パスワード
//                     </div>
//                     {/* 入力 */}
//                     <input className="input is-large w-[381.82px] h-[52.48px] left-[117.18px] top-0 absolute bg-white border border-black">
//                     </input>

//                 </div>
//                 <div className="w-[261px] h-[65px] left-[516px] top-[424px] absolute">
//                     {/* <img className="w-[45px] h-[41px] left-[463px] top-[436px] absolute" src="https://via.placeholder.com/45x41" /> */}
//                     <div className="w-[261px] h-[65px] left-0 top-0 absolute bg-zinc-300 rounded-[10px] shadow">
//                     </div>
//                     <div className="left-[79px] top-[18px] absolute text-black text-[25px] font-normal font-['Inter']">
//                     <Link href="/senior/senior_top_page" passHref>
//                       ログイン
//                     </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
      // </main>