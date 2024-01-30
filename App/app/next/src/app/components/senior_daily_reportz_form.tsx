
import { FormEvent } from 'react'
 
export default function DailyReportForm() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  }
 
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  )
}

              {/* 1
              <div className="w-[123px] h-[17px] left-[228px] top-[262px] absolute text-black text-[17px] font-normal font-['Inter']">
                1.体調について
              </div>
                <div className="w-[294px] h-9 left-[575px] top-[254px] absolute">
                {/* いい *./}
                <div className="w-[98px] h-9 left-0 top-0 absolute  bg-white border border-black">
                  </div>
                  <div className="left-[32px] top-[8px] 
                    absolute text-black text-[17px] font-normal font-['Inter']">
                    良い
                  </div>
                  {/* 普通 *./}
                  <div className="w-[98px] h-9 left-[98px] top-0 absolute bg-white border border-black">
                  </div>
                  <div className="left-[126px] top-[8px] 
                    absolute text-black text-[17px] font-normal font-['Inter']">
                    普通
                  </div>
                  {/* 悪い *./}
                  <div className="w-[98px] h-9 left-[196px] top-0 absolute bg-white border border-black">
                  </div>
                  <div className="left-[228px] top-[8px] 
                    absolute text-black text-[17px] font-normal font-['Inter']">
                    悪い
                  </div>
                </div>

                {/* 2 *./}
              <div className="w-[152px] h-[17px] left-[228px] top-[332px] absolute text-black text-[17px] font-normal font-['Inter']">
                2.調子の悪い箇所
              </div>
                {/* image *./}
                  <img className="w-[170px] h-[521px] left-[656px] top-[334px] 
                    absolute shadow border border-black" src="https://via.placeholder.com/170x521" />
                  {/* タップしたimage *./}
                  {/* <div className="w-10 h-[29px] left-[698px] top-[334px] absolute bg-red-600 
                  rounded-full border border-red-600">
                  </div> *./}
              
              {/* 3 *./}
              <div className="w-[152px] h-[17px] left-[228px] top-[906px] 
                absolute text-black text-[17px] font-normal font-['Inter']">
                3.薬は飲みましたか
              </div>
              <div className="w-[195px] h-9 left-[627px] top-[899px] absolute">
                  <div className="w-[98px] h-9 left-0 top-0 absolute bg-white border border-black"></div>
                  <div className="w-[98px] h-9 left-[97px] top-0 absolute bg-white border border-black"></div>
                  <div className="left-[19px] top-[8px] absolute text-black text-[17px] font-normal font-['Inter']">
                    飲んだ</div>
                  <div className="left-[103px] top-[8px] absolute text-black text-[17px] font-normal font-['Inter']">
                    飲んでない</div>
              </div>
              

              {/* 4 *./}
              <div className="w-[333px] h-[17px] left-[228px] top-[986px] 
                absolute text-black text-[17px] font-normal font-['Inter']">
                4.昨日の夕飯の写真を登録してください
              </div>
              {/* イメージアップロードのコーディング必要 Yet*./}
              <div className="left-[103px] top-[8px] absolute text-black text-[17px] font-normal font-['Inter']">
                    画像をアップロードする</div>


              {/* 5 *./}
              <div className="w-[333px] h-[17px] left-[231px] top-[1070px] 
                absolute text-black text-[17px] font-normal font-['Inter']">
                5.昨日の食欲はどうでしたか
              </div>
              <div className="w-[294px] h-9 left-[634px] top-[1079px] absolute">
                    <div className="w-[98px] h-9 left-0 top-0 absolute bg-white border border-black">
                    </div>

                    <div className="w-[98px] h-9 left-[196px] top-0 absolute bg-white border border-black">
                    </div>
                    <div className="w-[98px] h-9 left-[98px] top-0 absolute bg-white border border-black">
                    </div>
                    <div className="left-[32px] top-[8px] 
                      absolute text-black text-[17px] font-normal font-['Inter']">
                      完食
                    </div>
                    <div className="left-[126px] top-[8px] 
                      absolute text-black text-[17px] font-normal font-['Inter']">
                      半分
                    </div>
                    <div className="left-[211px] top-[8px] 
                      absolute text-black text-[17px] font-normal font-['Inter']">
                      半分以下
                    </div>
                </div>


              {/* 6 *./}
              <div className="w-[333px] h-[17px] left-[231px] top-[1155px] 
                absolute text-black text-[17px] font-normal font-['Inter']">
                6.音声で体調を教えてください
              </div>
              <div className="w-[1100px] h-px left-[77px] top-[101px] 
                absolute bg-zinc-300 rounded-[5px]">
              </div>
              <div className="w-[294px] h-[89px] left-[634px] top-[1166px] absolute">
                  {/* <div className="w-[294px] h-[89px] left-0 top-0 
                    absolute bg-white border border-black">
                  </div> *./}
                  {/* Wisperの反映どうすればいいか確認 Yet */}
                  {/* <div className="w-[294px] h-[89px] left-0 top-0 
                    absolute text-black text-[17px] font-normal font-['Inter']">
                      音声登録する<br/>
                      
                  </div>
              </div> 
              */} 