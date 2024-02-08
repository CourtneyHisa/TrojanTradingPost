import Navbar from "~/components/Navbar"
import Footer from "~/components/Footer"
import Link from "next/link"
export default function About() {
    return (
        <>
            <Navbar />
            <div className="text-2xl md:p-16 xl:p-24 xl:text-3xl bg-gray-100 font-mhs">
                <div className="text-center">
                    {/* Heading */}
                    <h1 className="mb-16 text-yellow-900 font-bold text-5xl xl:text-8xl">About the Trojan Trading Post</h1>
                </div>

                {/* More general infomration on Trojan Trading Post */}
                <div className="">
                    <div className="columns-2">
                        {/* History of Trojan Trading Post */}
                        <div className="rounded-lg mb-6 overflow-hidden md:p-6 border-4 border-yellow-400 bg-yellow-900 text-white">
                            <h3 className="font-bold text-2xl xl:text-4xl pb-4 ">History</h3>
                            <p className="md:pl-6 md:pb-2">
                                The Trojan Trading Post was established in 2021 by the Educational Business Co-op class, now called Business Work-Based Learning (WBL). It all started with on campus sales, selling products to the students at Mililani High School campus. With the generous support of the Town Center of Mililani, The Trojan Trading Post was able to expand to a storefront location where they open and sell products to the community. We have just successfully finished our third year of our pop-up store and community support has continued to strengthen, so much so that many have been asking for an online store that they could go to to purchase products all year round.
                            </p>
                        </div>
                        {/* Change pictures when database working */}
                        <img className="rounded-lg h-full w-full" src="data:image/jpeg;base64,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" />
                        <img className="rounded-lg h-full w-full" src="data:image/jpeg;base64,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" />
                        {/* Purpose of Trojan Trading Post */}
                        <div className="rounded-lg md:mt-12 md:p-6 border-4 border-yellow-400 bg-yellow-900 text-white">
                            <h3 className="font-bold  text-2xl xl:text-4xl pt-2 pb-4">Purpose</h3>
                            <p className="md:pl-6 md:pb-2">
                                The purpose of the Trojan Trading Post is to give hands-on experience to the students of the Mililani High School CTE Programs. Students are able to use what they learn to create products and share their skills with the community. In addition, all profits made from TTP will go back to Mililani High School’s Career and Technical Education program, athletics programs, and ASMHS program.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}