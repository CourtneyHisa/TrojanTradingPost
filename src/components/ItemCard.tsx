import { useCallback, useState } from "react";
import { Items } from "~/utils/loyverse";
export default function ItemCard({ items }: { items: Items }) {


    //Counter for number reserving button
    const [reserving, setreserving] = useState(0);
    const increaseReserving = useCallback(() => setreserving(state => state+1), setreserving)
    const decreaseReserving = useCallback(() => setreserving(state => state-1), setreserving)
    return (
            <div className="flex items-center justify-center">
                <div className="container m-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-3/5 h-256">

                    {itemList.map((item) => 
                        <div>
                            <div className=" card-compact drop-shadow-md w-full h-full bg-base-100 shadow-xl col-span-1 sm:flex-wrap">
                                <div>
                                    {/* image */}
                                    <div className="flex items-center justify-center">
                                        <img src={item.itemImage} className=" object-cover h-64 w-full" />
                                    </div>
                                    {/* Item Name */}
                                    
                                    
                                    <div className="bg-signborder2 h-32 p-4">
                                            <h2 className="items-center text-center font-sans text-white">{item.itemName}</h2>
                                            <p className="font-mhs text-white">{item.itemDescription}</p>
                                    </div>
                                        
                                        <div className="card-body bg-signborder1 flex items-center justify-center h-1/4">
                                            {/* Price tag */}
                                            <div className="flex-1 font-mhs text-white">${item.itemPrice}</div>
                                        
                                            {/* If there is stock, then display the number in stock, else show the restock date*/}
                                            <div className="flex-1">
                                                {item.itemStock != 0 ?

                                                    <div className="flex-1 font-mhs text-white">
                                                        {/* Number in stock */}
                                                        Number in stock: {item.itemStock}
                                                    </div>
                                                    :
                                                    <div className="flex-1 font-mhs text-white">
                                                        {/* Restock Date */}
                                                        Restock date: {item.itemRestockDate}
                                                    </div>
                                                }
                                            </div>
                                        
                                
                                            <button className="btn btn-info w-full bg-yellow1 hover:bg-yellow3 hover:border-yellow3 border-yellow1 font-mhs text-white">Reserve</button>
                                                {/* Reserve button */}
                                        </div>
                                    
                                            
                                    
                                    
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
        
    )}
