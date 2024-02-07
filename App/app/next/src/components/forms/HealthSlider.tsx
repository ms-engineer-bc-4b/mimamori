"use client";
import React, { useState } from 'react';

const HealthStatusSlider = () => {
  const [value, setValue] = useState<number>(1); // `value` の型を `number` に指定
  const statuses: string[] = ['悪い', '普通', '良い'];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value, 10));
  };

  return (
    <>
      <div className="flex flex-col items-center space-y-4">
        <label htmlFor="health-status" className="text-2xl font-medium">１．今日の体調を教えてください</label>
        <div className="w-full max-w-xs">
          悪い&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;普通&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;良い
        </div>
        <div className="w-full max-w-xs">
          <input
            id="health-status"
            type="range"
            min="0"
            max="2"
            step="1"
            value={value}
            onChange={handleChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div className="text-sm font-semibold text-gray-700">{statuses[value]}</div>
      </div>
    </>
  );
};

export default HealthStatusSlider;
