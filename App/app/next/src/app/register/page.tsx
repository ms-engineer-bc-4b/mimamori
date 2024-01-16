// Home.tsx
'use client'
import React, { useState } from 'react';
import { useForm, SubmitHandler, useFormContext } from 'react-hook-form';
import Router from 'next/router';
//import { useRouter } from 'next/navigation'


//import { stringify } from 'querystring';
interface QueryParams {
  [key: string]: string | string[] | undefined;
}
interface LoginForm extends QueryParams{
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
  const { register, handleSubmit, formState: { errors },watch } = useForm<LoginForm>({ mode: "onChange" });
  const [formData, setFormData] = useState<LoginForm | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const medicationValue = watch('medication');

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log(data);
    setFormData(data);
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    if (formData) {
      Router.push({
        pathname: '/confirmation',
        query: formData,
      });
    }
  };

  const handleBack = () => {
    setFormData(null);
    setShowConfirmation(false);
  };

  return (
    <div className='form-container'>
      {!showConfirmation && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="senior_last_name">姓</label>
          <input id="senior_last_name" type="text" {...register('senior_last_name', { required: "姓は必須です" })} />
          {errors.senior_last_name && <p>{errors.senior_last_name.message}</p>}

          <label htmlFor="senior_first_name">名</label>
          <input id="senior_first_name" type="text" {...register('senior_first_name', { required: "名は必須です" })} />
          {errors.senior_first_name && <p>{errors.senior_first_name.message}</p>}

          <label htmlFor="gender">性別</label>
          <select id="gender" {...register('gender', { required: "性別は必須です" })}>
            <option value="male">男性</option>
            <option value="female">女性</option>
            <option value="other">その他</option>
          </select>
          {errors.gender && <p>{errors.gender.message}</p>}

          <label htmlFor="birth_date">生年月日</label>
          <input id="birth_date" type="text" {...register('birth_date', { required: "生年月日は必須です" })} />
          {errors.birth_date && <p>{errors.birth_date.message}</p>}

          <label htmlFor="senior_email">メールアドレス</label>
          <input id="senior_email" type="email" {...register('senior_email', { required: "メールアドレスは必須です" })} />
          {errors.senior_email && <p>{errors.senior_email.message}</p>}

          <label htmlFor="senior_tel">電話番号</label>
          <input id="senior_tel" type="tel" {...register('senior_tel', { required: "電話番号は必須です" })} />
          {errors.senior_tel && <p>{errors.senior_tel.message}</p>}

          <label htmlFor="health_status">健康状態</label>
          <select id="health_status" {...register('health_status', { required: "健康状態は必須です" })}>
            <option value="good">良い</option>
            <option value="bad">悪い</option>
            <option value="normal">普通</option>
          </select>
          {errors.health_status && <p>{errors.health_status.message}</p>}

          <label htmlFor="medication">処方薬の有無</label>
          <select id="medication" {...register('medication', { required: "処方薬の有無は必須です" })}>
            <option value="yes">有</option>
            <option value="no">無</option>
          </select>
          {errors.medication && <p>{errors.medication.message}</p>}

         
              <label htmlFor="medication_frequency">処方薬有の場合頻度</label>
              <select id="medication_frequency" {...register('medication_frequency', { required: "頻度は必須です" })}>
                <option value="once">1日1回</option>
                <option value="twice">1日2回</option>
                <option value="thrice">1日3回</option>
              </select>
              {errors.medication_frequency && <p>{errors.medication_frequency.message}</p>}
         {/* 申込者情報の追加項目 */}
         <label htmlFor="family_last_name">申込者氏名（姓）</label>
          <input id="family_last_name" type="text" {...register('family_last_name', { required: "姓は必須です" })} />
          {errors.family_last_name && <p>{errors.family_last_name.message}</p>}

          <label htmlFor="family_first_name">申込者氏名（名）</label>
          <input id="family_first_name" type="text" {...register('family_first_name', { required: "名は必須です" })} />
          {errors.family_first_name && <p>{errors.family_first_name.message}</p>}

          <label htmlFor="relationship_with_senior">高齢者の関係性</label>
          <select id="relationship_with_senior" {...register('relationship_with_senior', { required: "関係性は必須です" })}>
            <option value="son">息子</option>
            <option value="daughter">娘</option>
            <option value="grandchild">孫</option>
            <option value="other">その他</option>
          </select>
          {errors.relationship_with_senior && <p>{errors.relationship_with_senior.message}</p>}

          <label htmlFor="family_email">メールアドレス</label>
          <input id="family_email" type="email" {...register('family_email', { required: "メールアドレスは必須です" })} />
          {errors.family_email && <p>{errors.family_email.message}</p>}

          <label htmlFor="family_tel">電話番号</label>
          <input id="family_tel" type="tel" {...register('family_tel', { required: "電話番号は必須です" })} />
          {errors.family_tel && <p>{errors.family_tel.message}</p>}

          <label htmlFor="family_password">パスワード</label>
          <input id="family_password" type="password" {...register('family_password', { required: "パスワードは必須です" })} />
          {errors.family_password && <p>{errors.family_password.message}</p>}

          <label htmlFor="confirm_family_password">パスワード（確認用）</label>
          <input id="confirm_family_password" type="password" {...register('confirm_family_password', {
            required: "確認用パスワードは必須です",
            validate: (value) => value === watch('family_password') || "パスワードが一致しません",
          })} />
          {errors.confirm_family_password && <p>{errors.confirm_family_password.message}</p>}

          <button type="submit">確認</button>
        </form>
      )}

      {showConfirmation && formData && (
        <div>
          <h2>入力内容の確認</h2>
          <p>姓: {formData.senior_last_name}</p>
          <p>名: {formData.senior_first_name}</p>
          <p>性別: {formData.gender}</p>
          <p>生年月日: {formData.birth_date}</p>
          <p>メールアドレス: {formData.senior_email}</p>
          <p>電話番号: {formData.senior_tel}</p>
          <p>健康状態: {formData.health_status}</p>
          <p>処方薬の有無: {formData.medication}</p>
          {formData.medication === 'yes' && (
            <p>処方薬有の場合頻度: {formData.medication_frequency}</p>
          )}
           {/* 申込者情報の確認項目 */}
           <p>申込者氏名（姓）: {formData.family_last_name}</p>
          <p>申込者氏名（名）: {formData.family_first_name}</p>
          <p>高齢者の関係性: {formData.relationship_with_senior}</p>
          <p>メールアドレス: {formData.family_email}</p>
          <p>電話番号: {formData.family_tel}</p>
          <p>パスワード: {formData.family_password}</p>
          <p>パスワード（確認用）: {formData.confirm_family_password}</p>
          <button onClick={handleConfirm}>送信</button>
          <button onClick={handleBack}>戻る</button>
        </div>
      )}
    </div>
  );
}

export default Home;
