import { useRef, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Products from "~/components/adminPanel/Products";
import Home from "~/components/adminPanel/Home";
import Users from "~/components/adminPanel/User";
import Catagories from '~/components/adminPanel/Catagories';

export default function AdminPage() {
    const mainRef = useRef<HTMLDivElement>(null);
    const my_drawer = useRef<HTMLInputElement>(null);
    const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);

    function switchPage(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
        const target = event.currentTarget;
        setSelectedMenuItem(target.id);
        if (my_drawer.current) {
            if (my_drawer.current.checked === true) {
                my_drawer.current.checked = false;
            } else {
                const err = 'There seems to be a my-drawer error'
                console.error(err)
            }
        }
    }

    useEffect(() => {
        const main = mainRef.current;
        if (main && selectedMenuItem) {
            const root = createRoot(main)
            root.render(
                selectedMenuItem === 'home' ? <Home /> :
                    selectedMenuItem === 'products' ? <Products /> :
                        selectedMenuItem === 'users' ? <Users /> :
                            selectedMenuItem === 'catagories' ? <Catagories /> :
                                null
            );
        } else {
            main?.innerHTML == ''; // Clear the main div if no menu item is selected
        }
    }, [selectedMenuItem]);

    return (

        <>
            {/* <label className="btn btn-circle swap swap-rotate">

                <input type="checkbox" />
                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

            </label> */}
            <div>
                <div>
                    <h2>Admin Page</h2>
                </div>
                <div>
                    <div id="main" ref={mainRef}>
                        <Home />
                    </div>
                </div>
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" ref={my_drawer} />
                    <div className="drawer-content">
                        {/* <!-- Page content here --> */}
                        <label htmlFor="my-drawer" className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* <!-- Sidebar content here --> */}
                            <li id='home' onClick={switchPage}><a>Home</a></li>
                            <li id='products' onClick={switchPage}><a>Products</a></li>
                            <li id='users' onClick={switchPage}><a>Users</a></li>
                            <li id='catagories' onClick={switchPage}><a>Catagories</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
