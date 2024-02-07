"use client";

import React, { useState } from 'react';

const Meal: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target?.result ?? null);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="text-2xl font-medium mr-4">４．昨晩の食事の写真を登録してください</div>
        <div className="flex flex-col items-center justify-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-violet-50 file:text-violet-700
                      hover:file:bg-violet-100"
          />
          {imageSrc && (
            <img
              src={imageSrc as string}
              alt="Uploaded"
              className="mt-4 rounded shadow-lg max-w-xs max-h-64"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Meal;
