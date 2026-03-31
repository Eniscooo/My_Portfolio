"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar/navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }: any) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathname}
        className="w-screen h-screen bg-dark-900"
      >
        {/* Page transition overlay */}
        <motion.div
          className="h-screen w-screen fixed bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        {/* Page name flash */}
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-4xl sm:text-5xl md:text-6xl cursor-default z-50 w-fit h-fit gradient-text font-bold"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {pathname.substring(1)}
        </motion.div>

        {/* Bottom transition overlay */}
        <motion.div
          className="h-screen w-screen fixed bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 rounded-t-[100px] bottom-0 z-40"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.3 } }}
        />

        {/* Navbar — responsive height */}
        <div className="h-16 sm:h-18 md:h-20">
          <Navbar />
        </div>

        {/* Main content area — accounts for navbar height */}
        <div className="h-[calc(100vh-4rem)] sm:h-[calc(100vh-4.5rem)] md:h-[calc(100vh-5rem)]">
          {children}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
