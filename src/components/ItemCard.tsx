import { useState } from "react";
import type { Item, Items, Variant } from "~/utils/loyverse";

export default function ItemCard({ items }: { items: Items }) {

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
      <div className="container m-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-3/5 h-256">

        {/* bring up variants from the item array into one list */}
        {items.items.flatMap(item => {
          const variants: (Variant & {item: Item})[] = [];
          for(const variant of [...item.variants])
            variants.push({...variant, item});
          return variants;
        }).map((variant) =>
          <div>
            <div className=" card-compact drop-shadow-md w-full h-full bg-base-100 shadow-xl col-span-1 sm:flex-wrap">
              <div>
                {/* image */}
                <div className="flex items-center justify-center">
                  <img src={variant.item.image_url || "https://http.cat/404"} className=" object-cover h-64 w-full" />
                </div>
                {/* Item Name */}


                <div className="bg-signborder2 h-32 p-4">
                  <h2 className="items-center text-center font-sans text-white">{variant.item.item_name}</h2>
                  {variant.item.description != null && <p className="font-mhs text-white">{variant.item.description.replaceAll(/<\/?p>/g, "")}</p>}
                </div>

                <div className="card-body bg-signborder1 flex items-center justify-center h-1/4">
                  {/* Price tag */}
                  <div className="flex-1 font-mhs text-white">${variant.purchase_cost}</div>

                  {/* If there is stock, then display the number in stock, else show the restock date*/}
                  <div className="flex-1">
                    {Array.isArray(variant.item.components) ? variant.item.components.find(c => c.variant_id === variant.variant_id)?.quantity != 0 ?

                      <div className="flex-1 font-mhs text-white">
                        {/* Number in stock */}
                        Number in stock: {"not implemented"}
                      </div>
                      :
                      <div className="flex-1 font-mhs text-white">
                        {/* Restock Date */}
                        Restock date: {"not implemented"}
                      </div>
                    : 'bruh'}
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
