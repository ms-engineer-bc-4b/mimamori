import Header from '@/components/Header';
import HealthForm from '@/components/HealthForm';

export default function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="">
        <h2 className="text-3xl font-bold text-center mt-8">今日の体調を記録しましょう</h2>
      </div>
      <div className="mt-16">
        <HealthForm />
      </div>
    </>
  );}