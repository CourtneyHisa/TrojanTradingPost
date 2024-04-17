import Link from "next/link";
import ShoppingCart from "~/components/shoppingCart"

export default function Navbar() {
    return (
        <>
            <div className="navbar flex h-24 w-screen bg-gray-300 border-b-4 border-gray-400 fixed top-0 z-10">
                <div className="navbar-start pl-40 h-24 ">
                    <Link href="/landing" className="btn-ghost my-auto h-14 ">
                        <img src="TTPlogo.png" className="h-14">
                        </img>
                    </Link>
                </div>
                <div className="navbar-center">
                    <h1 className="font-mhs text-4.5xl text-brown1 font-bold">TROJAN TRADING POST</h1>
                </div>
                <div className="navbar-end flex pr-40">
                    <button className="btn-ghost rounded-lg p-1 mx-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.75"
                            stroke="currentColor"
                            className="w-10 h-10"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </button>
                    <button className="btn-ghost rounded-lg p-1 mx-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.75"
                            stroke="currentColor"
                            className="w-10 h-10"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                        </svg>
                    </button>
                    
                        <ShoppingCart />
                    
                </div>
            </div>
        </>
    )
}