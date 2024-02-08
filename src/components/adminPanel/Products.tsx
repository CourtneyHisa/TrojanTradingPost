export default function Products() {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>In-Stock</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>${'item.name'}</td>
                            <td>
                                <input type="number" id="price" name="price" placeholder="0" step="0.01" min="0" max="10" />
                            </td>
                            <td>${'item.in_stock'}</td>
                            {/* if there is a image it would most likely have a link to the image */}
                            <td>
                                <button className="btn btn-sm h-2">Upload Image</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}