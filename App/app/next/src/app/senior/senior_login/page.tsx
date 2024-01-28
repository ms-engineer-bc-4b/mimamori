"use client"; // 追記
import Link from 'next/link';
import { app } from "@/lib/firebase/firebase";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from 'firebase/app';
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import {Footer} from '@/app/components/footer';
import { FirstHeader } from '@/app/components/beforesigninheader';





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
   * @param email 
   * @param password 
   */
  const doLogin = (email: string, password: string) => {
    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert(`ログインできたよ！${user.email}さん！`);
        console.log(user);
      })
      .catch((error: FirebaseError) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode + "\n" + errorMessage)
      });
  }

  /**
   * 新規登録処理を実行する
   * @param email 
   * @param password 
   */
  const doSignup = (email: string, password: string) => {
    const auth = getAuth(app)

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        //user.sendEmailVerification()
        alert(user.email + "さんを登録しました！")
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        alert(errorCode + "\n" + errorMessage)
      })
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





          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => { doLogin(senior_email, senior_password) }}
            >
              Log In
            </button>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => { doSignup(senior_email, senior_password) }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>

    <FirstHeader />
    <Footer />
    </div>
  )
}
