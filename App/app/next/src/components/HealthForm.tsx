"use client";

import { useState } from "react";

import HealthStatusSlider from "./forms/HealthSlider";
import PaintPainPoint from "./forms/PaintPainPoint";
import DrinkDrug from "./forms/DrinkDrug";
import Meal from "./forms/Meal";
import AmountEaten from "./forms/AmountEaten";
import VoiceMemo from "./forms/VoiceMemo";
import Link from "next/link";

const HealthForm = () => {
  const [step, setStep] = useState(0);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  return (
    <>
      {step === 0 && <HealthStatusSlider />}
      {step === 1 && <PaintPainPoint imageUrl="/body.png" />}
      {step === 2 && <DrinkDrug />}
      {step === 3 && <Meal />}
      {step === 4 && <AmountEaten />}
      {step === 5 && <VoiceMemo />}
      
      {step > 0 && (
        <button
          onClick={prevStep}
          className="
            transition duration-500 ease-in-out 
            bg-blue-700 border-2 border-solid border-blue-700 hover:bg-white
            text-white hover:text-blue-700 font-bold py-2 px-4 mx-2 mt-4 rounded">
          戻る
        </button>
      )}
      {step < 5 && (
        <button
        onClick={nextStep}
          className="
            transition duration-500 ease-in-out 
            bg-blue-700 border-2 border-solid border-blue-700 hover:bg-white
            text-white hover:text-blue-700 font-bold py-2 px-4 mx-2 mt-4 rounded">
        進む
      </button>
      )}
      {step === 5 && (
        <Link href="/senior/health-regist-complete" passHref>
          <button
            className="
              transition duration-500 ease-in-out 
              bg-blue-700 border-2 border-solid border-blue-700 hover:bg-white
              text-white hover:text-blue-700 font-bold py-2 px-4 mx-2 mt-4 rounded">
            健康情報を登録する
          </button>
        </Link>
      )}
    </>
  )
}

export default HealthForm;

