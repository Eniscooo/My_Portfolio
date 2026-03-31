"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  status: "completed" | "in-progress";
  link?: string;
  link1?: string;
  link2?: string;
  link3?: string;
  gradient: string;
  accent: "blue" | "green" | "purple" | "orange" | "pink" | "cyan";
};

const projects: Project[] = [
  {
    id: 1,
    title: "Icampus",
    description:
      "Student-focused platform featuring interactive campus maps, scheduling tools, meal planners, and productivity features, all built to simplify university life.",
    tech: ["React Native", "Firebase", "Expo"],
    status: "completed" as const,
    link: "https://github.com/ofeoritse-amiteye/Icampus-Reactnative",
    gradient: "from-blue-500/10 to-cyan-500/10",
    accent: "blue",
  },
  {
    id: 2,
    title: "MediCore",
    description:
      "Hospital management system streamlining patient records, appointment scheduling, and operational workflows for healthcare administrators and staff.",
    tech: ["Django", "MySQL", "Python"],
    status: "completed" as const,
    link: "https://github.com/ofeoritse-amiteye/HOSPTAL-MANAGEMENT-SYSTEM",
    gradient: "from-green-500/10 to-emerald-500/10",
    accent: "green",
  },
  {
    id: 3,
    title: "Paradiso",
    description:
      "Real estate platform simplifying property buying and renting with intuitive search, listings management, and a seamless user experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "in-progress" as const,
    link: "https://github.com/ofeoritse-amiteye/Paradiso",
    gradient: "from-purple-500/10 to-violet-500/10",
    accent: "purple",
  },
  {
    id: 4,
    title: "Cilia",
    description:
      "Fintech application redefining financial access with modern tools for payments, savings, and financial management — built for the underserved.",
    tech: ["React Native", "Node.js", "Firebase"],
    status: "in-progress" as const,
    link: "#",
    gradient: "from-orange-500/10 to-amber-500/10",
    accent: "orange",
  },
  {
    id: 5,
    title: "Trim",
    description:
      "A platform connecting brands with creators — streamlining collaboration, campaign management, and content delivery at scale.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    status: "in-progress" as const,
    link: "#",
    gradient: "from-pink-500/10 to-rose-500/10",
    accent: "pink",
  },
  {
    id: 6,
    title: "Fantasy Sports",
    description:
      "Developed a dynamic fantasy sports app supporting daily lineup management, real-time match scoring, head-to-head matchmaking, automated lineup validation, plus regional and continental leaderboards.",
    tech: ["React", "Node.js", "Firebase"],
    status: "completed" as const,
    link: "#",
    gradient: "from-indigo-500/10 to-sky-500/10",
    accent: "blue",
  },
  {
    id: 7,
    title: "Client Websites",
    description:
      "Various responsive, production-ready web applications built for clients, each tailored to specific business needs with clean, modern design.",
    tech: ["React", "Next.js", "Tailwind CSS", "Firebase"],
    status: "completed" as const,
    link: "#",
    link1: "https://www.timerockfamilyentertainment.com/",
    link2: "https://trim-hq.com/",
    link3: "https://valss.vercel.app/",
    gradient: "from-cyan-500/10 to-teal-500/10",
    accent: "cyan",
  },
];

const accentMap: Record<string, { border: string; text: string; bg: string; glow: string }> = {
  blue: {
    border: "border-blue-500/20 hover:border-blue-400/50",
    text: "text-blue-400",
    bg: "bg-blue-500/10",
    glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]",
  },
  green: {
    border: "border-green-500/20 hover:border-green-400/50",
    text: "text-green-400",
    bg: "bg-green-500/10",
    glow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]",
  },
  purple: {
    border: "border-purple-500/20 hover:border-purple-400/50",
    text: "text-purple-400",
    bg: "bg-purple-500/10",
    glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]",
  },
  orange: {
    border: "border-orange-500/20 hover:border-orange-400/50",
    text: "text-orange-400",
    bg: "bg-orange-500/10",
    glow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]",
  },
  pink: {
    border: "border-pink-500/20 hover:border-pink-400/50",
    text: "text-pink-400",
    bg: "bg-pink-500/10",
    glow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.1)]",
  },
  cyan: {
    border: "border-cyan-500/20 hover:border-cyan-400/50",
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
    glow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]",
  },
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const colors = accentMap[project.accent];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative bg-gradient-to-br ${project.gradient} backdrop-blur-sm border ${colors.border} ${colors.glow} rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-500 hover:-translate-y-2`}
    >
      {/* Top row: title + status */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-4">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Project icon */}
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}
          >
            <span className={`text-base sm:text-lg font-bold ${colors.text}`}>
              {project.title.charAt(0)}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-white/90 transition-colors">
            {project.title}
          </h3>
        </div>
        <span
          className={`self-start flex-shrink-0 ${
            project.status === "completed"
              ? "status-completed"
              : "status-in-progress"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              project.status === "completed" ? "bg-green-400" : "bg-yellow-400 animate-pulse"
            }`}
          />
          {project.status === "completed" ? "Completed" : "In Progress"}
        </span>
      </div>

      {/* Description */}
      <p className="text-dark-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
        {project.description}
      </p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-dark-800/80 border border-dark-600/50 text-dark-200"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Link */}
      {project.link !== "#" ? (
        <Link
          href={project.link ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 text-xs sm:text-sm font-medium ${colors.text} hover:underline underline-offset-4 transition-all`}
        >
          View on GitHub
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-x-1 transition-transform"
          >
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </Link>
      ) : project.link1 || project.link2 || project.link3 ? (
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <Link
            href={project.link1 ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium ${colors.text} hover:underline underline-offset-4 transition-all`}
          >
            Website 1
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
          </Link>
          <span className="text-dark-600 text-xs hidden sm:inline">|</span>
          <Link
            href={project.link2 ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium ${colors.text} hover:underline underline-offset-4 transition-all`}
          >
            Website 2
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
          </Link>
          <span className="text-dark-600 text-xs hidden sm:inline">|</span>
          <Link
            href={project.link3 ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium ${colors.text} hover:underline underline-offset-4 transition-all`}
          >
            Website 3
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
          </Link>
        </div>
      ) : (
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-dark-500">
          private project
        </span>
      )}
    </motion.div>
  );
};

const PortfolioPage = () => {
  return (
    <motion.div
      className="h-full overflow-auto"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="relative">
        {/* Hero Section */}
        <div className="w-full flex flex-col items-center justify-center text-center py-12 sm:py-16 md:py-24 px-4 relative">
          <div className="hero-glow top-0 left-1/2 -translate-x-1/2 z-0" />
          <div className="grid-bg absolute inset-0 z-0" />

          <motion.p
            className="text-dark-400 text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4 relative z-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Selected Work
          </motion.p>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 relative z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            My <span className="gradient-text">Projects</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-dark-300 max-w-2xl mx-auto relative z-10 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Real-world products and applications — built to ship, not just to demo.
          </motion.p>

          <div className="divider-glow w-32 sm:w-48 mt-6 sm:mt-8 relative z-10" />
        </div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pb-16 sm:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
