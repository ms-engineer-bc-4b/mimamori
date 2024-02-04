"use client";
import Link from 'next/link';
// import { getAllTodos } from "@/api";
// import AddTask from "./components/AddTask";
// import DailyReport from "./components/TodoList";
import {FormEvent, useEffect} from 'react'
import Header from '@/app/components/aftersigninheader';
import Image from 'next/image'

import {useState} from 'react';
import "axios"
import axios from 'axios';
import {useRouter, usePathname, useSearchParams} from 'next/navigation'
import React from "react";
import {setCookie, parseCookies} from 'nookies';
// import {Button} from next
import next from 'next';
import {number} from "prop-types";

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
  // 
  // <FirstHeader/>
  const router = useRouter(); // フックの呼び出しを関数コンポーネントのボディ内で行う
  const [formData, setFormData] = useState({
    condition: "",
    symptom: "head",
    medicine: false,
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
      <form>
        <div>
          <div
              className="">
            1.体調について
          </div>
          <div className="">
            <div className="">
              <input
                  type="radio"
                  name="condition"
                  value="good"
                  onClick={(e: any) => {
                    setFormData({...formData, condition: e.target.value})
                  }}
              />
            </div>
            <div className="">
              良い
            </div>
            <div className="">
              <input
                  type="radio"
                  name="condition"
                  value="normal"
                  onClick={(e: any) => {
                    setFormData({...formData, condition: e.target.value})
                  }}
              />
            </div>
            <div className="">
              普通
            </div>
            <div className="">
              <input
                  type="radio"
                  name="condition"
                  value="bad"
                  onClick={(e: any) => {
                    setFormData({...formData, condition: e.target.value})
                  }}
              />
            </div>
            <div className="">
              悪い
            </div>
          </div>
        </div>
        <div className={"flex"}>
          <label>2.調子の悪いところ</label>
          <select onChange={(e: any) => {
            setFormData({...formData, symptom: e.target.value})
          }}>
            {symptomArray.map((elm: any, index: number) =>
                <option value={elm.value} key={index}>{elm.name}</option>
            )}
          </select>
        </div>
        <div className={"flex"}>
          <label>3.薬は飲みましたか</label>
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
        <div className={"flex"}>
          <label>4.食欲</label>
          <select onChange={(e: any) => {
            setFormData({...formData, degree: e.target.value})
          }}>
            <option value={'full'}>完食</option>
            <option value={'half'}>半分</option>
            <option value={'less'}>半分以下</option>
          </select>
        </div>
        <Link href={"/senior/senior_daily_report_cfm"}>確認</Link>
      </form>


  );
}
