import { useCallback, useState } from "react";
import Navbar from "~/components/Navbar";
import Sidebar from "~/components/Sidebar";
import Footer from "~/components/Footer";


export default function product() {

    const [layout, setLayout] = useState(0);
    // what
    const nextLayout = useCallback(() => setLayout(state => state+1), setLayout)
    const itemLayout = "column-" + layout.toString()
    return (
        <>
        <Navbar />
            <div className="pt-24 bg-cream1 h-screen">
                <Sidebar />
            </div>
            <Footer />
        </>
    )
}
    