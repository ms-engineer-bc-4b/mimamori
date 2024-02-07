"use client";

import React, { useState } from 'react';

const AmountEaten = () => {
  const [value, setValue] = useState<number>(1); // `value` の型を `number` に指定
  const statuses: string[] = ['食欲不振', '普通', '完食'];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value, 10));
  };
  return (
    <>
      <div className="flex flex-col items-center space-y-4">
        <label htmlFor="health-status" className="text-2xl font-medium">５．昨晩の食事量について教えてください。</label>
        <div className="w-full max-w-xs">
          食欲不振&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;普通&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;完食
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
  )
};

export default AmountEaten;