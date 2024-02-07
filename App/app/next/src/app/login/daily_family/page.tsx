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








  
  const convertConditionText = (condition) => {
    switch (condition) {
      case 'good':
        return '良好';
      case 'normal':
        return '普通';
      case 'bad':
        return '悪い';
      default:
        return '未知の状態';
    }
  };
  const convertSymptomText = (symptom) => {
    switch (symptom) {
      case 'head':
        return '頭';
      case 'face':
        return '顔';
      case 'neck':
        return '首';
      case 'shoulder':
        return '肩';
      case 'chest':
        return '胸';
      case 'right_arm':
        return '右腕';
      case 'left_arm':
        return '左腕';
      case 'left_hand':
        return '左手';
      case 'right_hand':
        return '右手';
      case 'abdomen':
        return '腹';
      case 'right_leg':
        return '右足';
      case 'left_leg':
        return '左足';
      case 'left_ankle':
        return '左足首';
      case 'right_ankle':
        return '右足首';
      case 'back':
        return '背中';
      case 'buttocks':
        return '尻';
      default:
        return '未知の症状';
    }
  };

  const convertMedicineText = (medicine) => {
    switch (medicine) {
      case 'yes':
        return '飲んだ';
      case 'no':
        return '飲んでない';
      default:
        return '未知の状態';
    }
  };


  const convertDegreeText = (degree) => {
    switch (degree) {
      case 'full':
        return '完食';
      case 'half':
        return '半分だけ食べた';
      case 'less':
        return 'ほとんど食べれなかった';
      default:
        return '未知の状態';
    }
  };

  // ダミーデータ
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
  };






  //
  const dummy_message = {

    "message": "これはメッセージの内容です。"


  }
//


//
  useEffect(() => {
    fetchData();
  }, [seniorUserId, healthInformationCreatedAt, API_ENDPOINT]);
  
  return (

    <div>
      <Header />
      <p className="mt-4 text-lg">本日の健康登録</p>
      <div className="border-dashed border-2 border-black p-4 w-full max-w-screen-lg mx-auto">
        <div className="dashed-rectangle">
        <div className="dashed-note">
         
          <ul>
      
            <li text-lg>登録日: {healthInformationCreatedAt}</li>
            {/* healthInfo のデータを適切に表示する */}
            {/* 以下は仮の例で、実際のデータ構造に合わせて調整する必要があります */}

            <li text-lg>健康状態:  {convertConditionText(dummy.condition)}</li>
            <li text-lg>昨晩の夕飯写真: {dummy.dinner_photo}</li>
             <p>食事の状態: {convertDegreeText(dummy.degree)}</p>
            <li text-lg>薬の服用: {convertMedicineText(dummy.medicine)}</li>
            <li text-lg>体の不調部位:{convertSymptomText(dummy.symptom)}</li>
            <li text-lg>一言メッセージ: {dummy.voice_text}</li>
          
          </ul>
        </div>
        
        </div>  </div>
      
      {/* テキストメッセージフォームと送信ボタン */}
      <div>
    
        <p className="mt-4 text-lg">メッセージを送信してください</p>
       
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message..."
          className="text-lg border-dashed border-2 border-black p-4 w-full max-w-screen-lg mx-auto"
        />

<div className="flex items-center justify-center">
  <button className="bg-gray-500 border text-white p-3 rounded-full">
    <div className="flex items-center">
      <div className="text-lg font-normal font-inter ml-2 text-center">
      送信
      </div>
    </div>
  </button>
</div>

      </div>
    </div>
  );
};

export default HealthInfoComponent;
