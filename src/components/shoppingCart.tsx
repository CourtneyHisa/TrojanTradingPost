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
                    
                    <label htmlFor="my-drawer-4" className="drawer-button">
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.75"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </label>
                </div>

                {/* Shopping Cart Sidebar */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-96 min-h-full bg-base-200 text-base-content ">
                        {/* Shopping Cart Header */}
                        <div>
                            <div className="text-center text-3xl">Shopping Cart Items</div>
                            <div className="divider"></div>
                        </div>
                        {/* Shopping Cart Items */}
                        
                        <li className="">
                            {/* Shopping Cart Item Layout
                            Image Name Price Remove */}
                            <div className="bg-blue-100 hover:bg-blue-200 ">
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
                            
                    </ul>
                </div>
            </div>
        </>
    )
}