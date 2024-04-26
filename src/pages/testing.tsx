import { useCallback, useState } from "react";
import Navbar from "~/components/Navbar";
import Sidebar from "~/components/Sidebar";
import Footer from "~/components/Footer";
import { api } from "~/utils/api";


export default function product() {

    const x = api.mongo.getItemByLoyverseVariantId.useQuery({ id: "xxxx" });
    return (
        <>
        <Navbar />
            <div className="pt-24 bg-cream1 h-screen">
                {JSON.stringify(x.data, null, '\t')}
            </div>
            <Footer />
        </>
    )
}
    