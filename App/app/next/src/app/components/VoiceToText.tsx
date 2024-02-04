
import { useEffect, useState } from "react"

type Props = {
  setText: (text: string) => void
}

const VoiceToText = (props: Props) => {

  const [isRecording, setIsRecording] = useState<boolean>(false)
  const [isSpeechAvailable, setIsSpeechAvailable] = useState<boolean>(false)

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      setIsSpeechAvailable(false)
      return
    }
    setIsSpeechAvailable(true)
  }, [])

  const startRecording = () => {
    if (!isSpeechAvailable) return
    setIsRecording(true)
    const recognition = new webkitSpeechRecognition()
    recognition.lang = "ja-JP"
    recognition.continuous = true
    recognition.interimResults = true
    recognition.onresult = (event: any) => {
      let final = ""
      let interim = ""
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          final += event.results[i][0].transcript
        } else {
          interim += event.results[i][0].transcript
        }
      }
      props.setText(final)
    }
    recognition.start()
  }

  const stopRecording = () => {
    setIsRecording(false)
  }



  return (
    <>
      <div className="m-4">録音ステータス: {isRecording ? "録音中" : "停止中"}</div>
      <div>
        <button className="rounded-xl border-2 border-solid border-green-500 p-2 m-2" onClick={startRecording}>録音開始</button>
      </div>
      <div>
        <button className="rounded-xl border-2 border-solid border-green-500 p-2 m-2" onClick={stopRecording}>録音停止</button>
      </div>
    </>
  )
}

export default VoiceToText;