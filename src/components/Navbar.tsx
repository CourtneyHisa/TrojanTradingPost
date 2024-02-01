<<<<<<< HEAD
export default function Navbar() {

    // this state is used for autocomplete.  
    return (
        <nav>
            <div className="h-24 w-full bg-gray-500 grid grid-cols-3 gap-4 content-start p-4">
                <div>
                    <img src="https://3.files.edl.io/255c/19/08/06/232654-5f3e38ef-673d-4738-9d87-6936eca6877e.jpg" className="w-12"/>
                </div>
                <div>
                    <h1 className="text-center">Trojan Trading Post</h1>
                </div>
                <div>
                    <div className="text-right"><a href="/">Sign In</a></div>
                </div>   
                
            </div>

          
        </nav>
      );
    };
=======
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className="navbar flex h-24 w-screen bg-yel1 border-b-4 border-yellow-400">
                <div className="navbar-start pl-40">
                    <div className="btn btn-ghost h-14 w-28 bg-gray-200">
                        LOGO
                    </div>
                </div>
                <div className="navbar-center">
                    <h1 className="font-mhs text-4.5xl text-yellow-900 font-bold">TROJAN TRADING POST</h1>
                </div>
                <div className="navbar-end flex pr-40">
                    <button className="btn-ghost rounded-lg p-1 mx-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.75"
                            stroke="currentColor"
                            className="w-10 h-10"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </button>
                    <button className="btn-ghost rounded-lg p-1 mx-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.75"
                            stroke="currentColor"
                            className="w-10 h-10"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                        </svg>
                    </button>
                    <button className="btn-ghost rounded-lg p-1 mx-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.75"
                            stroke="currentColor"
                            className="w-10 h-10"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>

                    </button>
                </div>
            </div>
        </>
    )
}
>>>>>>> 35f39a479d5dbce2e6f3f41082402b10916f75c2
