import Footer from "../Footer";
import ItemCard from "../ItemCard";
import Navbar from "../Navbar";
import PictureRotation from "../pictureRotation";

export default function Home() {

    const information = {
        about: "The Trojan Trading Post, or TTP for short, is a student-led pop-up shop that features different products created by students within the various Career and Technical Education pathways. We aim to foster Mililani school spirit and pride",
        location: "95-1248 Meheula Pkwy, Mililani Town, Hawaii",
        shopTime: {date: ["November 17", "December 16"], dayTime: { day: ["Friday", "Saturday"], time: ["3PM", "8PM"] }}
    }

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
                            <p className="">{information.about}</p>
                        </div>
                        <div className="md:ml-4 xl:ml-20 md:p-6 border-8 border-brown2 bg-tan2 text-beige1 w-fill rounded-lg">
                            <div>
                                {/* Location */}
                                <h2 className="font-bold underline text-2xl xl:text-4xl pb-2">Location</h2>
                                <p className="pb-4">{information.location}</p>
                                {/* Opening Duration */}
                                <h2 className="font-bold underline text-2xl xl:text-4xl pt-2 pb-2">Open from</h2>
                                <p className="pb-2">
                                    {information.shopTime.date[1]} - {information.shopTime.date[2]} <br />
                                    Friday:3PM-8PM <br />
                                    Saturday:10AM-8PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}