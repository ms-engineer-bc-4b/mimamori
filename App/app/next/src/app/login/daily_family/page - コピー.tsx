"use client"
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Header from '@/components/Header';
import '@/app/globals.css';
const HealthInfoComponent = () => {
  const [healthInfo, setHealthInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const [healthInfoId, setHealthInfoId] = useState<number | null>(null);

  const seniorUserId = 9;
  const healthInformationCreatedAt = format(new Date(), 'yyyyMMdd');
  const API_ENDPOINT = `http://localhost:5000/api/calender/senior_id/${seniorUserId}/created_at/${healthInformationCreatedAt}`;

  const fetchData = async () => {
    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        setHealthInfo(responseData);
        // healthInfoからidを抽出してstateにセット
        setHealthInfoId(responseData.id);
      } else if (response.status === 404) {
        setError('本日のデータはありません。');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Request failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Network error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async () => {

    if (healthInfoId === null) {
      console.error('HealthInfo ID is not available.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/health/${healthInfoId}/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (response.ok) {
        console.log('Message sent successfully');
        // メッセージ送信後にデータを再取得するなどの処理を追加できます
      } else {
        const errorData = await response.json();
        console.error('Message sending failed:', errorData.error || 'Request failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [seniorUserId, healthInformationCreatedAt, API_ENDPOINT]);

  const dummy = {
    "condition": "good",
    "created_at": "2024-02-04T21:59:07Z",
    "degree": "full",
    "dinner_photo": "",
    "id": 21,
    "medicine": "yes",
    "symptom": "head",
    "updated_at": "2024-02-04T21:59:07Z",
    "voice_text": "元気dふぇす."
  }
  const dummy_message = {

    "message": "これはメッセージの内容です。"


  }
  useEffect(() => {
    fetchData();
  }, [seniorUserId, healthInformationCreatedAt, API_ENDPOINT]);
  return (

    <div>
      <Header />
      <p>本日の健康登録</p>
      {loading && <p>Loading...</p>}
      {error && <p> {error}</p>}
      {healthInfo && (
        <div className="dashed-rectangle">
        <div className="dashed-note">
          <h2>Health Information</h2>
          <ul>
            <li>Senior User ID: {seniorUserId}</li>
            <li>Health Information Created At: {healthInformationCreatedAt}</li>
            {/* healthInfo のデータを適切に表示する */}
            {/* 以下は仮の例で、実際のデータ構造に合わせて調整する必要があります */}
            <li>Condition: {healthInfo.condition}</li>
            <li>Degree: {healthInfo.degree}</li>
            <li>Dinner Photo: {healthInfo.dinner_photo}</li>
            <li>Medicine: {healthInfo.medicine}</li>
            <li>Symptom: {healthInfo.symptom}</li> */}
            <li>Voice Text: {healthInfo.voice_text}</li>
            <li>Condition: hahaha</li>
            <li>Degree: hahahah</li>
            <li>Dinner Photo: hahahah</li>
            <li>Medicine: hahahah</li>
            <li>Symptom:hahahah</li>
            <li>Voice Text: hahahah</li>
          </ul>
        </div>
        </div>
      )}
      {/* テキストメッセージフォームと送信ボタン */}
      <div>
        <p>メッセージを送信してください</p>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message..."
        />

        <button className="flex items-center bg-gray-500 border text-white p-3 rounded-full">

          <div className="flex items-center">


            <div className="text-lg font-normal font-['Inter'] ml-2">
              送信
            </div>
          </div>

        </button>
      </div>
    </div>
  );
};

export default HealthInfoComponent;
