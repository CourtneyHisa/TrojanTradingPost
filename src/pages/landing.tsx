<<<<<<< HEAD
import PictureRotation from "~/components/pictureRotation"
export default function Landing() {
    return (
        <>
            <div className="text-2xl md:px-16 xl:px-24 xl:text-3xl bg-gray-100">
                <div className="text-center">
                    {/* Heading */}
                    <h1 className="text-yellow-900 p-4 font-bold text-5xl xl:text-8xl">Welcome to the Trojan Trading Post!</h1>
                    {/* Picture Carosel */}
                    <PictureRotation></PictureRotation>
                    {/* Shopping button */}
                    <button className="bg-yellow-900 border-4 border-yellow-400 text-white rounded-lg p-6 font-bold text-3xl xl:text-5xl">Start Shopping!</button>
                </div>

                <div className="grid grid-cols-2 md:mt-8 xl:mt-16">
                    <div className="md:mr-4 xl:mr-24 md:p-6 rounded-lg border-4 border-yellow-400 bg-yellow-900 text-white">
                        {/* Trojan Trading Post About */}
                        <h2 className="font-bold underline text-2xl xl:text-4xl pb-4 text-center">What is the Trojan Trading Post?</h2>
                        <p className="">The Trojan Trading Post, or TTP for short, is a student-led pop-up shop that features different products created by students within the various Career and Technical Education pathways. We aim to foster Mililani school spirit and pride
                        </p>
                    </div>
                    <div className="text-center md:ml-4 md:p-6 rounded-lg border-4 border-yellow-400 bg-yellow-900 text-white">
                        <div>
                            {/* Location */}
                            <h2 className="font-bold underline text-2xl xl:text-4xl pb-4 text-center">Location</h2>
                            <p>95-1248 Meheula Pkwy, Mililani Town, Hawaii
                            </p>
                        </div>
                        <div>
                            {/* Opening Duration */}
                            <h2 className="font-bold underline text-2xl xl:text-4xl pt-2 pb-4 text-center">Open from</h2>
                            <p>
                                November 17 - December 16
                            </p>
                        </div>
                        <div>
                            {/* Store Hours */}
                            <h2 className="font-bold underline text-2xl xl:text-4xl pt-2 pb-4 text-center">Store Hours</h2>
                            <p className="">
                                Friday:3PM-8PM 
                                Saturday:10AM-8PM
                            </p>
                        </div>
                    </div>
                </div>

                {/* More general infomration on Trojan Trading Post */}
                <div className="md:mt-12 md:p-6 border-4 border-yellow-400 bg-yellow-900 text-white">
                    <div>
                        <h3 className="font-bold  text-2xl xl:text-4xl pb-4">Purpose</h3>
                        <p className="md:pl-6 md:pb-2">Friday: 3PM-8PM
                            Saturday: 10AM-8PM
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold  text-2xl xl:text-4xl pt-2 pb-4">What is CTE?</h3>
                        <p className="md:pl-6 md:pb-2">The Career and Technical Education pathways provide students with career and academic skills to support them in their desired career interests.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold  text-2xl xl:text-4xl pt-2 pb-4">How did TTP come about?</h3>
                        <p className="md:pl-6 md:pb-2">TTP was created by 2021's Educational Business CO-OP class. We started with events at Mililani High School, and now with the generous support of the Mililani Town Center, we have expanded to a storefront location
                        </p>
                    </div>

                </div>

            </div>
        </>
    )
}
