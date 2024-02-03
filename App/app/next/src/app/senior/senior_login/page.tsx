"use client"; // 追記
import Link from 'next/link';
import { useState } from 'react';
import FirstHeader from '@/app/components/beforesigninheader';
import Footer from '@/app/components/footer';
import "axios"
// import { useRouter } from 'next/router';
import axios from 'axios';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import React from "react";
// import Link from "next/link";
import { setCookie } from 'nookies';


export default function SeniorLogin() {
// 
  <FirstHeader/>
  const router = useRouter(); // フックの呼び出しを関数コンポーネントのボディ内で行う

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
    // const auth = getAuth(app);


        // flask側へメールアドレスとパスワードを送ってログインをする
    /* json形式ににして送信する
    {
      "email": "aaa@aa.aa",
      "password": "pass"
    }
    */
   console.log('ログイン')

   axios.post('http://localhost:5001/api/senior_login', 
     {email: senior_email, password: senior_password},
     {
       headers: {
         "Content-Type": "application/json",
         "Authorization": "Bearer <token>"
       }
     }).then((res) => {
       console.log(res.data)
       // ログインフラグをクッキーへ、「auth」というキーで登録
       setCookie(null, 'auth', res.data.token, {
        maxAge: 30 * 24 * 60 * 60, // お好きな期限を
        path: '/',
      });
       router.push('/senior/senior_top_page');

     }).catch((err) => {
       console.log(err.response.data)
     })
  }

  /**
   * 新規登録処理を実行する
   * @param email 
   * @param password 
   */
  const doSignup = (email: string, password: string) => {

    // flask側へメールアドレスとパスワードを送って新規ユーザー作成をする
    /* json形式ににしてそうしんする
    {
      "email": "aaa@aa.aa",
      "password": "pass"
    }
    */
   console.log('新規作成')

    axios.post('http://localhost:5001/api/senior_register', 
      {email: senior_email, password: senior_password},
      {
        headers: {
          "Content-Type": "application/json"
        }
      }).then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.log(err.response.data)
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
              onClick={() => { doLogin(senior_email, senior_password) } }
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

    {/* <FirstHeader /> */}
    {/* <Footer /> */}
    </div>

    
  
  )
}

/*
COOKIEにあるAUTHをとってくるフロント側で必要あり＝＞
例遷移した時のAPI　誰かわからないと困るから
JWTのTOKENをフロント側でとってきて　hppt headerにber
       headers: {
         "Content-Type": "application/json",
         "Authorization": "Bearer <token>"
       }
にすればTOKENをとってきて導きができる。

*/ 