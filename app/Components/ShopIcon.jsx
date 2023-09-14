'use client'
import React from 'react';
import {IconButton} from "@material-tailwind/react";
import {FaShoppingCart} from "react-icons/fa";
import useOrdersStore from "@/store/OrdersStore";

const ShopIcon = () => {
    const setOpenDrawer = useOrdersStore(s => s.setOpenDrawer);
    return (
        <IconButton color={'white'} onClick={() => setOpenDrawer(true)}>
            <FaShoppingCart size={18}/>
        </IconButton>
    );
};

export default ShopIcon;