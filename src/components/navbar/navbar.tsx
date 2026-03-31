"use client";

import Link from "next/link";
import Image from "next/image";
import NavLink from "./navLink";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: { duration: 0.3, staggerChildren: 0.05, staggerDirection: -1 },
    },
    opened: {
      opacity: 1,
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const linkItemVariants = {
    closed: { y: 20, opacity: 0 },
    opened: { y: 0, opacity: 1 },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-12">
      {/* LOGO */}
      <div className="flex-shrink-0 z-[60]">
        <a
          href="/"
          className="block"
          onClick={() => open && setOpen(false)}
        >
          <Image
            src="/logo-2.png"
            alt="Logo"
            height={150}
            width={150}
            className="w-[100px] sm:w-[120px] md:w-[130px] lg:w-[150px] h-auto"
          />
        </a>
      </div>

      {/* DESKTOP NAV LINKS */}
      <div className="hidden md:flex justify-center flex-grow">
        <div className="flex items-center gap-1 glass-card px-2 py-1.5">
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
      </div>

      {/* DESKTOP SOCIAL LINKS */}
      <div className="hidden md:flex gap-3 lg:gap-5 flex-shrink-0 items-center">
        <a
          href="https://github.com/ofeoritse-amiteye"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg border border-dark-600 hover:border-accent-blue/50 hover:shadow-glow transition-all duration-300"
        >
          <Image
            src="/github.png"
            alt="GitHub"
            width={18}
            height={18}
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
            width={18}
            height={18}
            className="invert opacity-70 hover:opacity-100 transition-opacity"
          />
        </a>
      </div>

      {/* MOBILE HAMBURGER BUTTON */}
      <div className="md:hidden z-[60]">
        <button
          className="w-8 h-6 sm:w-10 sm:h-8 flex flex-col justify-between relative"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <motion.div
            variants={topvariants}
            animate={open ? "opened" : "closed"}
            className="w-full h-[3px] bg-dark-100 rounded origin-left"
          />
          <motion.div
            variants={centervariants}
            animate={open ? "opened" : "closed"}
            className="w-full h-[3px] bg-dark-100 rounded origin-left"
          />
          <motion.div
            variants={bottomvariants}
            animate={open ? "opened" : "closed"}
            className="w-full h-[3px] bg-dark-100 rounded origin-left"
          />
        </button>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="fixed inset-0 w-full h-full bg-dark-900/[0.98] backdrop-blur-2xl flex flex-col items-center justify-center z-50"
          >
            {/* Nav Links */}
            <nav className="flex flex-col items-center gap-6 sm:gap-8">
              {links.map((link) => (
                <motion.div
                  key={link.title}
                  variants={linkItemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setOpen(false)}
                  className="text-2xl sm:text-3xl md:text-4xl"
                >
                  <NavLink link={link} />
                </motion.div>
              ))}
            </nav>

            {/* Social links in mobile menu */}
            <motion.div
              variants={linkItemVariants}
              className="flex gap-5 mt-10 sm:mt-12 pt-8 border-t border-dark-700/60"
            >
              <a
                href="https://github.com/ofeoritse-amiteye"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-dark-600 hover:border-accent-blue/50 transition-all duration-300"
              >
                <Image
                  src="/github.png"
                  alt="GitHub"
                  width={22}
                  height={22}
                  className="invert opacity-80"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/ofeoritse-amiteye-760527263/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-dark-600 hover:border-accent-blue/50 transition-all duration-300"
              >
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={22}
                  height={22}
                  className="invert opacity-80"
                />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
