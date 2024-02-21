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
            <div className="absolute flex left-5 right-5 ">
              <button onClick={decreasepictureNumber} className="w-full h-full bg-red-200">
                {/* Change backward button with picture */}
                backward
              </button>
              <button onClick={increasepictureNumber} className="w-full h-full bg-blue-200">
                {/* Change foward button with picture */}
                foward
              </button>
            </div>
            <div className="absolute left-5 right-5 bottom-2">
              {/* Buttons to go to specific photo */}
              <div className="flex justify-center w-full gap-2">
                {
                  picturesInCarosel.map(function (data, idx) {
                    return (
                      // Number shown on button for photo determined by photo index in list
                      <button onClick={() => setpictureNumber(() => { return idx; })} className={`btn btn-xs w-1/${picturesInCarosel.length} bg-blue-500`}></button>
                    )
                  }
                  )
                }
              </div>
            </div>
          </div>
        </div>
    </>
  )
}