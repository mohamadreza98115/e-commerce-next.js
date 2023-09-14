import React from "react";
import {InboxArrowDownIcon, LifebuoyIcon} from "@heroicons/react/24/outline";
import {PowerIcon, UserCircleIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import {Avatar, Menu, MenuItem, MenuList, Typography} from "@/app/Components/MaterialTailwindExporter";
import {MenuHandler} from "@material-tailwind/react";

// profile menu component
const profileMenuItems = [
    {
        label: "My Profile",
        icon: UserCircleIcon,
        url: '/profile'
    },
    {
        label: "Inbox",
        icon: InboxArrowDownIcon,
        url: '/inbox'
    },
    {
        label: "Help",
        icon: LifebuoyIcon,
        url: '/help'
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
        url: '/login'
    },
];

const ProfileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Avatar
                    variant="circular"
                    size="sm"
                    alt="tania andrew"
                    className="cursor-pointer"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
            </MenuHandler>
            <MenuList className="p-1">
                {profileMenuItems.map(({label, icon, url}, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={label}
                            onKeyUp={closeMenu}
                            className={`flex items-center gap-2 rounded ${
                                isLastItem
                                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                    : ""
                            }`}
                        >
                            {React.createElement(icon, {
                                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                strokeWidth: 2,
                            })}
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color={isLastItem ? "red" : "inherit"}
                            >
                                <Link href={url}>{label}</Link>
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}

export default ProfileMenu;
