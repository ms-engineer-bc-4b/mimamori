"use client";

import React, { useRef, useEffect, useState } from 'react';

interface PaintCanvasProps {
  imageUrl: string; // 表示する画像のURL
}

const PaintPainPoint: React.FC<PaintCanvasProps> = ({ imageUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPainting, setIsPainting] = useState<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (canvas && context) {
      const image = new Image();
      image.src = imageUrl;
      image.onload = () => {
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
      };
    }
  }, [imageUrl]);

  const startPaint = (event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const context = canvasRef.current?.getContext('2d');
    if (context) {
      setIsPainting(true);
      addPaint(event);
    }
  };

  const endPaint = () => {
    setIsPainting(false);
  };

  const addPaint = (event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isPainting) return;
    const coordinates = getCoordinates(event);
    const context = canvasRef.current?.getContext('2d');
    if (context) {
      context.fillStyle = 'red';
      context.fillRect(coordinates.x, coordinates.y, 5, 5);
    }
  };

  const getCoordinates = (event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return { x: 0, y: 0 };
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    if ('touches' in event) {
      return {
        x: event.touches[0].clientX - rect.left,
        y: event.touches[0].clientY - rect.top,
      };
    } else {
      return {
        x: (event as React.MouseEvent).clientX - rect.left,
        y: (event as React.MouseEvent).clientY - rect.top,
      };
    }
  };

  return (
    <>
      <div className="mt-16 mb-4 text-2xl font-medium">２．痛みや不快感のある場所を教えてください。</div>
        <div className="text-sm text-gray-700">※画像をタップすると痛みを記録できます</div>
      <div className="w-1/2 mx-auto text-center h-600px">
        <canvas
          ref={canvasRef}
          width={200}
          height={600}
          onMouseDown={startPaint}
          onMouseUp={endPaint}
          onMouseLeave={endPaint}
          onMouseMove={addPaint}
          onTouchStart={(e) => { e.preventDefault(); startPaint(e); }}
          onTouchEnd={endPaint}
          onTouchMove={(e) => { e.preventDefault(); isPainting && addPaint(e); }}
          className='cursor-pointer mx-auto'
        ></canvas>
      </div>
    </>
  );
};

export default PaintPainPoint;
