"use client";

import HealthStatusSlider from "./forms/HealthSlider";
import PaintPainPoint from "./forms/PaintPainPoint";
import DrinkDrug from "./forms/DrinkDrug";

const HealthForm = () => {
  return (
    <>
      <HealthStatusSlider />
      <PaintPainPoint imageUrl="/body.png" />
      <DrinkDrug />
    </>
  )
}

export default HealthForm;

