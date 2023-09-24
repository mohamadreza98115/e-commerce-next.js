import ProductContainer from "@/app/Components/ProductContainer";
import FetchProducts from "@/services/FetchProducts";
import Orders from "@/app/Components/Orders";
import {Suspense} from "react";

export default async function Home() {
    const products = await FetchProducts();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Suspense fallback={<p className={'text-6xl text-red-500'}>Loading...</p>}>
                <ProductContainer products={products}/>
            </Suspense>
            <Orders/>
        </main>
    )
}
