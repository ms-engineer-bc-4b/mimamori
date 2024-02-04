import React, { useState } from "react";
import { Image, Stage, Layer, Rect } from "react-konva";
import { VisionClient } from "@google-cloud/vision";

const App: React.FC = () => {
  const [image, setImage] = useState<string>("");
  const [text, setText] = useState<string>("");

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const onTap = (e: React.MouseEvent) => {
    const { x, y } = e.target.attrs;
    const visionClient = new VisionClient();
    const imageToText = async (image: string) => {
      const response = await visionClient.textDetection(image);
      const text = response.textAnnotations[0].description;
      setText(text);
    };
    imageToText(image);
  };

  return (
    <div>
      <input type="file" onChange={onImageChange} />
      <Stage width={600} height={400}>
        <Layer>
          <Image
            image={image}
            x={0}
            y={0}
            width={600}
            height={400}
            onClick={onTap}
          />
          <Rect
            x={x}
            y={y}
            width={100}
            height={100}
            fill="red"
            stroke="black"
            strokeWidth={2}
          />
          <Text text={text} x={10} y={10} />
        </Layer>
      </Stage>
    </div>
  );
};

export default App;
