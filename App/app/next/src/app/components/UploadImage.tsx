
// import { useEffect, useState } from "react"
// const key=0;
// function uploadImage(obj) {
// const fileReader = new FileReader();
//         fileReader.onload = (function (e) {
//             var field = document.getElementById("imgPreviewField");
//             var figure = document.createElement("figure");
//             var rmBtn = document.createElement("input");
//             var img = new Image();
//             img.src = e.target.result;
//             rmBtn.type = "button";
//             rmBtn.name = key;
//             rmBtn.value = "削除";
//             rmBtn.onclick = (function () {
//                 var element = document.getElementById("img-" + String(rmBtn.name)).remove();
//             });
//             figure.setAttribute("id", "img-" + key);
//             figure.appendChild(img);
//             figure.appendChild(rmBtn)
//             field.appendChild(figure);
//             key++;
//           });      
//   }
//   export default uploadImage;


import { useEffect, useState } from "react";

interface ImageObj {
  target: {
    result: string;
  };
}

function uploadImage(obj: ImageObj) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(obj.target.files[0]); // Ensure a file is selected

    fileReader.onload = (e) => {
      const imgPreviewField = document.getElementById("imgPreviewField") as HTMLDivElement;

      const figure = document.createElement("figure");
      const rmBtn = document.createElement("input");
      const img = new Image();

      img.src = e.target.result;
      rmBtn.type = "button";
      rmBtn.value = "削除";
      rmBtn.name = key.toString();
      rmBtn.addEventListener("click", () => {
        const elementToRemove = document.getElementById("img-" + rmBtn.name);
        if (elementToRemove) {
          elementToRemove.remove();
        }
      });

      figure.setAttribute("id", "img-" + key);
      figure.appendChild(img);
      figure.appendChild(rmBtn);
      imgPreviewField.appendChild(figure);

      setKey((prevKey) => prevKey + 1);
    };
  }, [obj]);
}

export default uploadImage;
