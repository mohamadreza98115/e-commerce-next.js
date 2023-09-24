'use client'
import React from 'react';
import Sidebar from "@/app/Components/Sidebar";
import SearchBar from "@/app/Components/SearchBar";
import Categories from "@/app/Components/Categories";
import ProductCard from "@/app/Components/ProductCard";
import {Product} from "@/services/FetchProducts";


type Props = {
    products: Product[]
}

const ProductContainer = ({products: Products}: Props) => {
    return (
        <div className={'mx-auto grid md:grid-cols-3'}>
            <div className={'hidden md:grid col-span-1'}>
                <Sidebar/>
            </div>
            <div className={'col-span-1 md:col-span-2'}>
                <SearchBar/>
                <div className={'px-2'}>
                    <Categories/>
                </div>
                <div className={'flex justify-center align-middle flex-row flex-wrap md:justify-start'}>
                    {Products?.map(product => <ProductCard key={product.id} product={product}/>)}
                </div>
            </div>
        </div>
    );
};

export default ProductContainer;