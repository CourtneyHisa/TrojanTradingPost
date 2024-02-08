import { useRef, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Products from "~/components/adminPanel/Products";
import Home from "~/components/adminPanel/Home";
import Users from "~/components/adminPanel/User";

export default function AdminPage() {
    const mainRef = useRef<HTMLDivElement>(null);
    const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);

    function switchPage(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
        const target = event.currentTarget;
        setSelectedMenuItem(target.id);
    }

    useEffect(() => {
        const main = mainRef.current;
        if (main && selectedMenuItem) {
            const root = createRoot(main)
            root.render(
                selectedMenuItem === 'home' ? <Home /> :
                selectedMenuItem === 'products' ? <Products /> :
                selectedMenuItem === 'users' ? <Users /> :
                null
            );
        } else {
            main?.innerHTML == ''; // Clear the main div if no menu item is selected
        }
    }, [selectedMenuItem]);

    return (
        <>
            <div>
                <h2>Admin Page</h2>
            </div>
            <div id="main" ref={mainRef}>
                <Home/>
            </div>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
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
                    </ul>
                </div>
            </div>
        </>
    )
}