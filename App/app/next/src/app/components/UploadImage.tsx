

import { useEffect, useState } from "react";

interface ImageObj {
  target: {
    result: string;
  };
}

function uploadImage(obj: ImageObj) {
  const [key, setKey] = useState(0);
  const [formData, setFormData] = useState(new FormData());

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

      // アップロード処理
      formData.append("image", obj.target.files[0]);
      const options = {
        method: "POST",
        body: formData,
      };

      fetch("/upload", options).then((response) => {
        if (response.ok) {
          console.log("アップロード成功");
        } else {
          console.log("アップロード失敗");
        }
      });
    };
  }, [obj]);

}
export default uploadImage;
