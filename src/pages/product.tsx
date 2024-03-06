import ItemCard from "~/components/ItemCard"
import { useCallback, useState } from "react";
import { api } from "~/utils/api";

export default function product() {

    const [layout, setLayout] = useState(0);
    const nextLayout = useCallback(() => setLayout(state => state+1), [setLayout])
    const itemLayout = "column-" + layout.toString()
    const items = api.item.getAll.useQuery();

    return (
        <>
        <div className="pb-24"><Navbar /></div>


        {/* disclaimer: put on all pages??? */}
        <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 font-mhs" role="alert">
            <span className="font-medium">Disclaimer: </span>This site is for reservations purposes only. Transactions are done in store.
        </div>



        <button onClick={nextLayout}>Change Layout {layout}</button>
        <div className={itemLayout}>
            {itemLayout}
        <ItemCard />
   
        </div>
        
        </>
    )
}