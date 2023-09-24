import React from 'react';
import FetchProduct from "@/services/FetchProduct";

type Props = {
    params: { id: string }
}

const ProductDetailPage = async ({params: {id}}: Props) => {
    const product = await FetchProduct(id);
    console.log(product)
    return (
        <div>
            product {JSON.stringify(product)}
        </div>
    );
};

export default ProductDetailPage;