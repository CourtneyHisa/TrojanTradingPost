import { useCallback, useState } from "react";

export default function ShoppingCart() {
    const itemImage = "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    const itemName = "Banana"
    const itemPrice = "4.00"

    const [itemCount, setItemCount] = useState(0);
    const increaseItemCount = useCallback(() => setItemCount(state => state + 1), setItemCount)
    const decreaseItemCount = useCallback(() => setItemCount(state => state - 1), setItemCount)
    return (
        <>
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
                        
                        <li className="">
                            {/* Shopping Cart Item Layout
                            Image Name Price Remove */}
                            <div className="bg-blue-100 hover:bg-blue-200">
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
                                {/* Change Item Count */}
                                <div className="join join-horizontal">
                                <button className="ml-4" onClick={decreaseItemCount}>
                                    -
                                </button>
                                <div className="px-4">{itemCount}</div>
                                <button className="ml-16" onClick={increaseItemCount}>
                                    +
                                </button>
                                </div>
                            </div>
                        </li>
                            {/* Shopping Cart Item Layout
                            Image Name Price Remove */}
                            <div className="w-72 bg-blue-100 hover:bg-blue-200">
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
                                {/* Change Item Count */}
                                <div className="join join-horizontal">
                                <button className="ml-4" onClick={decreaseItemCount}>
                                    -
                                </button>
                                <div className="px-4 w-10">{itemCount}</div>
                                <button className="ml-16" onClick={increaseItemCount}>
                                    +
                                </button>
                                </div>
                            </div>
                    </ul>
                </div>
            </div>
        </>
    )
}