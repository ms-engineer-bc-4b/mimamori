// Home.tsx
'use client'
import React, { useState } from 'react';
import { useForm, SubmitHandler, useFormContext } from 'react-hook-form';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Link from 'next/link';
import { useEffect } from 'react';
//import { stringify } from 'querystring';
interface QueryParams {
  [key: string]: string | string[] | undefined;
}
interface LoginForm extends QueryParams {
  senior_last_name: string;
  senior_first_name: string;
  gender: string;
  birth_date: string;
  senior_email: string;
  senior_tel: string;
  health_status: string;
  medication: string;
  medication_frequency: string;

  family_last_name: string;
  family_first_name: string;
  relationship_with_senior: string;
  family_email: string;
  family_tel: string;
  family_password: string;
  confirm_family_password: string;
}





function Home() {
  const { register, handleSubmit, getValues, formState: { errors }, watch } = useForm<LoginForm>({ mode: "onChange" });

  const [formData, setFormData] = useState<LoginForm | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const medicationValue = watch('medication');

  const onSubmit: SubmitHandler<LoginForm> = (data: any) => {
    console.log(data);
    setFormData(data);
    setShowConfirmation(true);
  };


  const handleBack = () => {
    setFormData(null);
    setShowConfirmation(false);
  };
  const [message, setMessage] = useState('');

  const handleConfirm = () => {
    // フォームから入力されたデータを取得
    const seniorData = {
      //   senior_user_id: getValues('senior_user_id'),
      senior_last_name: getValues('senior_last_name'),
      senior_first_name: getValues('senior_first_name'),
      gender: getValues('gender'),
      birth_date: getValues('birth_date'),
      senior_email: getValues('senior_email'),
      senior_tel: getValues('senior_tel'),
      health_status: getValues('health_status'),
      medication: getValues('medication'),
      medication_frequency: getValues('medication_frequency')
    };

    const familyData = {
      //  family_id: getValues('family_id'),
      family_last_name: getValues('family_last_name'),
      family_first_name: getValues('family_first_name'),
      relationship_with_senior: getValues('relationship_with_senior'),
      family_email: getValues('family_email'),
      family_tel: getValues('family_tel'),
      family_password: getValues('family_password')
    };

    const formData = {
      senior: seniorData,
      family: familyData
    };

    // fetchリクエスト
    fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.text())
      .then((data) => {
        console.log('Received data:', data);//家族メールアドレスと家族パスワード返してもらう・高齢者メールアドレスへメール送信

      })
      .catch((error) => console.error('Error fetching data:', error));
  };
  const seniorUserId = 1;
  fetch(`http://localhost:5000/api/${seniorUserId}/health/message/`, {
    method: 'GET', // リクエストのメソッド
    headers: {
      'Content-Type': 'application/json', // リクエストヘッダー
      // 他に必要なヘッダーがあればここに追加
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // レスポンスをJSON形式で解釈
    })
    .then(data => {
      // 成功した場合の処理
      console.log('Success:', data);
      // レスポンスのデータを使ってフロントエンドで必要な処理を行う
    })
    .catch(error => {
      // エラーが発生した場合の処理
      console.error('Error:', error);
    });
  return (

    <div className='form-container'>
      <Header />
      <div className='page-container mt-[50px] items-center justify-center h-screen'>
        <div  >
          <div className="text-black text-[25px]   font-normal font-['Inter']  text-center" >新規登録画面</div>

          {!showConfirmation && (
            <form onSubmit={handleSubmit(onSubmit)} >
              <div className="parent-container">
                <div className="table-container">
                  <table  >
                    <tbody>
                      <tr>
                        <td>助けれ上手の情報</td>
                      </tr>
                      <tr>

                        <td className="border bg-orange-100">
                          <label htmlFor="senior_last_name">姓</label>
                        </td>
                        <td className="border white-background">
                          <input id="senior_last_name" type="text" {...register('senior_last_name', { required: "姓は必須です" })} />
                          {errors.senior_last_name && <p>{errors.senior_last_name.message}</p>}
                        </td>
                      </tr>
                      <tr>

                        <td className="border bg-orange-100">
                          <label htmlFor="senior_first_name">名</label>
                        </td>
                        <td className="border white-background">
                          <input id="senior_first_name" type="text" {...register('senior_first_name', { required: "名は必須です" })} />
                          {errors.senior_first_name && <p>{errors.senior_first_name.message}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td className="border bg-orange-100">
                          <label htmlFor="gender">性別</label>
                        </td>
                        <td className="border white-background">
                          <select id="gender" {...register('gender', { required: "性別は必須です" })}>
                            <option value="male">男性</option>
                            <option value="female">女性</option>
                            <option value="other">その他</option>
                          </select>
                          {errors.gender && <p>{errors.gender.message}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td className="border bg-orange-100">
                          <label htmlFor="birth_date">生年月日</label>
                        </td>
                        <td className="border white-background">
                          <input id="birth_date" type="text" {...register('birth_date', { required: "生年月日は必須です" })} />
                          {errors.birth_date && <p>{errors.birth_date.message}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td className="border bg-orange-100">
                          <label htmlFor="senior_email">メールアドレス</label>
                        </td>
                        <td className="border white-background">
                          <input id="senior_email" type="email" {...register('senior_email', { required: "メールアドレスは必須です" })} />
                          {errors.senior_email && <p>{errors.senior_email.message}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td className="border bg-orange-100">
                          <label htmlFor="senior_tel">電話番号</label>
                        </td>
                        <td className="border white-background">
                          <input id="senior_tel" type="tel" {...register('senior_tel', { required: "電話番号は必須です" })} />
                          {errors.senior_tel && <p>{errors.senior_tel.message}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td className="border bg-orange-100">
                          <label htmlFor="health_status">健康状態</label>
                        </td>
                        <td className="border white-background">
                          <select id="health_status" {...register('health_status', { required: "健康状態は必須です" })}>
                            <option value="good">良い</option>
                            <option value="normal">普通</option>
                            <option value="bad">悪い</option>
                          </select>
                          {errors.health_status && <p>{errors.health_status.message}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td className="border bg-orange-100">
                          <label htmlFor="medication">処方薬の有無</label>
                        </td>
                        <td className="border white-background">
                          <select id="medication" {...register('medication', { required: "処方薬の有無は必須です" })}>
                            <option value="yes">有</option>
                            <option value="no">無</option>
                          </select>
                          {errors.medication && <p>{errors.medication.message}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td className="border bg-orange-100">
                          <label htmlFor="medication_frequency">処方薬有の場合頻度</label>
                        </td>
                        <td className="border white-background">
                          <select id="medication_frequency" {...register('medication_frequency', { required: "頻度は必須です" })}>
                            <option value="once">1日1回</option>
                            <option value="twice">1日2回</option>
                            <option value="thrice">1日3回</option>
                          </select>
                          {errors.medication_frequency && <p>{errors.medication_frequency.message}</p>}
                        </td >
                      </tr>
                      <tr >



                        <td>世話焼きさんの情報</td>
                        <td></td>
                      </tr>


                      <tr>
                        <td className="border bg-blue-100">
                          <label htmlFor="family_last_name">申込者氏名（姓）
                          </label>
                        </td>
                        <td className="border white-background">
                          <input id="family_last_name" type="text" {...register('family_last_name', { required: "姓は必須です" })} />
                          {errors.family_last_name && <p>{errors.family_last_name.message}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td className="border bg-blue-100"><label htmlFor="family_first_name">申込者氏名（名）</label></td>
                        <td className="border white-background">
                          <input id="family_first_name" type="text" {...register('family_first_name', { required: "名は必須です" })} />
                          {errors.family_first_name && <p>{errors.family_first_name.message}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td className="border bg-blue-100">
                          <label htmlFor="relationship_with_senior">高齢者の関係性
                          </label>
                        </td>
                        <td className="border white-background">
                          <select id="relationship_with_senior" {...register('relationship_with_senior', { required: "関係性は必須です" })}>
                            <option value="son">息子</option>
                            <option value="daughter">娘</option>
                            <option value="grandchild">孫</option>
                            <option value="other">その他</option>
                          </select>
                          {errors.relationship_with_senior && <p>{errors.relationship_with_senior.message}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td className="border bg-blue-100"><label htmlFor="family_email">メールアドレス</label></td>
                        <td className="border white-background">
                          <input id="family_email" type="email" {...register('family_email', { required: "メールアドレスは必須です" })} />
                          {errors.family_email && <p>{errors.family_email.message}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td className="border bg-blue-100">
                          <label htmlFor="family_tel">
                            電話番号
                          </label>
                        </td>
                        <td className="border white-background">
                          <input id="family_tel" type="tel" {...register('family_tel', { required: "電話番号は必須です" })} />
                          {errors.family_tel && <p>{errors.family_tel.message}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td className="border bg-blue-100"><label htmlFor="family_password">パスワード</label></td>
                        <td className="border white-background">
                          <input id="family_password" type="password" {...register('family_password', { required: "パスワードは必須です" })} />
                          {errors.family_password && <p>{errors.family_password.message}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td className="border bg-blue-100"><label htmlFor="confirm_family_password">パスワード（確認用）</label></td>
                        <td className="border white-background">
                          <input
                            id="confirm_family_password"
                            type="password"
                            {...register('confirm_family_password', {
                              required: "確認用パスワードは必須です",
                              validate: (value: any) => value === watch('family_password') || "パスワードが一致しません",
                            })}
                          />
                          {errors.confirm_family_password && <p>{errors.confirm_family_password.message}</p>}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
        
              <div className="flex justify-center">
              <button type="submit" className="flex items-center bg-gray-100 border text-black py-1 px-4 rounded-md">
                  <Link href="/register/success" passHref>
                    <div className="flex items-center">
                      <div className="text-3xl" />
                      <div className="text-lg font-normal font-['Inter'] ml-2">
                      確認
                      </div>
                    </div>
                  </Link>
                </button>
                </div>
            </form>
          )}

          {showConfirmation && formData && (
            <div>
              <h2>入力内容の確認</h2>
              <div className="parent-container">
                <div className="table-container">
                  <table>
                    <tbody>
                      <tr>
                        <td>助けられ上手の情報</td>
                      </tr>
                      <tr>
                        <td className="border bg-orange-100">姓:</td>
                        <td className="border white-background">{formData.senior_last_name}</td>
                      </tr>
                      <tr>
                        <td className="border bg-orange-100">名:</td>
                        <td className="border white-background">{formData.senior_first_name}</td>
                      </tr>
                      <tr>
                        <td className="border bg-orange-100">性別:</td>
                        <td className="border white-background">{formData.gender}</td>
                      </tr>
                      <tr>
                        <td className="border bg-orange-100">生年月日:</td>
                        <td className="border white-background">{formData.birth_date}</td>
                      </tr>
                      <tr>
                        <td className="border bg-orange-100">メールアドレス:</td>
                        <td className="border white-background">{formData.senior_email}</td>
                      </tr>
                      <tr>
                        <td className="border bg-orange-100">電話番号:</td>
                        <td className="border white-background">{formData.senior_tel}</td>
                      </tr>
                      <tr>
                        <td className="border bg-orange-100">健康状態:</td>
                        <td className="border white-background">{formData.health_status}</td>
                      </tr>
                      <tr>
                        <td className="border bg-orange-100">処方薬の有無:</td>
                        <td className="border white-background">{formData.medication}</td>
                      </tr>
                      {formData.medication === 'yes' && (
                        <tr>
                          <td className="border bg-orange-100">処方薬有の場合頻度:</td>
                          <td className="border white-background">{formData.medication_frequency}</td>
                        </tr>
                      )}


                      <tr>
                        <td>世話焼きさんの情報</td>
                      </tr>
                      {/* 申込者情報の確認項目 */}
                      <tr>
                        <td className="border bg-blue-100">申込者氏名（姓）:</td>
                        <td className="border white-background">{formData.family_last_name}</td>
                      </tr>
                      <tr>
                        <td className="border bg-blue-100">申込者氏名（名）:</td>
                        <td className="border white-background">{formData.family_first_name}</td>
                      </tr>
                      <tr>
                        <td className="border bg-blue-100">高齢者の関係性:</td>
                        <td className="border white-background">{formData.relationship_with_senior}</td>
                      </tr>
                      <tr>
                        <td className="border bg-blue-100">メールアドレス:</td>
                        <td className="border white-background">{formData.family_email}</td>
                      </tr>
                      <tr>
                        <td className="border bg-blue-100">電話番号:</td>
                        <td className="border white-background">{formData.family_tel}</td>
                      </tr>
                      <tr>
                        <td className="border bg-blue-100">パスワード:</td>
                        <td className="border white-background">{formData.family_password}</td>
                      </tr>
                      <tr>
                        <td className="border bg-blue-100">パスワード（確認用）:</td>
                        <td className="border white-background">{formData.confirm_family_password}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <button onClick={handleConfirm} className="flex items-center  bg-gray-100  border text-black py-1 px-4 rounded-md">
                  <Link href="/register/success" passHref>
                    <div className="flex items-center">
                      <div className="text-3xl" />
                      <div className="text-lg font-normal font-['Inter'] ml-2">
                        申込み
                      </div>
                    </div>
                  </Link>
                </button>

                <button onClick={handleBack} className="flex items-center bg-gray-100 border text-black py-1 px-4 rounded-md">
                  <Link href="/register/success" passHref>
                    <div className="flex items-center">
                      <div className="text-3xl" />
                      <div className="text-lg font-normal font-['Inter'] ml-2">
                        戻る
                      </div>
                    </div>
                  </Link>
                </button>
              </div>


            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
