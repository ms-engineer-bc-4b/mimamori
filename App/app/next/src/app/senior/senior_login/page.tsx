"use client"; // 追記
import Link from 'next/link';
import { app } from "@/lib/firebase/firebase";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from 'firebase/app';
import { useState } from 'react';
import { initializeApp } from 'firebase/app';



// initializeFirebaseApp()
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
                        <div className = "w-[220px] h-[23px] left-[500px] top-[500px] text-center text-gray-500 text-xs">
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

//    {/* 全体的な構成 */}
//{/* <div className="w-[1200px] h-[2000px]"> */}
//{/* 黄色背景 */}
    <div className="bg-gradient-to-b from-yellow-200 to-yellow-300 w-screen h-screen flex justify-center items-center">

      <div className="w-[220px] h-[23px] left-[500px] top-[233px] absolute text-black text-xl font-normal font-['Inter']">
      <p>シニアの方のログインページです</p>
      </div>
      <div className="w-full max-w-xs">
        <form className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            {/* EMAIL */}
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="senior_email">
              メールアドレス
            </label>
            <input
              className="shadow bg-slate-50  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username" type="text" placeholder="Username" onChange={handleChangeEmail}
            />
          </div>


          {/* パスワード 入力*/}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="senior_password">
            パスワード
            </label>
            <input
              className="shadow bg-slate-50  appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="senior_password" type="senior_password" placeholder="********" onChange={handleChangePassword}
            />
            <p className="text-red-500 text-xs italic">Please choose a senior_password.</p>
          </div>
          {/*           
          {/* パスワード 入力 CSS *./}
            <div className="w-[499px] h-[51px] left-[367px] top-[348px] absolute">
              <div className="w-[499px] h-[51px] left-0 top-0 absolute">
                <div className="w-[117.18px] h-[50.26px] left-0 top-0 absolute bg-zinc-300 border border-black">
                </div>
              </div>
                  {/* 入力フォーム *./}
                  <div className="w-28 h-[18px] left-[10px] top-[16px] absolute text-green-950 text-xl font-normal font-['Inter']">
                      パスワード
                  </div>
                    {/* 入力 *./}
                  <input className="input is-large w-[381.82px] h-[52.48px] left-[117.18px] top-0 absolute bg-white border border-black">
                  </input>

            </div> 
            */}




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

    {/* <Header /> */}
    {/* <Footer /> */}
    </div>
  )
}
