

"use client";
import Link from 'next/link';
// import { getAllTodos } from "@/api";
// import AddTask from "./components/AddTask";
// import DailyReport from "./components/TodoList";
import { FormEvent } from 'react'
import Header  from '@/app/components/aftersigninheader';
import Image from 'next/image'

import { useState } from 'react';
import "axios"
import axios from 'axios';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import React from "react";
import { setCookie } from 'nookies';
// import {Button} from next
import next from 'next';

// 日時取得
// 現在の日時を取得
const now = new Date();
// 日本語のロケールで日付のみを取得
const nowStr = now.toLocaleDateString('ja-JP', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
});

// １のボタン送付
  // const App = () => {
  //   const [condition, setCondition] = useState('');

  //   const handleChangeCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setCondition(e.target.value);
  //   };

  //   const handleSubmit = () => {
  //     // データ送信処理
  //     console.log(condition);
  //   };


export default function SeniorHealth() {
  // 
    // <FirstHeader/>
    const router = useRouter(); // フックの呼び出しを関数コンポーネントのボディ内で行う
  
    // メール・パスワードの代わりにフォームの内容入力
    const [senior_user_id, seniorUserId] = useState("")
    const [condition, Condition] = useState("")
    const [symptom  , Symptom] = useState("")
    const [medicine, Medicine] = useState("")
    const [dinner_photo, dinnerPhoto] = useState("")
    const [degree, Degree] = useState("")
    const [voice_text, voiceText] = useState("")

    
    // Inputのハンドル操作
    const handleChangeSeniorUserId = async (e: React.ChangeEvent<HTMLInputElement>) => {
      seniorUserId(() => e.target.value)
    }
    const handleChangeSympton = async (e: React.ChangeEvent<HTMLInputElement>) => {
      setSympton(() => e.target.value)
    }
    const handleChangeMedicine = async (e: React.ChangeEvent<HTMLInputElement>) => {
      setMedicine(() => e.target.value)
    }
    const handleChangeDinnerPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
      setDinnerPhoto(() => e.target.value)
    }
    const handleChangeDegree = async (e: React.ChangeEvent<HTMLInputElement>) => {
      setDegree(() => e.target.value)
    }
    const handleChangeVoiceText = async (e: React.ChangeEvent<HTMLInputElement>) => {
      setVoiceText(() => e.target.value)
    }
  
    /**
     * ログイン処理を実行する メモ
     * @param email 
     * @param password 
     */
    // const doLogin = (email: string, password: string) => {
    //   // const auth = getAuth(app);
    //   // flask側へメールアドレスとパスワードを送ってログインをする
    //   /* json形式ににして送信する
    //   {
    //     "email": "aaa@aa.aa",
    //     "password": "pass"
    //   }
    //   */
    //  console.log('ログイン')
  
    //  axios.post('http://localhost:5001/api/senior_login', 
    //    {email: senior_email, password: senior_password},
    //    {
    //      headers: {
    //        "Content-Type": "application/json",
    //        "Authorization": "Bearer <token>"
    //      }
    //    }).then((res) => {
    //      console.log(res.data)
    //      // ログインフラグをクッキーへ、「auth」というキーで登録
    //      setCookie(null, 'auth', res.data.token, {
    //       maxAge: 30 * 24 * 60 * 60, // お好きな期限を
    //       path: '/',
    //     });
    //      router.push('/senior/senior_top_page');
  
    //    }).catch((err) => {
    //      console.log(err.response.data)
    //    })
    // }
  
    /**
     * 新規登録処理を実行する
     * @param senior_user_id
     * @param condition
     * @param symptom
     * @param medicine
     * @param dinner_photo
     * @param degree
     * @param voice_text
     */
    const doRegistration = (condition: string, symptom: string, medicine: boolean,dinner_photo:string,degree:string,voice_text:string) => {

      // flask側へtokenを使ってユーザーを判定　
      // その後健康情報を登録する
      /* json形式ににしてそうしんする
      {
        "email": "aaa@aa.aa",
        "password": "pass"
      }
      */
     console.log('健康登録の新規作成')
      axios.post('http://localhost:5001/api/{senior_user_id}/health', 
        {condition: Condition,
         symptom: Symptom,
         medicine: Medicine,
         dinner_photo: dinnerPhoto,
         degree: Degree,
         voice_text: voiceText
        },
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
    
    <div className="flex flex-col min-h-screen">
      {/* ヘッダーの呼び出し */}
      <Header />
      {/* メインコンテンツ */}
      <main>
        {/* CSSあり*/}
        {/* <div className="w-[1200px] h-[6000px] relative"> */}
              {/* 囲い枠 */}
              <div className="w-[1000px] h-[1310px] left-[100px] top-[8px] absolute">
                  <div className="w-[91px] h-[27px] left-[566px] top-[115px] 
                    absolute text-black text-[17px] font-normal font-['Inter']">
                    登録画面
                  </div>
                  <div className="w-[1000px] h-[1156px] left-0 top-[154px] 
                    absolute rounded-[10px] 
                    border border-black border-opacity-50">
                  </div>
                  <div className="w-[206px] h-[26px] left-[385px] top-[175px] 
                    absolute text-black 
                    text-[17px] font-normal font-['Inter']">
                      {/* 日付関数  Yet*/}
                      本日 {nowStr} の健康の記録
                  </div>
              </div>
             {/* 1 */}
             {/* <div>
              <div className="w-[123px] h-[17px] left-[228px] top-[262px] absolute text-black text-[17px] font-normal font-['Inter']">
                1.体調について
              </div>
              <div className="w-[294px] h-9 left-[575px] top-[254px] absolute">
                <div className="w-[98px] h-9 left-0 top-0 absolute  bg-white border border-black">
                  <input
                    type="radio"
                    name="condition"
                    value="good"
                    checked={condition === 'good'}
                    onChange={handleChangeCondition}
                  />
                </div>
                <div className="left-[32px] top-[8px] 
                  absolute text-black text-[17px] font-normal font-['Inter']">
                  良い
                </div>
                <div className="w-[98px] h-9 left-[98px] top-0 absolute bg-white border border-black">
                  <input
                    type="radio"
                    name="condition"
                    value="normal"
                    checked={condition === 'normal'}
                    onChange={handleChangeCondition}
                  />
                </div>
                <div className="left-[126px] top-[8px] 
                  absolute text-black text-[17px] font-normal font-['Inter']">
                  普通
                </div>
                <div className="w-[98px] h-9 left-[196px] top-0 absolute bg-white border border-black">
                  <input
                    type="radio"
                    name="condition"
                    value="bad"
                    checked={condition === 'bad'}
                    onChange={handleChangeCondition}
                  />
                </div>
                <div className="left-[228px] top-[8px] 
                  absolute text-black text-[17px] font-normal font-['Inter']">
                  悪い
                </div>
              </div>
              <button onClick={handleSubmit}>送信</button>
            </div> */}

             {/* </form> */}
        {/* </div> */}
         {/* ) */}
        
      </main>
      
      {/* フッターの呼び出し */}
    </div>
    
    
    
  );
}






              //   {/* 2 */}
              // <div className="w-[152px] h-[17px] left-[228px] top-[332px] absolute text-black text-[17px] font-normal font-['Inter']">
              //   2.調子の悪い箇所
              // </div>
              //   {/* image */}
              //   <Image src='/app/components/Body.png' alt='logo' width={100} height={100} />

              //   {/* <Image
              //       oader={myLoader}
              //       src="me.png"
              //       alt="Picture of the author"
              //       width={500}
              //       height={500}
              //     /> */}
              //     {/* <img className="w-[170px] h-[521px] left-[656px] top-[334px] 
              //       absolute shadow border border-black" src="/Users/momo/MSE boot/mimamori/App/app/next/src/app/components/Body.png" /> */}
              //     {/* タップしたimage */}
              //     {/* <div className="w-10 h-[29px] left-[698px] top-[334px] absolute bg-red-600 
              //     rounded-full border border-red-600">
              //     </div> */}
              
              // {/* 3 */}
              // <div className="w-[152px] h-[17px] left-[228px] top-[906px] 
              //   absolute text-black text-[17px] font-normal font-['Inter']">
              //   3.薬は飲みましたか
              // </div>
              // <div className="w-[195px] h-9 left-[627px] top-[899px] absolute">
              //     <div className="w-[98px] h-9 left-0 top-0 absolute bg-white border border-black"></div>
              //     <div className="w-[98px] h-9 left-[97px] top-0 absolute bg-white border border-black"></div>
              //     <div className="left-[19px] top-[8px] absolute text-black text-[17px] font-normal font-['Inter']">
              //      <button>
              //       飲んだ</button></div>
              //     <div className="left-[103px] top-[8px] absolute text-black text-[17px] font-normal font-['Inter']">
              //     <Button>
              //       飲んでない
              //     <Button/>
              //     </div>
              // </div>
              

              // {/* 4 */}
              // <div className="w-[333px] h-[17px] left-[228px] top-[986px] 
              //   absolute text-black text-[17px] font-normal font-['Inter']">
              //   4.昨日の夕飯の写真を登録してください
              // </div>
              // {/* イメージアップロードのコーディング必要 Base64利用　Yet*/}
              // <div className="left-[103px] top-[8px] absolute text-black text-[17px] font-normal font-['Inter']">
              //       画像をアップロードする</div>


              // {/* 5 */}
              // <div className="w-[333px] h-[17px] left-[231px] top-[1070px] 
              //   absolute text-black text-[17px] font-normal font-['Inter']">
              //   5.昨日の食欲はどうでしたか
              // </div>
              // <div className="w-[294px] h-9 left-[634px] top-[1079px] absolute">
              //       <div className="w-[98px] h-9 left-0 top-0 absolute bg-white border border-black">
              //       </div>

              //       <div className="w-[98px] h-9 left-[196px] top-0 absolute bg-white border border-black">
              //       </div>
              //       <div className="w-[98px] h-9 left-[98px] top-0 absolute bg-white border border-black">
              //       </div>
              //       <div className="left-[32px] top-[8px] 
              //         absolute text-black text-[17px] font-normal font-['Inter']">
              //         完食
              //       </div>
              //       <div className="left-[126px] top-[8px] 
              //         absolute text-black text-[17px] font-normal font-['Inter']">
              //         半分
              //       </div>
              //       <div className="left-[211px] top-[8px] 
              //         absolute text-black text-[17px] font-normal font-['Inter']">
              //         半分以下
              //       </div>
              //   </div>


              // {/* 6 */}
              // <div className="w-[333px] h-[17px] left-[231px] top-[1155px] 
              //   absolute text-black text-[17px] font-normal font-['Inter']">
              //   6.音声で体調を教えてください
              // </div>
              // <div className="w-[1100px] h-px left-[77px] top-[101px] 
              //   absolute bg-zinc-300 rounded-[5px]">
              // </div>
              // <div className="w-[294px] h-[89px] left-[634px] top-[1166px] absolute">
              //     {/* <div className="w-[294px] h-[89px] left-0 top-0 
              //       absolute bg-white border border-black">
              //     </div> */}
              //     {/* Wisperの反映どうすればいいか確認 Yet */}
              //     <div className="w-[294px] h-[89px] left-0 top-0 
              //       absolute text-black text-[17px] font-normal font-['Inter']">
              //         <button>
              //         音声登録する<br/>
              //         </button>
              //     </div>
              // </div>

              // {/* 戻るボタンとその設定 */}
              // <div className="w-[261px] h-[65px] left-[297px] top-[1344px] 
              //   absolute bg-zinc-300 rounded-[10px] shadow">
              // </div>
              // <div className="left-[401px] top-[1362px] 
              //   absolute text-black text-[25px] font-normal font-['Inter']">
              //   <Link href="/senior/senior_top_page">
              //   戻る
              //   </Link>
              // </div>

              // {/* 送信ボタンとその設定 */}
              // <div className="w-[261px] h-[65px] left-[674px] top-[1344px] 
              //   absolute bg-zinc-300 rounded-[10px] shadow">
              // </div>
              // <div className="left-[780px] top-[1362px] 
              //   absolute text-black text-[25px] font-normal font-['Inter']">
              //   <Link href="/senior/senior_daily_report_cfm">
              //   送信
              //   </Link>
              // </div>
              
