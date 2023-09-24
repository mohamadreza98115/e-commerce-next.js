'use client'

import React from "react";
import {Collapse} from "@material-tailwind/react";
import {IconButton, Navbar, Typography} from "@/app/Components/MaterialTailwindExporter";
import ShopIcon from "@/app/Components/ShopIcon";
import ProfileMenu from "@/app/Components/ProfileMenu";
import Link from "next/link";
import {useSession} from "next-auth/react";


function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const {status, data: session} = useSession();

    const closeMenu = () => setIsMenuOpen(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link href="/products" className="flex items-center">
                    Products
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Account
                </a>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Link href={'/'}>
                    <Typography
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        Online Shopping
                    </Typography>
                </Link>
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <ShopIcon/>
                    {status === 'authenticated' && <ProfileMenu email={session?.user?.email}/>}
                    {status === 'unauthenticated' && <div className={'flex flex-row'}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="p-1 font-normal"
                        >
                            <Link href="/register" className="flex items-center">
                                Sign Up
                            </Link>
                        </Typography>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="p-1 font-normal"
                        >
                            <Link href="/api/auth/signin" className="flex items-center">
                                Login
                            </Link>
                        </Typography>
                    </div>}
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <Collapse open={openNav}>
                {navList}
            </Collapse>
        </Navbar>
    );
}

export default StickyNavbar;