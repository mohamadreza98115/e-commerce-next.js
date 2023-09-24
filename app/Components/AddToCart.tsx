'use client'
import React from 'react';
import {Button} from "@/app/Components/MaterialTailwindExporter";
import useOrdersStore from "@/store/useOrdersStore";

interface Props {
    product: object
}

const AddToCart = ({product}: Props) => {
    const {setValue, value} = useOrdersStore();
    console.log(product)
    console.log(value)
    return (
        <Button onClick={() => {
            setValue(product)
        }} size="lg" fullWidth={true}>
            Add To Cart
        </Button>
    );
};

export default AddToCart;