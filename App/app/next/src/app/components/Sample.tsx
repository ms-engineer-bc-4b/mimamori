// import { Context } from 'konva/types/Context';
// import { Shape as ShapeType } from 'konva/types/Shape';
// import React from 'react';
// import { Layer, Stage, Shape, Image } from 'react-konva';
// import useImage from 'use-image';

// type Props = {
//   x?: number;
//   y?: number;
//   width?: number;
//   height?: number;
// };

// const BackImage = ( => {
//   const [image] = useImage('/Body.png');
//   return <Image image={image} x={0} y={0} width={500} height={500} />;
// };

// export const ForcusBox: React.FC<Props> = ({ x, y, width, height }) => {
//   return (
//     <Stage width={500} height={500}>
//       <Layer>
//         <BackImage />
//       </Layer>
//       <Layer>
//         <Shape
//           width={500}
//           height={500}
//           fill={'rgba(0,0,0,0.5'}
//           opacity={0.6}
//           sceneFunc={(ctx: Context, shape: ShapeType) => {
//             ctx.beginPath();
//             ctx.moveTo(0, 0);
//             ctx.lineTo(shape.width(), 0);
//             ctx.lineTo(shape.width(), shape.height());
//             ctx.lineTo(0, shape.height());
//             ctx.lineTo(0, 0);
//             ctx.closePath();
//             ctx.fill();
//             ctx.clearRect(120, 50, 250, 250);
//             ctx.fillStrokeShape(shape);
//           }}
//           listening={false}
//         />
//       </Layer>
//     </Stage>
//   );
// };


// import Image from 'react-konva/lib/Image';
import Circle from 'react-konva/lib/Circle';
import React, { useState } from "react";
import { Image, Stage, Layer, Rect } from "react-konva";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Konva from 'konva';

const App = () => {
  const [image, setImage] = useState(null);

  const handleImageLoad = (e) => {
    setImage(e.target);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={(e) => handleImageLoad(e)} />
      {image && (
        <Konva.Stage width={window.innerWidth} height={window.innerHeight}>
          <Konva.Layer>
            <Konva.Image
              x={0}
              y={0}
              width={image.width}
              height={image.height}
              src={image.src}
            />
            <Konva.Circle
              x={image.width / 2}
              y={image.height / 2}
              radius={50}
              fill="red"
            />
          </Konva.Layer>
        </Konva.Stage>
      )}
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
