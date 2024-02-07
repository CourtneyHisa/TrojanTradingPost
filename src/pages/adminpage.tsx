import Products from "~/components/products"

export default function adminpage() {
    function switchPage(this: HTMLLIElement) {
        console.log(this)
    }

    return (
        <>
            <div>
                <h2>Admin Page</h2>
            </div>
            <Products/>
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
