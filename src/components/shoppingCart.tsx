export default function ShoppingCart() {
    const itemImage = "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    const itemName = "Banana"
    const itemPrice = "4.00"
    return (
        <>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><div>
                            <img src={itemImage} className="rounded-xl" />
                            <div>
                                {itemName}
                            </div>
                            <div>
                                {itemPrice}
                            </div>
                        </div></li>
                        <li><a>
                            <img src={itemImage} className="rounded-xl" />
                            <div>
                                {itemName}
                            </div>
                        </a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}