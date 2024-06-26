import { useState } from "react";
import type { VaritStock } from "~/utils/loyverse";

export default function ItemCard({ variants }: { variants: VaritStock[] }) {

    //Counter for number reserving button
    const [reserving, setreserving] = useState(0);
    // const increaseReserving = useCallback(
    //   () => setreserving((state) => state + 1),
    //   [setreserving],
    // );
    // const decreaseReserving = useCallback(
    //   () => setreserving((state) => state - 1),
    //   [setreserving],
    // );
    // console.log(items.items.filter(e=>!e.image_url))
  return (
    <div className="flex items-center justify-center">
      <div className="container m-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-3/4 h-256">
        {/* bring up variants from the item array into one list */}
        {variants.map((variant) =>
          <div>
            <div className="card-compact drop-shadow-md w-full h-full bg-base-100 shadow-xl col-span-1 sm:flex-wrap">
              <div className="rounded-xl">
                {/* image */}
                <div className="flex items-center justify-center">
                  <img src={variant.item.image_url || "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"} className=" object-cover h-64 w-full" />
                </div>
                {/* Item Name */}


                <div className="bg-signborder2 h-32 p-4">
                  <h2 className="items-center text-center font-sans text-white">{variant.item.item_name}</h2>
                  {variant.item.description && <p className="font-mhs text-white">DESCRIPTION {variant.item.description.replaceAll(/<\/?p>/g, "")}</p>}
                  {variant.category && <p className="font-mhs text-white">CATEGORY {variant.category.name.replaceAll(/<\/?p>/g, "")}</p>}
                </div>

                <div className="card-body bg-signborder1 flex items-center justify-center h-1/4">
                  {/* Price tag */}
                  <div className="flex-1 font-mhs text-white">${variant.purchase_cost ?? variant.default_price}</div>

                  {/* If there is stock, then display the number in stock, else show the restock date*/}
                  <div className="flex-1">

                      <div className="flex-1 font-mhs text-white">
                        {/* Number in stock */}
                        Number in stock: {variant.in_stock}
                      </div>

                      <div className="flex-1 font-mhs text-white">
                        {/* Restock Date */}
                        Last checked: {variant.last_restock.toDateString()}
                      </div>

                  </div>


                  <button className="btn btn-info w-full bg-yellow1 hover:bg-yellow3 hover:border-yellow3 border-yellow1 font-mhs text-white">Reserve</button>
                  {/* Reserve button */}
                </div>




              </div>
            </div>
          </div>)}
      </div>
    </div>

  )
}
