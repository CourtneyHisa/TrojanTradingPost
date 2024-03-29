import Link from "next/link";
import { useCallback, useState } from "react";
export default function picutureRotation() {
  //Counter for number pictureNumber button
  const [pictureNumber, setpictureNumber] = useState(0);
  const increasepictureNumber = useCallback(() => setpictureNumber(state => state + 1), setpictureNumber)
  const decreasepictureNumber = useCallback(() => setpictureNumber(state => state - 1), setpictureNumber)

  //Need images as list
  const picturesInCarosel = ["https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg", "https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg", 1, 2]

  return (
    <>
      <div className="carousel w-full">
        <div className="carousel-item relative w-full">

          {/* Image currently shown determined by index */}
          <img src={picturesInCarosel[pictureNumber]} className="w-full" />
          {/* Fowards backwards buttons increment index value by 1 */}
          {/* Have button loop to top instead of negative */}
          <div className="absolute flex items-end justify-between w-full h-full ">
            <button onClick={decreasepictureNumber} className="opacity-0 transition-opacity duration-300 transform hover:opacity-100">
              {/* Change photo backward button */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-40 xl:w-80">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
              </svg>
            </button>

            {/* Start Shopping button */}
            <div className="relative align-bottom flex justify-end">
              <Link href="/product" className="bg-yellow-900 border-4 border-yellow-400 text-white mb-16 items-center justify-center flex rounded-lg p-6 font-bold h-24 text-3xl xl:text-4xl">Start Shopping!</Link>
            </div>

            {/* Change photo foward button */}
            <button onClick={increasepictureNumber} className=" opacity-0 transition-opacity duration-300 transform hover:opacity-100 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-40 xl:w-80">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </div>
          {/* Buttons to go to specific photo */}
          <div className="absolute bottom-2 flex justify-center w-full gap-2">
              {
                picturesInCarosel.map(function (data, idx) {
                  return (
                    // Number shown on button for photo determined by photo index in list
                    <button onClick={() => setpictureNumber(() => { return idx; })} className={`btn btn-xs w-1/${picturesInCarosel.length + 1} bg-blue-500 hover:bg-white`}></button>
                  )
                }
                )
              }
            </div>
        </div>
      </div>
    </>
  )
}