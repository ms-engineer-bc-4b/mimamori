import React from "react";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      className="bg-zinc-300 rounded-md shadow-md px-4 py-2 text-lg font-bold hover:bg-zinc-400"
      onClick={() => router.back()}
    >
      戻る
    </button>
  );
};
export default BackButton;