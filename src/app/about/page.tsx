"use client";
import Brain from "@/components/navbar/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

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
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-10 flex flex-col gap-16 md:gap-24 lg:gap-32 xl:gap-40 lg:w-2/3 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-5 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <div className="w-full flex justify-center items-center">
              <Image
                src="/ofe.jpg"
                alt=""
                width={112}
                height={112}
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full object-cover"
              />
            </div>
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">About Me</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-sm sm:text-base md:text-lg text-justify leading-relaxed">
              My name is Amiteye Ofeoritse Favour. I was born and have lived all my life in Warri, the commercial city of Delta State, Nigeria. I am a recent graduate of Covenant University with a BSc in Management Information Systems (MIS). I bring a blend of front-end and back-end development skills, enthusiastically working on technical projects with a flair for making simple and efficient solutions out of complex problems. I’m a quick learner, responsible, goal-oriented, and a team player. When I’m not coding, you will find me discovering new technologies and working on other projects to further my skills on a daily basis.
            </p>
            <div className="flex w-full items-center justify-between mt-6">
              {/* BIOGRAPHY SCROLL SVG */}
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
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
              {/* BIOGRAPHY SIGN SVG */}
              <div className="ml-auto">
                <Image src={"/signature.png"} alt="" height={77} width={185} />
              </div>
            </div>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-8 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-xl sm:text-2xl md:text-3xl"
            >
              Skills
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-3 md:gap-4 flex-wrap"
            >
              {[
                "JavaScript",
                "Python",
                "PHP",
                "TypeScript",
                "React.js",
                "React Native",
                "Next.js",
                "Tailwind CSS",
                "Framer Motion",
                "Firebase",
                "Git",
                "Mysql",
                "Django",
                "Flutter",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="rounded p-1.5 md:p-2 text-xs md:text-sm cursor-pointer bg-gradient-to-r from-gray-800 to-black text-white hover:bg-gradient-to-r hover:from-white hover:to-gray-200 hover:text-black transition-all duration-300"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
            {/* SKILL SCROLL SVG */}
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
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-8 justify-center pb-24"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl sm:text-3xl md:text-4xl "
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex flex-col items-center mb-5">
                <div className="w-full bg-white p-4 rounded-lg shadow-md ">
                {/* JOB TITLE */}
                <div className="text-lg font-semibold mb-2">ICT Intern</div>
                {/* JOB DESC */}
                <div className="text-sm italic mb-2">
                  During my 6-month internship at Heritage Energy Operational Services Limited (HEOSL), I contributed to software development projects and provided support for various hardware issues within the ICT department.
                </div>
                {/* JOB DATE */}
                <div className="text-red-400 text-sm font-semibold mb-2">
                  March 2024 - August 2024
                </div>
                {/* JOB COMPANY */}
                <div className="bg-gray-200 p-2 text-sm font-semibold rounded">
                  Heritage Energy Operational Services Limited (HEOSL)
                </div>
              </div>
              </div>

              {/* EXPERIENCE LIST ITEM -2 */}
              <div className="flex flex-col items-center mb-5">
                <div className="w-full bg-white p-4 rounded-lg shadow-md">
                  {/* JOB TITLE */}
                  <div className="text-lg font-semibold mb-2">Freelancer</div>
                  {/* JOB DESC */}
                  <div className="text-sm italic mb-2">
                    I provided web solutions, applying a range of technologies to address client requirements.
                  </div>
                  {/* JOB DATE */}
                  <div className="text-red-400 text-sm font-semibold mb-2">
                    2022 - present
                  </div>
                </div>
              </div>
            </motion.div>
            <div className=" flex items-center justify-center">
              <a href="/RESUME.pdf" download={"resume"}><button className="p-2 rounded-lg ring-1 ring-white bg-slate-600 text-white hover:p-2.5 hover:bg-slate-500">Download resume</button></a>
            </div >
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;