import React from "react";
import {InboxArrowDownIcon, LifebuoyIcon} from "@heroicons/react/24/outline";
import {PowerIcon, UserCircleIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import {Avatar, Menu, MenuItem, MenuList, Typography} from "@/app/Components/MaterialTailwindExporter";
import {MenuHandler} from "@material-tailwind/react";

interface Props {
    data: object;
}

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
        url: '/api/auth/signout'
    },
];

const ProfileMenu = ({data}: Props) => {
    const {email, image} = data;
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
                    src={image}
                />
            </MenuHandler>
            <MenuList className="p-1">
                <Typography className={'p-2 hover:border-0'}>{email}</Typography>
                <hr className={'my-2 border-blue-gray-50'}/>
                {profileMenuItems.map(({label, icon, url}, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={label}
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
