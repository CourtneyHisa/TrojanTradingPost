import { useCallback, useState } from "react";
export default function picutureRotation() {
  //Counter for number pictureNumber button
  const [pictureNumber, setpictureNumber] = useState(0);
  const increasepictureNumber = useCallback(() => setpictureNumber(state => state+1), setpictureNumber)
  const decreasepictureNumber = useCallback(() => setpictureNumber(state => state-1), setpictureNumber)
  
  //Need images as list
  const picturesInCarosel = ["https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg","https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"]

  return (
  <>
  <div className="relative">
  {/* Change so it can take any number of photos by counting button */}
  <div className="carousel w-full">
  <div className="carousel-item relative w-full">
    <img src={picturesInCarosel[pictureNumber]} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    </div>
  </div> 
</div>
{/* <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        <button type="button" className="rounded-full"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div> */}
  <div className="flex justify-center w-full py-2 gap-2">
    {
    picturesInCarosel.map(function(data, idx){
      return (
        <button onClick={() =>setpictureNumber(() => {return idx;})} className="btn btn-xs">{idx}</button>
      )
    }
    )
    }
    
</div>
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  <button onClick={decreasepictureNumber} className="">
    backward
  </button>
  <button onClick={increasepictureNumber} className="">
    foward 
  </button>
</div>
{pictureNumber}
</div>
</>
  )
}

//Carosel exmaple
// <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com --> 
// <div
//   id="carouselExampleControls"
//   class="relative"
//   data-te-carousel-init
//   data-te-ride="carousel">
//   <!--Carousel items-->
//   <div
//     class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
//     <!--First item-->
//     <div
//       class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//       data-te-carousel-item
//       data-te-carousel-active>
//       <img
//         src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
//         class="block w-full"
//         alt="Wild Landscape" />
//     </div>
//     <!--Second item-->
//     <div
//       class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//       data-te-carousel-item>
//       <img
//         src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
//         class="block w-full"
//         alt="Camera" />
//     </div>
//     <!--Third item-->
//     <div
//       class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//       data-te-carousel-item>
//       <img
//         src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
//         class="block w-full"
//         alt="Exotic Fruits" />
//     </div>
//   </div>

//   <!--Carousel controls - prev item-->
//   <button
//     class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//     type="button"
//     data-te-target="#carouselExampleControls"
//     data-te-slide="prev">
    // <span class="inline-block h-8 w-8">
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     fill="none"
    //     viewBox="0 0 24 24"
    //     stroke-width="1.5"
    //     stroke="currentColor"
    //     class="h-6 w-6">
    //     <path
    //       stroke-linecap="round"
    //       stroke-linejoin="round"
    //       d="M15.75 19.5L8.25 12l7.5-7.5" />
    //   </svg>
    // </span>
    // <span
    //   class="!absolute !-m-px !h-px !w-px !overflow-hidden !blackspace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    //   >Previous</span
    // >
//   </button>
//   <!--Carousel controls - next item-->
//   <button
//     class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//     type="button"
//     data-te-target="#carouselExampleControls"
//     data-te-slide="next">
//     <span class="inline-block h-8 w-8">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke-width="1.5"
//         stroke="currentColor"
//         class="h-6 w-6">
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//       </svg>
//     </span>
//     <span
//       class="!absolute !-m-px !h-px !w-px !overflow-hidden !blackspace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
//       >Next</span
//     >
//   </button>
// </div>