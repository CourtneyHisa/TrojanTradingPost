import PictureRotation from "~/components/pictureRotation"
export default function Landing() {
    return (
        <>
            {/* Picture Carosel */}
            <PictureRotation></PictureRotation>
            
            <div className="grid grid-cols-2">
                <div className="col-span-2 text-center">
                    {/* Heading */}
                <h1 className="">Welcome to the Trojan Trading Post!</h1>
                    {/* Shopping button */}
                <button>Start Shopping!</button>
                </div>

                <div>
                        {/* Trojan Trading Post About */}
                    <h2 className="text-center">What is the Trojan Trading Post?</h2>
                    <p>The Trojan Trading Post, or TTP for short, is a student-led pop-up shop that features different products created by students within the various Career and Technical Education pathways. We aim to foster Mililani school spirit and pride
                    </p>
                </div>
                <div>
                    <div>
                            {/* Location */}
                        <h2 className="text-center">Location</h2>
                        <p>95-1248 Meheula Pkwy, Mililani Town, Hawaii
                        </p>
                    </div>
                    <div>
                            {/* Opening Duration */}
                        <h2 className="text-center">Open from</h2>
                        <p>
                            November 17 - December 16
                        </p>
                    </div>

                    <div>
                            {/* Store Hours */}
                        <h2 className="text-center">Store Hours</h2>
                        <p>Friday: 3PM-8PM
                            Saturday: 10AM-8PM
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}
