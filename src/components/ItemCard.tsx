export default function ItemCard() {
    const itemName = "Apple"
    const itemPrice = "4.00"
    const itemImage = "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    const itemStock = 4
    const itemRestockDate = "10/12/23"
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
                    <button className="btn btn-primary">Reserve</button>
                </div>

            </div>
        </>
    )
}