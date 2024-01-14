"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Header from '../components/Header';

interface SeniorUser {
  senior_last_name: string;
  senior_first_name: string;
  gender: string;
  birth_date: string;
  senior_email: string;
  senior_tel: string;
  health_status: string;
  medication: boolean;
  medication_frequency: string;
}

interface familyUser {
  family_last_name: string;
  family_first_name: string;
  relationship_with_senior: string;
  family_email: string;
  family_tel: string;
  family_password: string;
}

const RegisterPage: React.FC = () => {
  const [SeniorUser, setSeniorUser] = useState<SeniorUser>({
    senior_last_name: '',
    senior_first_name: '',
    gender: '',
    birth_date: '',
    senior_email: '',
    senior_tel: '',
    health_status: '',
    medication: false,
    medication_frequency: '',
  });

  const [familyUser, setfamilyUser] = useState<familyUser>({
    family_last_name: '',
    family_first_name: '',
    relationship_with_senior: '',
    family_email: '',
    family_tel: '',
    family_password: '',
  });

  const handleInputChange = (fieldName: string, value: string | boolean, isSeniorUser: boolean = true) => {
    if (isSeniorUser) {
      setSeniorUser({ ...SeniorUser, [fieldName]: value });
    } else {
      setfamilyUser({ ...familyUser, [fieldName]: value });
    }
  };
  //const router = useRouter();
  const onSubmit = async (data: any) => {
    console.log('フォームが送信されました。入力値(高齢者):', SeniorUser);
    console.log('フォームが送信されました。入力値(申込者):', familyUser);

    // Add your asynchronous logic here

    // 確認画面へリダイレクト
    // router.push('/register/confirm');
  };

  return (
    <div>
      <Header />
      <h1>新規登録画面</h1>

      <form onSubmit={onSubmit}>
        <table style={{ borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '5px' }}>高齢者の情報</td>
              <td colSpan={3} style={{ border: '1px solid black', padding: '5px' }}></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '5px' }}>氏名（姓）:</td>
              <td style={{ border: '1px solid black', padding: '5px' }}>
                <input
                  type="text"
                  placeholder="姓"
                  value={SeniorUser.senior_last_name}
                  onChange={(e) => handleInputChange('senior_last_name', e.target.value)}
                />
              </td>
              <td style={{ border: '1px solid black', padding: '5px' }}>氏名（名）:</td>
              <td style={{ border: '1px solid black', padding: '5px' }}>
                <input
                  type="text"
                  placeholder="名"
                  value={SeniorUser.senior_first_name}
                  onChange={(e) => handleInputChange('senior_first_name', e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '5px' }}>性別:</td>
              <td style={{ border: '1px solid black', padding: '5px' }}>
                <select
                  value={SeniorUser.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                >
                  <option value="male">男性</option>
                  <option value="female">女性</option>
                  <option value="other">その他</option>
                </select>
              </td>

              <td style={{ border: '1px solid black', padding: '5px' }}>生年月日:</td>
              <td style={{ border: '1px solid black', padding: '5px' }}>
                <input
                  type="text"
                  value={SeniorUser.birth_date}
                  onChange={(e) => handleInputChange('birth_date', e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '5px' }}>メールアドレス:</td>
              <td style={{ border: '1px solid black', padding: '5px' }}>
                <input
                  type="email"
                  value={SeniorUser.senior_email}
                  onChange={(e) => handleInputChange('senior_email', e.target.value)}
                />
              </td>
              <td style={{ border: '1px solid black', padding: '5px' }}>電話番号:</td>
              <td style={{ border: '1px solid black', padding: '5px' }}>
                <input
                  type="tel"
                  value={SeniorUser.senior_tel}
                  onChange={(e) => handleInputChange('senior_tel', e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '5px' }}>健康状態:</td>
              <td style={{ border: '1px solid black', padding: '5px' }}>
                <select
                  value={SeniorUser.health_status}
                  onChange={(e) => handleInputChange('health_status', e.target.value)}
                >
                  <option value="good">良い</option>
                  <option value="normal">普通</option>
                  <option value="bad">悪い</option>
                </select>
              </td>
              <td style={{ border: '1px solid black', padding: '5px' }}>処方薬の有無:</td>
              <td style={{ border: '1px solid black', padding: '5px' }}>
                <select
                  value={SeniorUser.medication ? 'true' : 'false'}
                  onChange={(e) => handleInputChange('medication', e.target.value === 'true')}
                >
                  <option value="true">有</option>
                  <option value="false">無</option>
                </select>

              </td>
            </tr>
            {SeniorUser.medication && (
              <tr>
                <td style={{ border: '1px solid black', padding: '5px' }}>有の場合頻度:</td>
                <td colSpan={3} style={{ border: '1px solid black', padding: '5px' }}>
                  <select
                    value={SeniorUser.medication_frequency}
                    onChange={(e) => handleInputChange('medication_frequency', e.target.value)}
                  >
                    <option value="once">１日１回</option>
                    <option value="twice">１日２回</option>
                    <option value="thrice">１日３回</option>
                  </select>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {/* Applicant Information */}
        <table style={{ borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '5px' }}>申込者の情報</td>
              <td colSpan={3} style={{ border: '1px solid black', padding: '5px' }}></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '5px' }}>氏名（姓）:</td>
              <td style={{ border: '1px solid black', padding: '5px' }}>
                <input
                  type="text"
                  placeholder="姓"
                  value={familyUser.family_last_name}
                  onChange={(e) => handleInputChange('family_last_name', e.target.value, false)}
                />
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '5px' }}>氏名（名）:</td>
              <td style={{ border: '1px solid black', padding: '5px' }}>
                <input
                  type="text"
                  placeholder="名"
                  value={familyUser.family_first_name}
                  onChange={(e) => handleInputChange('family_first_name', e.target.value, false)}
                />
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '5px' }}>高齢者の関係性:</td>
              <td style={{ border: '1px solid black', padding: '5px' }}>
                <select
                  value={familyUser.relationship_with_senior}
                  onChange={(e) => handleInputChange('relationship_with_senior', e.target.value, false)}
                >
                  <option value="son">息子</option>
                  <option value="daughter">娘</option>
                  <option value="grandchild">孫</option>
                  <option value="other">その他</option>
                </select>
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '5px' }}>メールアドレス:</td>
              <td style={{ border: '1px solid black', padding: '5px' }}>
                <input
                  type="email"
                  placeholder="メールアドレス"
                  value={familyUser.family_email}
                  onChange={(e) => handleInputChange('family_email', e.target.value, false)}
                />
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '5px' }}>電話番号:</td>
              <td style={{ border: '1px solid black', padding: '5px' }}>
                <input
                  type="text"
                  placeholder="メールアドレス"
                  value={familyUser.family_email}
                  onChange={(e) => handleInputChange('family_email', e.target.value, false)}
                  autoComplete="username" // Add this line
                />
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '5px' }}>パスワード:</td>
              <td style={{ border: '1px solid black', padding: '5px' }}>
                <input
                  type="password"
                  placeholder="パスワード"
                  value={familyUser.family_password}
                  onChange={(e) => handleInputChange('family_password', e.target.value, false)}
                  autoComplete="current-password" // Add this line
                />
              </td>
            </tr>
          </tbody>
        </table>

        <button type="submit">確認画面へ</button>
      </form>
    </div >
  );
};


export default RegisterPage;

