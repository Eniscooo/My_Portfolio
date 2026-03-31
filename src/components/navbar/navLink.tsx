"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }: any) => {
  const pathname = usePathname();

  return (
    <Link
      href={link.url}
      className={`relative rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
        pathname === link.url
          ? "bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-glow"
          : "text-dark-200 hover:text-white hover:bg-dark-700/50"
      }`}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
