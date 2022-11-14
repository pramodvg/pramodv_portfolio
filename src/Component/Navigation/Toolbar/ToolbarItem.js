import React from 'react'
import Toolitem from './Toolitem'
const navItemsList = [
    { lable: "Home", mlink: "/" },
    { lable: "About", mlink: "/about" },
    { lable: "Service", mlink: "/service" },
    { lable: "Portfolio", mlink: "/portfolio" },
    { lable: "Contact", mlink: "/contact" },
];
export default function ToolbarItem() {
    return (
        navItemsList.map(data => {
            return <Toolitem key={data.lable} lable={data.lable} mLink={data.mlink} />
        })
    )
}
