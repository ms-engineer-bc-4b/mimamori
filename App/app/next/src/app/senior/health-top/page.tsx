import Header from '@/components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mt-16">
        <Link href="/senior/health-regist" passHref>
          <button
            className="
              transition duration-500 ease-in-out 
              bg-blue-700 border-2 border-solid border-blue-700 hover:bg-white
              text-white hover:text-blue-700 font-bold py-4 px-8 rounded text-4xl"
          >
            今日の体調を記録する
          </button>
        </Link>
      </div>
    </>
  );}