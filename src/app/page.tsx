"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["Frontend Developer", "Full-Stack Capable", "Product Builder"];

const Homepage = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 40);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 80);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <motion.div
      className="h-full overflow-auto"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-6 md:px-12 lg:px-16 xl:px-48 relative">
        {/* Background effects */}
        <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
        <div className="grid-bg absolute inset-0 z-0" />

        {/* IMAGE */}
        <motion.div
          className="h-[40%] sm:h-1/2 lg:h-full lg:w-1/2 relative z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ minHeight: "200px" }}
        >
          <div className="relative h-full w-full flex items-center justify-center">
            {/* Glowing ring behind image */}
            <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] rounded-full bg-gradient-to-br from-accent-blue/20 via-accent-purple/10 to-transparent blur-2xl" />
            <Image
              src="/ME.jpg"
              alt="Amiteye Ofeoritse"
              fill
              className="object-contain px-8 sm:px-12 lg:px-16 relative z-10"
            />
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="flex-1 lg:h-full lg:w-1/2 flex flex-col gap-4 sm:gap-5 md:gap-6 items-center lg:items-start justify-center z-10 pb-6 lg:pb-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Greeting */}
          <motion.p
            className="text-dark-300 text-xs sm:text-sm md:text-base font-medium tracking-widest uppercase"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white text-center lg:text-left leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Amiteye{" "}
            <span className="gradient-text">Ofeoritse</span>
          </motion.h1>

          {/* Typing effect */}
          <motion.div
            className="h-7 sm:h-8 md:h-10 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-base sm:text-lg md:text-2xl font-medium text-dark-200">
              {displayText}
            </span>
            <span className="w-[2px] sm:w-[3px] h-5 sm:h-6 md:h-8 bg-accent-blue ml-1 animate-typing-cursor" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-dark-300 text-sm sm:text-base md:text-lg text-center lg:text-left max-w-md leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            I don&apos;t just write code, I build systems that ship.
            <br />
            <span className="text-dark-400 text-xs sm:text-sm">
              Turning ideas into usable, deployable products.
            </span>
          </motion.p>

          {/* Buttons */}
          <div className="flex gap-3 sm:gap-4 pt-1 sm:pt-2">
            <motion.a
              href="/projects"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            >
              <motion.button
                className="btn-primary text-sm sm:text-base !px-4 !py-2.5 sm:!px-6 sm:!py-3 md:!px-8 md:!py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
            </motion.a>

            <motion.a
              href="/contacts"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
            >
              <motion.button
                className="btn-outline text-sm sm:text-base !px-4 !py-2.5 sm:!px-6 sm:!py-3 md:!px-8 md:!py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.a>
          </div>

          {/* Quick stats */}
          <motion.div
            className="flex gap-5 sm:gap-8 pt-4 sm:pt-6 mt-1 sm:mt-2 border-t border-dark-700/50 w-full justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="text-center lg:text-left">
              <p className="text-xl sm:text-2xl font-bold text-white">40+</p>
              <p className="text-[10px] sm:text-xs text-dark-400 uppercase tracking-wider">
                Projects
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-xl sm:text-2xl font-bold text-white">3</p>
              <p className="text-[10px] sm:text-xs text-dark-400 uppercase tracking-wider">
                In-Progress
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-xl sm:text-2xl font-bold text-white">15+</p>
              <p className="text-[10px] sm:text-xs text-dark-400 uppercase tracking-wider">
                Technologies
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Homepage;
