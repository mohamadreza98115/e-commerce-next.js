import React from 'react';

type Props = {
    params: { id: number }
}

const ProductDetailPage = async ({params: {id}}: Props) => {
    const res = await fetch(`${process.env.API_URL}/products/${id}`);
    const product = await res.json();
    return (
        <div>
            <h1>{product.title}</h1>
            <h5>{product.category}</h5>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductDetailPage;