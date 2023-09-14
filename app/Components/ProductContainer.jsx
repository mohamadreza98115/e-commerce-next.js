'use client'
import React from 'react';
import SearchBar from "@/Components/SearchBar";
import ProductItem from "@/Components/ProductItem";
import Sidebar from "@/Components/Sidebar";
import Categories from "@/Components/Categories";

const ProductContainer = ({products: Products}) => {
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
                    {Products?.map(product => <ProductItem key={product._id} product={product}/>)}
                </div>
            </div>
        </div>
    );
};

export default ProductContainer;