import React from "react";
const SubmitButton = ({ handleSubmit }) => {
  return (
    <button
      className="bg-blue-500 rounded-md shadow-md px-4 py-2 text-lg font-bold hover:bg-blue-600"
      onClick={handleSubmit}
    >
      送信
    </button>
  );
};
export default SubmitButton;