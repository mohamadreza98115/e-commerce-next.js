import React from 'react';
import {Card, Typography} from "@/app/Components/MaterialTailwindExporter";
import Link from "next/link";
import {sort} from 'fast-sort'

export type Product = {
    _id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[]
}

type Props = {
    searchParams: { sortOrder: string }
}

const TABLE_ROW = ['Title', 'Category', 'Brand', 'Rating', 'Price']

const ProductsPage = async ({searchParams: {sortOrder}}: Props) => {
    console.log(sortOrder) // title, category
    const res = await fetch(`${process.env.API_URL}/products`)
    const data = await res.json();
    const Products: Product[] = data.products;
    const sortedProducts = sort(Products).asc(p => p[sortOrder as keyof typeof p]);
    return (
        <Card className="p-4 h-full w-full overflow-scroll">
            <Typography variant={'h4'}>Products List</Typography>
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                <tr>
                    {TABLE_ROW.map(row => <th key={row}
                                              className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70"
                        ><Link href={`/products?sortOrder=${row.toLowerCase()}`}>{row}</Link></Typography>
                    </th>)}
                </tr>
                </thead>
                <tbody>
                {sortedProducts?.map((product, i) => {
                    const isLast = i === Products.length - 1;
                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                    return <tr key={product._id}>
                        <td className={classes}>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                            >
                                {product.title}
                            </Typography>
                        </td>
                        <td className={classes}>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                            >
                                {product.category}
                            </Typography>
                        </td>
                        <td className={classes}>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                            >
                                {product.brand}
                            </Typography>
                        </td>
                        <td className={classes}>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                            >
                                {product.rating}
                            </Typography>
                        </td>
                        <td className={classes}>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                            >
                                {product.price}
                            </Typography>
                        </td>
                    </tr>
                })
                }
                </tbody>
            </table>
        </Card>
    );
};

export default ProductsPage;