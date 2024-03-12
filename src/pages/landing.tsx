import Link from "next/link";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

import PictureRotation from "~/components/pictureRotation"
import ItemCard from "~/components/ItemCard";
export default function Landing() {
    return (
        <>
            <Navbar />
            <div className="bg-cream1 font-mhs">
                <PictureRotation />
                <div className="text-2xl md:px-16 xl:px-24 xl:text-3xl pb-8">
                    <div className="grid grid-cols-2 md:mt-8 xl:mt-16">
                        <div className="md:mr-4 xl:mr-20 md:p-6 border-8 border-brown2 bg-tan2 text-beige1 w-fill rounded-lg">
                            {/* Trojan Trading Post About */}
                            <h2 className="font-bold underline text-2xl xl:text-4xl pb-2">What is the Trojan Trading Post?</h2>
                            <p className="">The Trojan Trading Post, or TTP for short, is a student-led pop-up shop that features different products created by students within the various Career and Technical Education pathways. We aim to foster Mililani school spirit and pride
                            </p>
                        </div>
                        <div className="md:ml-4 xl:ml-20 md:p-6 border-8 border-brown2 bg-tan2 text-beige1 w-fill rounded-lg">
                            <div>
                                {/* Location */}
                                <h2 className="font-bold underline text-2xl xl:text-4xl pb-2">Location</h2>
                                <p className="pb-4">95-1248 Meheula Pkwy, Mililani Town, Hawaii</p>
                                {/* Opening Duration */}
                                <h2 className="font-bold underline text-2xl xl:text-4xl pt-2 pb-2">Open from</h2>
                                <p className="pb-2">
                                    November 17 - December 16 <br />
                                    Friday:3PM-8PM <br />
                                    Saturday:10AM-8PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pb-8'>
                    <h1 className="text-center text-4xl font-bold text-brown2 pt-6 pb-4">Popular Items!</h1>
                    <ItemCard />
                </div>
            </div>
            <Footer />
        </>
    )
}
