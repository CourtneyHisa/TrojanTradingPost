import { useCallback, useState } from "react";
export default function ItemCard() {
    //Temporary place holders 
    const itemName = "Apple"
    const itemPrice = "4.00"
    const itemImage = "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    const itemStock = 4
    const itemRestockDate = "10/12/23"

    //Counter for number reserving button
    const [reserving, setreserving] = useState(0);
    const increaseReserving = useCallback(() => setreserving(state => state+1), setreserving)
    const decreaseReserving = useCallback(() => setreserving(state => state-1), setreserving)
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                {/* image */}
                <figure className="px-10 pt-10">
                    <img src={itemImage} className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <div className="join">
                        {/* Item Name */}
                        <h2 className="card-title">{itemName}</h2>
                        {/* Price tag */}
                        <div className="badge badge-secondary ml-6">${itemPrice}</div>
                    </div>
                    {/* Item Description */}
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                    {/* If there is stock, then display the number in stock, else show the restock date*/}
                    {itemStock != 0 ?

                        <div>
                            {/* Number in stock */}
                            Number in stock: {itemStock}
                        </div>
                        :
                        <div>
                            {/* Restock Date */}
                            Restock date: {itemRestockDate}
                        </div>
                    }
                    {/* Reserve button */}
                    <div className="join join-horizontal bg-blue-700">
                        
                        
<button onClick={decreaseReserving}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
</svg>
 </button>
                            <p className="items-center">Reserving: {reserving} {itemName}</p>
                            <button onClick={increaseReserving}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</button>
                    </div>
                </div>

            </div>
        </>
    )
}