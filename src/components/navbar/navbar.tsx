"use client";

import Link from "next/link";
import Image from "next/image";
import NavLink from "./navLink";
import { useState } from "react";
import { motion, stagger } from "framer-motion";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projects", title: "Projects" },
  { url: "/contacts", title: "Contacts" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topvariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(0,0,0)",
    },
  };

  const centervariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomvariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(0,0,0)",
    },
  };
  const listvariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: "0",
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const linkvariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:p-10 text-xl ">

  <div className="flex-shrink-0">
    <a
      href="/"
      className="text-sm rounded-md p-1 font-semibold flex items-center justify-center"
    >
      <Image src={"/logo-2.png"} alt="" height={150} width={150}></Image>
    </a>
  </div>

  {/* LINKS */}
  <div className="hidden lg:flex justify-center flex-grow">
    {links.map((link) => (
      <NavLink link={link} key={link.title} />
    ))}
  </div>

  {/* SOCIAL */}
  <div className="hidden lg:flex gap-8 flex-shrink-0">
    <a href="https://github.com/ofeoritse-amiteye">
      <Image src={"/github.png"} alt="GitHub" width={24} height={24} />
    </a>
    <a href="https://www.linkedin.com/in/ofeoritse-amiteye-760527263/">
      <Image src={"/linkedin.png"} alt="LinkedIn" width={24} height={24} />
    </a>
  </div>

      <div className="lg:hidden">
        {/*MENU BUTTON*/}
        <button
          className="w-10 h-8 flex flex-col justify-between relative"
          onClick={() => setOpen((prev) => !prev)}
          style={{zIndex:"60"}}
        >
          <motion.div
            variants={topvariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centervariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={bottomvariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {open && (
          <motion.div
            variants={listvariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-white text-black flex flex-col items-center justify-center gap-8 text-4xl z-50 "
          >
            {links.map((link) => (
              <motion.div key={link.title} variants={linkvariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 ,backgroundColor:""  }}>
                <NavLink link={link} key={link.title} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
