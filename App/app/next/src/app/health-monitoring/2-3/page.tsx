// TODO: デモ用に固定値のフォルダパスにしています。後日修正必要。

import Header from '@/components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mt-16">
        <h2 className="text-xl">健康状態を確認する</h2>
        <div className="mt-6">
          体調: 良い
        </div>
        <div className="mt-6">
          調子の悪い箇所: <img src="/body_pain.png" alt='体の中で不調な個所' className="mx-auto"></img>
        </div>
        <div className="mt-6">
          薬は飲んだか: 飲んだ
        </div>
        <div className="mt-6">
          昨晩の食事: <img src="/meal.png" alt='昨晩の食事'  className="mx-auto"></img>
        </div>
        <div className="mt-6">
          食事量: 完食
        </div>
        <div className="mt-6">
          体調メモ: 頭痛があったが、食事はしっかりとれた。
        </div>
      </div>
    </>
  );}