"use client"

import Link from "next/link"

const { usePathname } = require("next/navigation")

const NavLink = ({link} : any) =>
{
    const pathname =usePathname()

    console.log(pathname)
    return(
        <Link href={link.url} className={`rounded-xl px-4 py-2 ${pathname === link.url && "bg-black text-white"}`} >{link.title}</Link>
    )
} 

export default NavLink