'use client'
import React from "react";
import useOrdersStore from "@/store/useOrdersStore";
import {Button, Drawer, IconButton, Typography} from "@/app/Components/MaterialTailwindExporter";
import {useRouter} from "next/navigation";

function Orders() {
    const {openDrawer, closeDrawer} = useOrdersStore();
    const router = useRouter();

    return (
        <Drawer
            placement="right"
            open={openDrawer}
            onClose={closeDrawer}
            className="p-4"
        >
            <div className="mb-6 flex items-center justify-between flex-grow">
                <Typography variant="h5" color="blue-gray">
                    Orders
                </Typography>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    onClick={closeDrawer}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </IconButton>

            </div>
            <Button onClick={() => router.push('/payment')} fullWidth>Proceed to Checkout</Button>
        </Drawer>
    );
}

export default Orders;
