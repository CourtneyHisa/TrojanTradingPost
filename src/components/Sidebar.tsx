export default function Sidebar() {
    return (
        <>
            <aside>
                <div className="fixed top-24 left-0 z-0 w-60 bg-gray-200 h-screen font-mhs">
                    <h1 className="text-center font-bold pt-4 text-lg underline text-brown2">Categories</h1>
                    <div className="p-2 hover:bg-gray-300 w-full text-left">
                        <input type="checkbox" className="float-left m-1 mr-2 checkbox checkbox-sm" />
                        Example
                    </div>
                    <div className="p-2 hover:bg-gray-300 w-full text-left">
                        <input type="checkbox" className="float-left m-1 mr-2 checkbox checkbox-sm" />
                        Example
                    </div>
                    <div className="p-2 hover:bg-gray-300 w-full text-left">
                        <input type="checkbox" className="float-left m-1 mr-2 checkbox checkbox-sm" />
                        Example
                    </div>
                    <div className="p-2 hover:bg-gray-300 w-full text-left">
                        <input type="checkbox" className="float-left m-1 mr-2 checkbox checkbox-sm" />
                        Balls
                    </div>
                    <h1 className="text-9xl"></h1>
                </div>
            </aside>
        </>
    )
}