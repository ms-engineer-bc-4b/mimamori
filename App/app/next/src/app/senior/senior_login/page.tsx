"use client"; // 追記
// import Link from 'next/link';
// import { use client } from 'next/client';

// import { initializeFirebaseApp } from '@src/lib/firebase/firebase'


// 'use client'
// import NextLink from 'next/link'
// import { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { Flex, VStack, Heading, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button} from "tailwindcss";
//   // import {
//   //   Button,
//   //   Flex,
//   //   FormControl,
//   //   FormLabel,
//   //   Heading,
//   //   Input,
//   //   InputGroup,
//   //   InputRightElement,
//   //   VStack,
//   // } from '@/common/design'
//   // 
  




// // シンプルなヘッダーコンポーネント
//   // const Header = () => {
//   //             return (
//   //             <header className="text-center p-2 left-0 top-0 bg-gradient-to-b from-yellow-200 to-yellow-300">
//   //             {/* ここにヘッダーのコンテンツを追加 */}
//   //             <div className="left-[96px] top-[8px] absolute text-green-950 text-[64px] font-bold font-['Zen Maru Gothic']">
//   //              みまもり
//   //             </div>
//   //             <div className="left-[768px] top-[69px] absolute text-green-950 text-lg font-normal font-['Inter']">
//   //               <Link href="/register">
//   //                 新規登録
//   //               </Link>
//   //             </div>
//   //             <div className="left-[900px] top-[69px] absolute text-green-950 text-lg font-normal font-['Inter']">
//   //               <Link href="/senior/senior_login">
//   //                 シニア用ログイン
//   //               </Link>
//   //             </div>
//   //             <div className="left-[1100px] top-[69px] absolute text-green-950 text-lg font-normal font-['Inter']">
//   //               <Link href="/login">
//   //                 ご家族用ログイン
//   //               </Link>
//   //             </div>

//   //             <div className="w-[1188px] h-[703px] left-[6px] top-0 absolute">
//   //             </div>

//   //             </header>
//   //             );
//   //   };
// // 




// // フォームで使用する変数の型を定義
// type formInputs = {
//   email: string
//   password: string
// }

// /** サインイン画面
//  * @screenname SignInScreen=>SeniorLogin
//  * @description ユーザのサインインを行う画面
//  */
// export default function SignInScreen() {
//   const { handleSubmit, register } = useForm<formInputs>()

//   const [show, setShow] = useState<boolean>(false)

//   const onSubmit = handleSubmit(async (data) => {})
//   return (
// //     <div className="flex flex-col min-h-screen">
// //       {/* ヘッダーの呼び出し */}
// //       <Header />
      

// //       {/* メインコンテンツ */}
// //       <main className="flex-grow flex flex-col items-center">
// //       <div className="w-[220px] h-[23px] left-[500px] top-[233px] absolute text-black text-xl font-normal font-['Inter']">
// //         <p>シニアの方のログインページです</p>
// //       </div>


// //       {/* 背景 */}
// //       {/* 全体的な構成 */}
// //         <div className="w-[1200px] h-[2000px]">
// //           {/* 黄色背景*/}
// //           {/* <div className="w-[1200px] h-[2000px] p-2 left-0 top-0 absolute bg-gradient-to-b from-yellow-200 to-yellow-300 border border-black"></div> */}
// //             <div className="w-[1188px] h-[703px] left-[6px] top-0 absolute">
// //                     <div className="w-28 h-[18px] left-[10px] top-[16px] absolute text-green-950 text-xl font-normal font-['Inter']">
// //                       パスワード
// //                     </div>


//     // <form className="signinform">
//     //   <label className="username">メールアドレス:</label>
//     //   <input className="text" id="username" name="username"></input>
//     //   <label className="password">パスワード:</label>
//     //   <input className="password" id="password" name="password"></input>
//     //   <input className="submit" value="ログイン"></input>
//     // </form> 

//   )
// }



// export default function SeniorLogin() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* ヘッダーの呼び出し */}
//       <Header />
      

//       {/* メインコンテンツ */}
//       <main className="flex-grow flex flex-col items-center">
//       <div className="w-[220px] h-[23px] left-[500px] top-[233px] absolute text-black text-xl font-normal font-['Inter']">
//         <p>シニアの方のログインページです</p>
//       </div>


//       {/* 背景 */}
//       {/* 全体的な構成 */}
//         <div className="w-[1200px] h-[2000px]">
//           {/* 黄色背景*/}
//           {/* <div className="w-[1200px] h-[2000px] p-2 left-0 top-0 absolute bg-gradient-to-b from-yellow-200 to-yellow-300 border border-black"></div> */}
//             <div className="w-[1188px] h-[703px] left-[6px] top-0 absolute">

//             <form>
//               <label for="username">ユーザー名:</label>
//               <input type="text" id="username" name="username">
//               <label for="password">パスワード:</label>
//               <input type="password" id="password" name="password">
//               <input type="submit" value="ログイン">
//             </form>


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
//       </main>

//       {/* フッターの呼び出し */}
{/* <p class="text-center text-gray-500 text-xs">
&copy;2020 Acme Corp. All rights reserved.
</p> */}
//     </div>
//   );
// }

import { app } from "@/lib/firebase/firebase"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { FirebaseError } from 'firebase/app'
import { useState } from 'react'
// import React, { useState } from "react"

export default function Home() {
  // メール・パスワード
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

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


  // https://v1.tailwindcss.com/components/forms を参照に、フォームを作りました
  return (
    <div className="bg-slate-600 w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-xs">
        <form className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              E-mail
            </label>
            <input
              className="shadow bg-slate-50  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username" type="text" placeholder="Username" onChange={handleChangeEmail}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow bg-slate-50  appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password" type="password" placeholder="******************" onChange={handleChangePassword}
            />
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => { doLogin(email, password) }}
            >
              Log In
            </button>
            {/* <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => { doSignup(email, password) }}
            >
              Sign Up
            </button> */}
          </div>
        </form>
      </div>
    </div>
  )
}