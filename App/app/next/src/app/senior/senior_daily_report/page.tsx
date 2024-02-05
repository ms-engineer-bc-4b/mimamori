"use client";
import Link from 'next/link';
import {FormEvent, useEffect} from 'react'
import Header from '@/app/components/aftersigninheader';
import Image from 'next/image'

import {useState} from 'react';
import "axios"
import axios from 'axios';
import {useRouter, usePathname, useSearchParams} from 'next/navigation'
import React from "react";
import {setCookie, parseCookies} from 'nookies';
import next from 'next';
import {number} from "prop-types";
import VoiceToText from "@/app/components/VoiceToText"
import uploadImage from '@/app/components/UploadImage';
import { app } from '@/lib/firebase/firebase';
import Body from '@/app/components/Body';


// 日時取得
// 現在の日時を取得
const now = new Date();
// 日本語のロケールで日付のみを取得
const nowStr = now.toLocaleDateString('ja-JP', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
});


export default function SeniorHealth() {
  // 音声を文章化
  const [text, setText] = useState<string>("");
  // フックの呼び出しを関数コンポーネントのボディ内で行う
  const router = useRouter(); 
  // 
  const [formData, setFormData] = useState({
    condition: "",
    symptom: "head",
    medicine: false,
    dinner_photo:"",
    degree: "full",
    voice_text: "",
  })
  const symptomArray = [
    {value: 'head', name: "頭"},
    {value: 'face', name: "顔"},
    {value: 'neck', name: "首"},
    {value: 'shoulder', name: "肩"},
    {value: 'chest', name: "胸"},
    {value: 'rightArm', name: "右肩"},
    {value: 'leftArm', name: "左肩"},
    {value: 'leftHand', name: "左手"},
    {value: 'rightHand', name: "右手"},
    {value: 'abdomen', name: "腹部"},
    {value: 'rightLeg', name: "右膝"},
    {value: 'leftLeg', name: "左膝"},
    {value: 'leftAnkle', name: "左足首"},
    {value: 'rightAnkle', name: "右足首"},
    {value: 'back', name: "背中"},
    {value: 'buttocks', name: "尻"}
  ]

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <div className="container">
      <Header/>
      <section className="bg-white p-4">
      <h2 className="text-xl font-bold">健康の登録</h2>
      <p className="text-gray-500 mb-4">本日 {nowStr} の健康の記録</p>
    
      <form>
      <div className="mb-4">
        <h3 className="font-bold">
            1.体調についてどうですか？
        </h3>
          <div className="flex space-between mt-2">
            <div className="inline-block mr-2">
              <input
                  type="radio"
                  name="condition"
                  value="good"
                  onClick={(e: any) => {
                    setFormData({...formData, condition: e.target.value})
                  }}
              />
              <label for="good" className="ml-2">良い</label>
            </div>
            {/* <div className="">
              良い
            </div> */}
            <div className="inline-block mr-2">
              <input
                  type="radio"
                  name="condition"
                  value="normal"
                  onClick={(e: any) => {
                    setFormData({...formData, condition: e.target.value})
                  }}
              />
              <label for="normal" className="ml-2">普通</label>
            </div>
            {/* <div className="">
              普通
            </div> */}
            <div className="inline-block">
              <input
                  type="radio"
                  name="condition"
                  value="bad"
                  onClick={(e: any) => {
                    setFormData({...formData, condition: e.target.value})
                  }}
              />
              <label for="bad" className="ml-2">悪い</label>
            </div>
            {/* <div className="">
              悪い
            </div> */}
          </div>
        </div>
        {/* 2ReactKonva */}
        <div className={"flex"}>
          <label>2.調子の悪いところはどこですか？</label>
          <select onChange={(e: any) => {
            setFormData({...formData, symptom: e.target.value})
          }}>
            {symptomArray.map((elm: any, index: number) =>
                <option value={elm.value} key={index}>{elm.name}</option>
            )}
          </select>
          
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
          />

        </div>
        <div className={"flex"}>
          <label>3.薬は飲みましたか？</label>
          <input
              type="checkbox"
              name="condition"
              onChange={(e: any) => {
                if (e.target.checked) {
                  setFormData({...formData, medicine: true})
                } else {
                  setFormData({...formData, medicine: false})
                }

              }}
          />
        </div>
        {/* 4 X*/}
        <div className={"flex"}>
          <label>4.昨日の夕飯を登録してください</label>

          <div>
            <input type="file" accept="image/*" 
            multiple onChange={(e) => setFormData
            ({ ...formData, dinner_photo: e.target.value })} />
            <div id="imgPreviewField"></div>
          </div>
        </div>

        <div className={"flex"}>
          <label>5.昨日の食欲はどうでしたか？</label>
          <select onChange={(e: any) => {
            setFormData({...formData, degree: e.target.value})
          }}>
            <option value={'full'}>完食</option>
            <option value={'half'}>半分</option>
            <option value={'less'}>半分以下</option>
          </select>
        </div>

        {/* <div className={"flex"}>
          <label>6.音声で体調を登録してください</label>
          <div className="">
          <VoiceToText setText={setText}/>
          <textarea id="voicetotext" name="voicetotext" cols="45" rows="8" 
          aria-label="音声をテキストフィールド value={text} 
          // onChange={(e) => setFormData({...formData, voice_to_text:[setText(e.target.value)]}>
          </textarea>
          </div>
        </div> */}


      </form>
      {/* ボタンコンポーネント */}
      <div className=''>
          <button 
          className="w-[261px] h-[65px] absolute bg-zinc-300 hover:bg-zinc-600 rounded-[10px] shadow">
            <Link href={"/senior/senior_daily_report_cfm"}>確認
            </Link>
          </button>
      </div>
      </section>
    </div>

  );
}
