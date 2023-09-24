import React from 'react';
import {sort} from 'fast-sort'

type Props = {
    searchParams: { sortOrder: string }
}

const ProductsPage = async ({searchParams: {sortOrder}}: Props) => {

    const sortedProducts = sort([]).asc(p => p[sortOrder as keyof typeof p]);
    return (
        <>
        </>
    );
};

export default ProductsPage;