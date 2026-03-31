"use client";

import Link from "next/link";
import Image from "next/image";
import NavLink from "./navLink";
import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projects", title: "Projects" },
  { url: "/contacts", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topvariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(228, 228, 231)" },
  };

  const centervariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };

  const bottomvariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "rgb(228, 228, 231)" },
  };

  const listvariants = {
    closed: { x: "100vw" },
    opened: {
      x: "0",
      transition: { staggerChildren: 0.2 },
    },
  };

  const linkvariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-10 text-xl">
      {/* LOGO */}
      <div className="flex-shrink-0">
        <a
          href="/"
          className="text-sm rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <Image src="/logo-2.png" alt="Logo" height={150} width={150} />
        </a>
      </div>

      {/* NAV LINKS */}
      <div className="hidden lg:flex justify-center flex-grow">
        <div className="flex items-center gap-1 glass-card px-2 py-1">
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
      </div>

      {/* SOCIAL LINKS */}
      <div className="hidden lg:flex gap-5 flex-shrink-0 items-center">
        <a
          href="https://github.com/ofeoritse-amiteye"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg border border-dark-600 hover:border-accent-blue/50 hover:shadow-glow transition-all duration-300"
        >
          <Image
            src="/github.png"
            alt="GitHub"
            width={20}
            height={20}
            className="invert opacity-70 hover:opacity-100 transition-opacity"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ofeoritse-amiteye-760527263/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg border border-dark-600 hover:border-accent-blue/50 hover:shadow-glow transition-all duration-300"
        >
          <Image
            src="/linkedin.png"
            alt="LinkedIn"
            width={20}
            height={20}
            className="invert opacity-70 hover:opacity-100 transition-opacity"
          />
        </a>
      </div>

      {/* MOBILE MENU */}
      <div className="lg:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between relative"
          onClick={() => setOpen((prev) => !prev)}
          style={{ zIndex: "60" }}
        >
          <motion.div
            variants={topvariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-dark-100 rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centervariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-dark-100 rounded origin-left"
          ></motion.div>
          <motion.div
            variants={bottomvariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-dark-100 rounded origin-left"
          ></motion.div>
        </button>

        {open && (
          <motion.div
            variants={listvariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-dark-900/98 backdrop-blur-xl text-dark-50 flex flex-col items-center justify-center gap-8 text-4xl z-50"
          >
            {links.map((link) => (
              <motion.div
                key={link.title}
                variants={linkvariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(false)}
              >
                <NavLink link={link} />
              </motion.div>
            ))}

            {/* Social in mobile menu */}
            <motion.div
              variants={linkvariants}
              className="flex gap-6 mt-8 pt-8 border-t border-dark-600"
            >
              <a
                href="https://github.com/ofeoritse-amiteye"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-dark-600 hover:border-accent-blue/50 transition-all"
              >
                <Image
                  src="/github.png"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="invert opacity-80"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/ofeoritse-amiteye-760527263/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-dark-600 hover:border-accent-blue/50 transition-all"
              >
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="invert opacity-80"
                />
              </a>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
