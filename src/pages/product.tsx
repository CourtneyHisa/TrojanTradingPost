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
            <button onClick={nextLayout}>Change Layout {layout}</button>
            <div className={itemLayout}>
                {itemLayout}
                {!(items.isFetched && items.data) ? <div>Loading</div> : <ItemCard items={items.data}/>}
            </div>
        </>
    )
}