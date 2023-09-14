'use client'
import React from 'react';
import {FaShoppingCart} from "react-icons/fa";
import useOrdersStore from "../../store/useOrdersStore";
import {IconButton} from "./MaterialTailwindExporter";

const ShopIcon = () => {
    const setOpenDrawer = useOrdersStore((s: { setOpenDrawer: any; }) => s.setOpenDrawer);
    return (
        <IconButton color={'white'} onClick={() => setOpenDrawer(true)}>
            <FaShoppingCart size={18}/>
        </IconButton>
    );
};

export default ShopIcon;