"use client";
import React, { useState } from 'react';

const DrinkDrug: React.FC = () => {
  const [isMedicationTaken, setIsMedicationTaken] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsMedicationTaken(event.target.checked);
  };

  return (
    <>
      <div className="flex items-center justify-center p-4">
        <div className="text-2xl font-medium mr-4">３．薬を飲みましたか？</div>
        <label htmlFor="medicationCheckbox" className="flex items-center cursor-pointer">
          <input
            id="medicationCheckbox"
            type="checkbox"
            checked={isMedicationTaken}
            onChange={handleCheckboxChange}
            className="mr-2"
            style={{ width: '24px', height: '24px' }}
          />
        </label>
      </div>
    </>
  );
};

export default DrinkDrug;
