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
                            <th>Catgories</th>
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
                                {/* Should make it that if there is no image have the option to upload one.
                                If not, maybe just add the ability to replace it or just leave it */}
                                {/* {!item.image ? (
                                    <form action='/action_page.php'>
                                        <input type="file" id="myFile" name="filename"></input>
                                        <input type="submit" className="btn btn-sm h-2" />
                                    </form>) : null} */}
                                <input type="file" className="file-input file-input-bordered file-input-xs w-full max-w-xs" />
                            </td>
                            <td>
                                {/* // v0 by Vercel.
                                // https://v0.dev/t/UhVw2HRszVg */}
                                <button
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 shrink-0"
                                    type="button"
                                    id="radix-:rq:"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    data-state="closed"
                                >
                                    Category{" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="w-4 h-4 ml-2"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5v14"></path>
                                    </svg>
                                </button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}