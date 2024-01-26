export default function ShoppingCart() {
    const itemImage = "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    const itemName = "Banana"
    const itemPrice = "4.00"
    return (
        <>
        <div className="w-64 h-64 bg-red-100 relative">
  <div className="absolute inset-0 bg-cover bg-center z-0"></div>
  <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">Dwayne</div>
</div>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Shopping Cart Button*/}
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">
                        Open drawer
                    </label>
                </div>

                {/* Shopping Cart Sidebar */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Shopping Cart Header */}
                        <div>
                            <div className="text-center text-3xl">Shopping Cart Items</div>
                            <div className="divider"></div>
                        </div>
                        {/* Shopping Cart Items */}
                        <li>
                            {/* Shopping Cart Item Layout
                            Image Name Price */}
                            <div className="bg-blue-100 hover:bg-red-300 "> 
                                {/* Item Image */}
                                <img src={itemImage} className="rounded-xl w-32" />
                                <div className="join join-vertical text-2xl text-right">
                                    <div>
                                        {itemName}
                                    </div>
                                    {/* Item Price */}
                                    <div>
                                        ${itemPrice}
                                    </div>
                                    {/* Show Remove text on hover */}
                                    <div className="opacity-0 hover:opacity-100 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">
                                        Remove
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            {/* Shopping Cart Item Layout
                            Image Name Price Remove */}
                            <div className="bg-blue-100 hover:bg-red-300">
                                {/* Item Image */}
                                <img src={itemImage} className="rounded-xl" />
                                <div className="join join-vertical">
                                    <div>
                                        {itemName}
                                    </div>
                                    {/* Item Price */}
                                    <div>
                                        ${itemPrice}
                                    </div>
                                </div>
                                {/* Remove Item  */}
                                <button className="ml-16">
                                    X
                                </button>
                            </div>
                        </li>
                        <li><div className="">
                            <img src={itemImage} className="rounded-xl" />
                            <div className="join join-vertical">
                                <div>
                                    {itemName}
                                </div>
                                <div>
                                    ${itemPrice}
                                </div>
                            </div>
                            <button className="ml-16">
                                X
                            </button>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}