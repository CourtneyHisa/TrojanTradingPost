import { useCallback, useState } from "react";
export default function picutureRotation() {
  //Counter for number pictureNumber button
  const [pictureNumber, setpictureNumber] = useState(0);
  const increasepictureNumber = useCallback(() => setpictureNumber(state => state + 1), setpictureNumber)
  const decreasepictureNumber = useCallback(() => setpictureNumber(state => state - 1), setpictureNumber)

  //Need images as list
  const picturesInCarosel = ["https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg", "https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"]

  return (
    <>
      <div className="relative">
        <div className="carousel w-full">
          <div className="carousel-item relative w-full">
            {/* Image currently shown determined by index */}
            <img src={picturesInCarosel[pictureNumber]} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            </div>
          </div>
        </div>
        {/* Buttons to go to specific photo */}
        <div className="flex justify-center w-full py-2 gap-2">
          {
            picturesInCarosel.map(function (data, idx) {
              return (
                // Number shown on button for photo determined by photo index in list
                <button onClick={() => setpictureNumber(() => { return idx; })} className="btn btn-xs">{idx}</button>
              )
            }
            )
          }

        </div>
        {/* Fowards backwards buttons increment index value by 1 */}
        {/* Have button loop to top instead of negative */}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={decreasepictureNumber} className="">
             {/* Change backward button with picture */}
            backward
          </button>
          <button onClick={increasepictureNumber} className="">
             {/* Change foward button with picture */}
            foward
          </button>
        </div>
      </div>
    </>
  )
}