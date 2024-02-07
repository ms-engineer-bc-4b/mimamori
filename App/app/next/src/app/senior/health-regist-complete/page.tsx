import Header from '@/components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mt-8">お疲れ様でした。体調の記録が完了しました。</h2>
      </div>
    </>
  );}