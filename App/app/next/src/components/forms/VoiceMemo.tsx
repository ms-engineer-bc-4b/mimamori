"use client";

import React, { useState } from "react";
import VoiceToText from "../VoiceToText";

const VoiceMemo = () => {
  const [memo, setMemo] = useState("");

  return (
    <>    
      <div>
        <label htmlFor="health-status" className="text-2xl font-medium">６．今の体調を音声で入力してください</label>
        <VoiceToText setText={setMemo} />
        <div>{memo}</div>
      </div>
    </>
  );
}

export default VoiceMemo;