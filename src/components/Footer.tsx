import Link from "next/link";
import Landing from "~/pages/landing";
import ScrollToTop from "react-scroll-to-top";

export default function Footer() {
    return (
        <div>
            <footer className="flex justify-around font-mhs relative footer py-10 bg-gray-300 object-bottom z-1">
                <aside className="">
                    <Link href="https://www.mililanihs.org/" target="_blank">
                        <img
                            className="h-40"
                            src="https://3.files.edl.io/bfff/23/05/16/225033-b3b23fd8-00c4-4a58-8224-6885b43e3d59.png"
                        />
                    </Link>
                </aside>

                <nav className="md:text-lg">
                    <h6 className="footer-title md:text-xl">Mililani High School</h6>
                    <a className="">95-1200 Meheula Parkway,</a>
                    <a className="">Mililani, HI 96789</a>
                    <a className="">Phone: (808) 307-4200</a>
                    <a className="">Fax: (808) 627-7375 </a>
                </nav>
                <nav className="md:text-lg">
                    <h6 className="footer-title md:text-xl">Company</h6>
                    {/* <Link to={{ pathname: "https://sites.google.com/k12.hi.us/mhs-cte/the-trojan-trading-post" }} target="_blank" /> */}
                    <a className="link link-hover" href="https://sites.google.com/k12.hi.us/mhs-cte/the-trojan-trading-post">About Us</a>
                    <div className="link link-hover" onClick={() => {window.location.href ='mailto:Janise.Kim@k12.hi.us';}}>Contact</div>
                </nav>
                <nav className="md:text-lg mr-4 md:mr-8">
                    <h6 className="footer-title md:text-xl">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        {/* needs links for insta, facebook, etc. */}
                        <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.instagram.com/thetrojantradingpost/%3Flocale%3Dus&ved=2ahUKEwiuv_vtsO2FAxUJDjQIHXBVBmkQFnoECBkQAQ&usg=AOvVaw23Gs2a4UekWrG7iyKqhtZ5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg></a>
                        <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.facebook.com/TheTrojanTradingPost/%3Flocale%3Dcy_GB&ved=2ahUKEwjzv-2Bse2FAxXrHjQIHVOnBY4QFnoECBkQAQ&usg=AOvVaw1w5P-UZ5mcrjH5Lr8EbyHb"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </nav>
            </footer>
        </div>
    )
}