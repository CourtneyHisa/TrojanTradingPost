import { useCallback, useState } from "react";
export default function ItemCard() {
    //Temporary place holders 
    const itemName = "Apple"
    const itemPrice = "4.00"
    const itemImage = "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    const itemStock = 6
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
                {/* Item Name */}
                <h2 className="mt-6 items-center text-center">{itemName}</h2>
                <div className="card-body ">

                    
                    
                    {/* Item Description */}
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                    <div className="flex items-center justify-center">
                    {/* Price tag */}
                    <div className="flex-1">${itemPrice}</div>
                    {/* If there is stock, then display the number in stock, else show the restock date*/}
                    {itemStock != 0 ?

                        <div className="flex-1">
                            {/* Number in stock */}
                            Number in stock: {itemStock}
                        </div>
                        :
                        <div className="flex-1">
                            {/* Restock Date */}
                            Restock date: {itemRestockDate}
                        </div>
                    }
                    </div>
                    
                    
                    {/* Reserve button */}
                    <button className="btn btn-info">Reserve</button>
                </div>
                

            </div>
        </>
    )
}