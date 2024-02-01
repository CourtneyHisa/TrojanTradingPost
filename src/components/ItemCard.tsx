import { useCallback, useState } from "react";
import { Items } from "~/utils/loyverse";
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
  console.log(items.items.filter(e=>!e.image_url))
  return (
    <div className="flex items-center justify-center">
      <div className="container m-auto grid w-3/5 grid-cols-1 gap-4 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {items.items.map((item) => (
          <div className=" ">
            <div className="card card-compact bg-base-100 col-span-1 h-full w-full shadow-xl sm:flex-wrap">
              {/* image */}
              <div className="flex items-center justify-center p-4">
                <img
                  src={item.image_url}
                  className="h-48 w-64 rounded-xl object-cover"
                />
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
          </div>
        ))}
      </div>
    </div>
  );
}
