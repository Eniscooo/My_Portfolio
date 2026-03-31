"use client";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Brain from "@/components/navbar/brain";

const techStack = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
    "shadcn/ui",
  ],
  Backend: ["Python", "Django", "Node.js", "PHP"],
  Mobile: ["React Native", "Flutter", "Dart", "Expo"],
  Databases: ["Firebase", "MongoDB", "MySQL", "PostgreSQL"],
  "Tools & Deployment": ["Git", "Vercel", "REST APIs"],
};

const categoryColors: Record<string, string> = {
  Frontend: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 hover:border-blue-400/60",
  Backend: "from-green-500/20 to-emerald-500/20 border-green-500/30 hover:border-green-400/60",
  Mobile: "from-purple-500/20 to-violet-500/20 border-purple-500/30 hover:border-purple-400/60",
  Databases: "from-orange-500/20 to-amber-500/20 border-orange-500/30 hover:border-orange-400/60",
  "Tools & Deployment": "from-pink-500/20 to-rose-500/20 border-pink-500/30 hover:border-pink-400/60",
};

const categoryTextColors: Record<string, string> = {
  Frontend: "text-blue-400",
  Backend: "text-green-400",
  Mobile: "text-purple-400",
  Databases: "text-orange-400",
  "Tools & Deployment": "text-pink-400",
};

const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef(null);
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const experienceRef = useRef(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-auto lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-6 md:p-10 lg:p-16 xl:p-10 flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 lg:w-2/3 xl:w-1/2">
          {/* ABOUT SECTION */}
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 justify-center">
            {/* Profile Image */}
            <div className="w-full flex justify-center items-center">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-accent-blue via-accent-purple to-accent-cyan rounded-full blur-lg opacity-40" />
                <Image
                  src="/ofe.jpg"
                  alt="Amiteye Ofeoritse"
                  width={160}
                  height={160}
                  className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full object-cover relative z-10 border-2 border-dark-600"
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="section-title text-white">
              About <span className="gradient-text">Me</span>
            </h1>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-sm sm:text-base md:text-lg text-dark-200 leading-relaxed">
                I&apos;m a <span className="text-white font-semibold">frontend-leaning software developer</span> who&apos;s fully capable on the full stack. I care deeply about building clean, professional UI/UX that feels intentional, not accidental.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-dark-200 leading-relaxed">
                My focus is on <span className="text-white font-semibold">building for real-world use</span>not just tutorials. Every project I touch is built with performance, responsiveness, and scalability in mind. I turn ideas into usable, deployable products.
              </p>
            </div>

            {/* Divider */}
            <div className="divider-glow" />

            {/* Scroll indicator */}
            <div className="flex w-full items-center justify-between">
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#3b82f6"
                  strokeWidth="1"
                />
                <path d="M12 6V14" stroke="#3b82f6" strokeWidth="1" />
                <path d="M15 11L12 14L9 11" stroke="#3b82f6" strokeWidth="1" />
              </motion.svg>
              <div className="ml-auto">
                <Image src="/signature.png" alt="" height={77} width={185} className="opacity-70 invert" />
              </div>
            </div>
          </div>

          {/* TECH STACK SECTION */}
          <div className="flex flex-col gap-8 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="section-title text-white"
            >
              Tech <span className="gradient-text">Stack</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isSkillRefInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              {Object.entries(techStack).map(([category, skills]) => (
                <div key={category} className="space-y-3">
                  <h3 className={`text-sm font-semibold uppercase tracking-widest ${categoryTextColors[category]}`}>
                    {category}
                  </h3>
                  <div className="flex gap-2 md:gap-3 flex-wrap">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isSkillRefInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        className={`tech-badge bg-gradient-to-br ${categoryColors[category]}`}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#3b82f6"
                strokeWidth="1"
              />
              <path d="M12 6V14" stroke="#3b82f6" strokeWidth="1" />
              <path d="M15 11L12 14L9 11" stroke="#3b82f6" strokeWidth="1" />
            </motion.svg>
          </div>

          {/* EXPERIENCE SECTION */}
          <div
            className="flex flex-col gap-8 justify-center pb-24"
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="section-title text-white"
            >
              Experience
            </motion.h1>

            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className="flex flex-col gap-5"
            >
              {/* Experience Card 0 */}
              <div className="glass-card-hover p-4 sm:p-5 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    IT Support / System Engineer
                  </h3>
                  <span className="text-[10px] sm:text-xs font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full self-start flex-shrink-0">
                    Jul 2025 — Present
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-medium text-dark-400 flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
                  TopTech Engineering Ltd · Lagos
                </div>
                <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-dark-300 leading-relaxed">
                  <li>
                    Provided end-to-end technical support for networking and system-related issues, ensuring minimal downtime and optimal performance across operations.
                  </li>
                  <li>
                    Designed and developed an internal ticketing/support system to streamline issue reporting, tracking, and resolution workflows.
                  </li>
                  <li>
                    Diagnosed and resolved hardware, software, and connectivity issues across multiple devices and environments.
                  </li>
                  <li>
                    Operated and maintained specialized equipment, including a degaussing machine, ensuring proper data sanitization and compliance with hardware handling standards.
                  </li>
                </ul>
              </div>

              {/* Experience Card 1 */}
              <div className="glass-card-hover p-4 sm:p-5 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    Software Engineer (Freelance)
                  </h3>
                  <span className="text-[10px] sm:text-xs font-medium text-green-400 bg-green-400/10 border border-green-400/20 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full self-start flex-shrink-0">
                    Jan 2024 — Jun 2025
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-medium text-dark-400 flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                  Freelancer · Remote
                </div>
                <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-dark-300 leading-relaxed">
                  <li>
                    Designed, developed, and deployed full-stack web and mobile applications for multiple clients across e-commerce, logistics, and education sectors.
                  </li>
                  <li>
                    Built a content creator marketplace platform connecting brands with verified influencers, including campaign management, application workflows, secure messaging, and performance tracking.
                  </li>
                  <li>
                    Developed a fantasy sports application with real-time match scoring, head-to-head matchmaking, regional rankings, and continental leaderboards.
                  </li>
                  <li>
                    Provided end-to-end IT support, diagnosing hardware and system issues and maintaining application reliability across deployed environments.
                  </li>
                </ul>
              </div>

              {/* Experience Card 2 */}
              <div className="glass-card-hover p-4 sm:p-5 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    ICT Intern
                  </h3>
                  <span className="text-[10px] sm:text-xs font-medium text-accent-blue bg-accent-blue/10 border border-accent-blue/20 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full self-start flex-shrink-0">
                    Mar 2023 — Aug 2023
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-medium text-dark-400 flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="w-2 h-2 rounded-full bg-accent-purple flex-shrink-0" />
                  Heritage Energy Operational Services Ltd (HEOSL) · Warri, Delta State
                </div>
                <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-dark-300 leading-relaxed">
                  <li>
                    Built a Django-based web application for computer-based testing, streamlining the company&apos;s internship recruitment process and reducing manual effort.
                  </li>
                  <li>
                    Assigned to develop a hospital management system using two parallel approaches: HTML/CSS/PHP and Django/Python, gaining comparative full-stack experience.
                  </li>
                  <li>
                    Delivered IT support across the organisation, resolving hardware issues and minimising operational downtime.
                  </li>
                  <li>
                    Completed field operations training alongside operatives, gaining insight into oil and gas workflows.
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Resume Button */}
            <div className="flex items-center justify-center pt-4">
              <a href="/OFE_RESUME.pdf" download="Amiteye_Ofeoritse_Resume">
                <motion.button
                  className="btn-outline flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Resume
                </motion.button>
              </a>
            </div>
          </div>
        </div>

        {/* SVG BRAIN CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
