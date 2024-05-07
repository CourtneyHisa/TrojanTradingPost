import { useRef, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import Home from '~/components/AdminPages/Home';
import Products from '~/components/AdminPages/Products';
import Users from '~/components/AdminPages/Users';
import Categories from '~/components/AdminPages/Categories';
import Edit from '~/components/AdminPages/Edit';

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
            // use a switch
            root.render(
                selectedMenuItem === 'home' ? <Home /> :
                    selectedMenuItem === 'products' ? <Products /> :
                        selectedMenuItem === 'users' ? <Users /> :
                            selectedMenuItem === 'catagories' ? <Categories /> :
                                selectedMenuItem === 'edit' ? <Edit/> : null
            );
        } else {
            main?.innerHTML == ''; // Clear the main div if no menu item is selected
        }
    }, [selectedMenuItem]);

    return (

        <>
            <div className="navbar bg-cream1 border-b-4 border-brown1 top-0 px-24">
                <ul className="text-2xl text-brown2 lg:text-4xl menu menu-horizontal w-full rounded-box justify-between">
                    <li id='home' onClick={switchPage}><a>Home</a></li>
                    <li id='products' onClick={switchPage}><a>Products</a></li>
                    <li id='users' onClick={switchPage}><a>Users</a></li>
                    <li id='catagories' onClick={switchPage}><a>Catagories</a></li>
                    <li id='edit' onClick={switchPage}><a>Edit</a></li>
                </ul>
            </div>
            <div id="main" ref={mainRef} className="my-8">
                <Home />
            </div>
        </>
    )
}
