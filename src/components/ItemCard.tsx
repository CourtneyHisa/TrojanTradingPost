import { useCallback, useState } from "react";
import { api } from "~/utils/api";
export default function ItemCard() {
    //Temporary place holders 
    // const itemName = "Apple"
    // const itemPrice = "4.00"
    // const itemImage = "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    // const itemStock = 6
    // const itemRestockDate = "10/12/23"

    // let itemList = [
    //     {itemName: "Apple", itemPrice: "4.00", itemDescription: "Fresh, red, grown locally by agriculture classes", itemImage: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg", itemStock: 6, itemRestockDate: "10/12/23"},
    //     {itemName: "Lemon", itemPrice: "4.00", itemDescription: "Fresh, grown locally by agriculture classes, good in lemonade", itemImage: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg", itemStock: 6, itemRestockDate: "10/12/23"},
    //     {itemName: "Dog", itemPrice: "10.00", itemDescription: "Fresh, edible and mustache", itemImage: "https://i.redd.it/1eog44lx72681.jpg", itemStock: 6, itemRestockDate: "10/12/23"},
    //     {itemName: "Dog", itemPrice: "10.00", itemDescription: "Fresh, red", itemImage: "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg", itemStock: 6, itemRestockDate: "10/12/23"},
    //     {itemName: "Dog", itemPrice: "10.00", itemDescription: "Fresh, red", itemImage: "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg", itemStock: 6, itemRestockDate: "10/12/23"},
    //     {itemName: "Dog", itemPrice: "10.00", itemDescription: "Fresh, red", itemImage: "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg", itemStock: 6, itemRestockDate: "10/12/23"},
    //     {itemName: "Dog", itemPrice: "10.00", itemDescription: "Fresh, red", itemImage: "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg", itemStock: 6, itemRestockDate: "10/12/23"},
    //     {itemName: "Dog", itemPrice: "10.00", itemDescription: "Fresh, red", itemImage: "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg", itemStock: 6, itemRestockDate: "10/12/23"},
    //     {itemName: "Dog", itemPrice: "10.00", itemDescription: "Fresh, red", itemImage: "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg", itemStock: 6, itemRestockDate: "10/12/23"}
  
    // ]

    const items = api.item.getAll.useQuery();

    //Counter for number reserving button
    const [reserving, setreserving] = useState(0);
    const increaseReserving = useCallback(() => setreserving(state => state+1), setreserving)
    const decreaseReserving = useCallback(() => setreserving(state => state-1), setreserving)
    return (
            <div className="flex items-center justify-center">
                <div className="container m-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-3/5 gap-4 ">

                    {items.isLoading ? "loading..." : items.data!.items.map((item) => 
                        <div className=" ">
                            <div className="card card-compact w-full h-full bg-base-100 shadow-xl col-span-1 sm:flex-wrap">
                                {/* image */}
                                <div className="flex items-center justify-center p-4">
                                    <img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" className="rounded-xl object-cover h-48 w-64" />
                                </div>
                                {/* Item Name */}
                                <h2 className="items-center text-center">{item.item_name}</h2>
                                
                            
                                <div className="card-body ">

                                <div className="flex items-center justify-center">
                                {/* Price tag */}
                                <div className="flex-1">${"price"}</div>
                                {/* If there is stock, then display the number in stock, else show the restock date*/}
                                <div className="flex-1">
                                    {/* Number in stock */}
                                    Number in stock: {"available stock"}
                                </div>
                                <div className="flex-1">
                                    {/* Restock Date */}
                                    Restock date: {"restock date"}
                                </div>
                                </div>
                    
                                    
                                    {/* Reserve button */}
                                    
                                </div>
                                <button className="btn btn-info">Reserve</button>
                            </div>
                        </div>)}
                    </div>
                </div>
        
    )}
