"use client";//for frame motion
import Link from 'next/link';
import Footer from '@/app/components/footer';
import Header from '@/app/components/aftersigninheader';
import {useState} from "react";
import {parseCookies} from "nookies";
import axios from "axios";
import {router} from "next/client";
import {useRouter} from "next/navigation";
// 日時取得
// 現在の日時を取得
const now = new Date();
// 日本語のロケールで日付のみを取得
const nowStr = now.toLocaleDateString('ja-JP', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
});


export default function SeniorReportCmf() {
  const router = useRouter()
  const [formData, setFormData] = useState(() => {
    // LocalStorageからデータを取得し、パースする
    const savedFormData = localStorage.getItem('formData');
    return savedFormData ? JSON.parse(savedFormData) : {
      condition: "",
      symptom: "head",
      medicine: false,
      dinner_photo:"",
      degree: "full",
      voice_text: "",
    };
  });
  const handleSubmit = () => {
    const cookies = parseCookies();
    const token = cookies.auth;

    axios.post('http://localhost:5001/api/health',
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        })
        .then((res) => {
          console.log(res.data)
          router.push("/senior/senior_daily_report_done")
    })
        .catch((err) => {
          console.log(err.response.data)
          // ここでバリデーションエラーの場合はエラーメッセージ自体を受け取って、フォームページへ遷移する
          // ページ遷移時に受け取ったエラーメッセージは消えてしまうので、localStarageなどに保存して取り出すなど工夫をする必要あり。
    })
  }

  return (
      <div className="flex flex-col min-h-screen">
        {/* ヘッダーの呼び出し */}
        <Header/>
        {/* メインコンテンツ */}
        <main>
          {/* CSSあり*/}
          <form className="w-[1200px] h-[6000px] relative" onSubmit={(e: any) => {
            e.preventDefault()
            handleSubmit()
          }}>

            {formData.condition}{formData.medicine}{formData.symptom}{formData.degree}
            <div className="">
              <button type={"submit"}>
                送信
              </button>
            </div>
          </form>
        </main>

        {/* フッターの呼び出し */}
      </div>
  );
}




ーーーー
"use client";//for frame motion
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/app/components/footer';
import Header from '@/app/components/aftersigninheader';
import { useEffect, useState } from "react";
import {useRouter, usePathname, useSearchParams} from 'next/navigation'
import {parseCookies} from "nookies";
import axios from "axios";
import {router} from "next/client";

import BackButton from '@/app/components/BackButton';
import SubmitButton from '@/app/components/SubmitButton';
// 日時取得
// 現在の日時を取得
const now = new Date();
// 日本語のロケールで日付のみを取得
const nowStr = now.toLocaleDateString('ja-JP', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
});


export default function SeniorReportCmf() {
  const router = useRouter();
  const [formData, setFormData] = useState(() => {
    // LocalStorageからデータを取得し、パースする
    const savedFormData = localStorage.getItem('formData');
    return savedFormData ? JSON.parse(savedFormData) : {
      condition: "",
      symptom: "head",
      medicine: false,
      dinner_photo: "",
      degree: "full",
      voice_text: "",
    };
  });
  const handleSubmit = () => {
    const cookies = parseCookies();
    const token = cookies.auth;

    axios.post('http://localhost:5001/api/health',
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        })
        .then((res) => {
          console.log(res.data)
          router.push("/senior/senior_daily_report_done")
    })
        .catch((err) => {
          console.log(err.response.data)
          // ここでバリデーションエラーの場合はエラーメッセージ自体を受け取って、フォームページへ遷移する
          // ページ遷移時に受け取ったエラーメッセージは消えてしまうので、localStarageなどに保存して取り出すなど工夫をする必要あり。
    })
  }

  return (
      <div className="flex flex-col min-h-screen">
         {/* ヘッダーの呼び出し  */}
        <Header/>
         {/* メインコンテンツ  */}
        <main>
           {/* CSSあり */}
          {/* <form className="w-[1200px] h-[6000px] relative" onSubmit={(e: any) => {
            e.preventDefault()
            handleSubmit()
          }}>
              <div className="w-[206px] h-[26px] left-[385px] top-[175px]
                    absolute text-black 
                    text-[17px] font-normal font-['Inter']">
                本日 {nowStr} の健康の記録
              </div>
            </div> */}

            {/*  1  */}
            <div className="w-full h-full flex flex-col items-center justify-center">
          {/* 確認画面タイトル */}
          <div className="text-2xl font-bold mb-4">確認画面</div>
          {/* フォーム内容表示 */}
          <FormContent formData={formData} />
          {/* ボタンエリア */}
          <div className="mt-8 flex justify-between w-1/2">
            <BackButton />
            <SubmitButton handleSubmit={handleSubmit} />
          </div>
        </div>
      </main>
      {/* フッターの呼び出し */}
      <Footer />
    </div>
  );
}
// フォーム内容表示コンポーネント
const FormContent = ({ formData }) => {
  return (
          <div className="bg-white p-4 rounded-md shadow-md w-full">
            {/* 1. 体調について */}
              <div className="mb-4">
                <p className="font-bold">1. 体調について</p>
                <p className="text-lg">{formData.condition}</p>
              </div>
            {/* 2. 調子の悪い箇所 */}
            <div className="mb-4">
              <p className="font-bold">2. 調子の悪い箇所</p>
              <p className="text-lg">{formData.symptom}</p>
              </div>
            {/* 3. 薬は飲みましたか */}
            <div className="mb-4">
              <p className="font-bold">3. 薬は飲みましたか</p>
              <p className="text-lg">{formData.medicine ? "飲んだ" : "飲んでない"}</p>
            </div>
            {/* 4. 昨日の夕飯の写真 */}
            <div className="mb-4">
                <p className="font-bold">4. 昨日の夕飯の写真</p>
                {formData.dinnerPhoto && (
                  <img src={formData.dinnerPhoto} alt="夕飯の写真" className="w-48 h-32" />
                )}
              </div>
              <div className="mb-4">
                  <p className="font-bold">5. 昨日の食欲は？</p>
                  <p className="text-lg">
                    {formData.degree === "full" && "完食"}
                    {formData.degree === "half" && "半分"}
                    {formData.degree === "lessThanHalf" && "半分以下"}
                  </p>
               </div>
               <div className="mb-4">
                  <p className="font-bold">6. 音声メモ</p>
                  {formData.voiceText && (
                    <audio controls src={formData.voiceText} className="w-48" />
                  )}
                </div>

          </div>

  )}
             {/* 2  */}
            {/* <div
                className="w-[152px] h-[17px] left-[228px] top-[332px] absolute text-black text-[17px] font-normal font-['Inter']">
              2.調子の悪い箇所
            </div>
            <div>
              {formData.symptom}
            </div>
             image 
            <img className="w-[170px] h-[521px] left-[656px] top-[334px]
                    absolute shadow border border-black" src='@/app'/>
             タップしたimage 
            <div className="w-10 h-[29px] left-[698px] top-[334px] absolute bg-red-600
                  rounded-full border border-red-600">
            </div>
            <Image
            src="/Body.png"
            alt="体の部位"
            width={100}
            height={100}
          />
          <Image
            src="/Body2.png"
            alt="体の部位"
            width={100}
            height={100}
          /> */}

             {/* 3  */}
            {/* <div className="w-[152px] h-[17px] left-[228px] top-[906px]
                absolute text-black text-[17px] font-normal font-['Inter']">
              3.薬は飲みましたか
            </div>
            <div className="w-[195px] h-9 left-[627px] top-[899px] absolute">
              {formData.medicine}
              <div className="w-[98px] h-9 left-0 top-0 absolute bg-white border border-black"></div>
              <div className="w-[98px] h-9 left-[97px] top-0 absolute bg-black border border-black"></div>
              <div className="left-[19px] top-[8px] absolute text-black text-[17px] font-normal font-['Inter']">
                飲んだ
              </div>
              <div className="left-[103px] top-[8px] absolute text-white text-[17px] font-normal font-['Inter']">
                飲んでない
              </div>
            </div> */}


             {/* 4  */}
            {/* <div className="w-[333px] h-[17px] left-[228px] top-[986px]
                absolute text-black text-[17px] font-normal font-['Inter']">
                  {formData.dinner_photo}
              4.昨日の夕飯の写真を登録してください
            </div> */}
             {/* イメージ取得のコーディング必要 Yet */}
            {/* <img className="w-[129px] h-[72px] left-[693px] top-[988px] absolute"
                 src="https://via.placeholder.com/129x72"/> */}


             {/* 5  */}
            {/* <div className="w-[333px] h-[17px] left-[231px] top-[1070px]
                absolute text-black text-[17px] font-normal font-['Inter']">
                   {formData.degree}
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
            </div> */}


             {/* 6  */}
            {/* <div className="w-[333px] h-[17px] left-[231px] top-[1155px]
                absolute text-black text-[17px] font-normal font-['Inter']">
                {formData.voice_text}
              6.音声で体調を教えてください
            </div>
            <div className="w-[1100px] h-px left-[77px] top-[101px]
                absolute bg-zinc-300 rounded-[5px]">
            </div>
            <div className="w-[294px] h-[89px] left-[634px] top-[1166px] absolute">
              <div className="w-[294px] h-[89px] left-0 top-0
                    absolute bg-white border border-black">
              </div>

              <div className="w-[294px] h-[89px] left-0 top-0
                    absolute text-black text-[17px] font-normal font-['Inter']">
                元気です。<br/>
                ご飯は胃もたれして食べれませんでし<br/>
                た。
              </div>
            </div> */}

             {/* 戻るボタンとその設定  */}
            // <div className="w-[261px] h-[65px] left-[297px] top-[1344px]
            //     absolute bg-zinc-300 rounded-[10px] shadow">
            // </div>
            // <div className="left-[401px] top-[1362px]
            //     absolute text-black text-[25px] font-normal font-['Inter']">
            //   <Link href="/senior/senior_daily_report">
            //     戻る
            //   </Link>
            // </div>

             {/* 送信ボタンとその設定  */}
            // <div className="w-[261px] h-[65px] left-[674px] top-[1344px]
            //     absolute bg-zinc-300 rounded-[10px] shadow">
            // </div> 
            {/* {formData.condition}{formData.medicine}{formData.symptom}{formData.degree} */}
//             <div className="">
//               <button type={"submit"}>
//                 送信
//               </button>
//             </div>
//             </div>
//           </form>
//         </main>

         
//       </div>
//   );
// }



