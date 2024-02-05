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