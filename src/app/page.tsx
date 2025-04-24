"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full overflow-auto"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-screen custom-con:h-full flex flex-col px-4 sm:px-8 md:px-12 custom-con:p-0 custom-con:px-20 xl:px-48 custom-con:flex-row ">
        {/* IMAGE */}
        <motion.div
          className="h-1/2 custom:h-full custom:w-full relative mr-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{minHeight:"250px"}}
        >
          <Image
            src="/ofe-3.png"
            alt=""
            fill
            className="object-contain custom-con:px-20 "
          />
        </motion.div>
        
        {/* TEXT */}
        <motion.div
          className="md:h-1/2 custom-con:h-full custom-con:w-1/2 flex flex-col gap-8 items-center justify-center "
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* TITLE */}
          <motion.h1
            className="text-4xl custom-con:text-4xl font-bold md:text-5xl text-gray-800 text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Hello there, I`m Amiteye Ofeoritse
          </motion.h1>
          
          {/* DESCRIPTION */}
          <motion.p
            className="md:text-xl text-gray-600 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            A software/web developer.<br />
            My passion lies in creating efficient, user-friendly solutions that
            meet both business and user needs.
          </motion.p>
          
          <div className="w-full flex gap-4 p-2 justify-center items-center">
            {/* BUTTONS */}
            <motion.a
              href="/projects"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            >
              <motion.button  className="p-4 rounded-lg shadow-xl  bg-black text-white hover:bg-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95  }}>
                View my work
              </motion.button>
            </motion.a>
            
            <motion.a
              href="/contacts"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            >
              <motion.button className="p-4 rounded-lg ring-1 shadow-xl  bg-white text-black hover:bg-gray-200 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95  }}>
                Contact me
              </motion.button>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Homepage;
