"use client";
import { useState } from "react"
import VoiceToText from "@/components/VoiceToText"


const Home = () => {
  const [text, setText] = useState<string>("")

  return (
    <div>
      <h1>健康状態を入力するサンプルページ</h1>

      <VoiceToText setText={setText}/>
      <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>

    </div>
  )
}

export default Home;