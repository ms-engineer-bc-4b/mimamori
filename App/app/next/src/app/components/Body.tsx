import React, { useState } from 'react';
import { Image } from 'react-konva';
import SelectedPart from './SelectedPart';
import Konva from "konva";
import { Stage, Layer, Rect } from "react-konva";

const Body: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState('');

  const handleImageClick = (e: React.MouseEvent) => {
    const { target } = e;
    if (target instanceof Image) {
      const partName = target.attrs.name;
      setSelectedPart(partName);
    }
  };

  return (
    <div>
      <Image
        image={require('../components/Body.png')}
        onClick={handleImageClick}
        name="body" // 画像全体の名前
        width={500} // 画像の幅
        height={500} // 画像の高さ
      />
      {selectedPart && <SelectedPart part={selectedPart} />}
    </div>
  );
};

export default Body;
