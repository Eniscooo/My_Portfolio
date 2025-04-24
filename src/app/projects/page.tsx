"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    color: "bg-gradient-to-b from-red-100 to-green-500",
    title: "React Native Campus Companion(React native,Firebase)",
    desc: "The Covenant University Student Digital Assistant is a versatile app built with React Native and Firebase, designed to simplify student life. It features an interactive campus map, personalized reading timetable, meal planner, and more, all tailored to the needs of University students. This app empowers students to navigate campus with ease, manage their schedules, and stay organized, making it an essential tool for academic success.",
    img: "/sta.jpg",
    link: "https://github.com/ofeoritse-amiteye/Icampus-Reactnative",
  },
  {
    id: 2,
    color: "bg-gradient-to-b from-green-500 to-blue-400",
    title: "Hospital Management System (django,Mysql)",
    desc: "The Hospital Management System is a comprehensive application developed with Django and MySQL. This application streamlines patient management, appointment scheduling, and medical record-keeping. It offers a user-friendly interface for staff and administrators, ensuring efficient hospital operations and improved patient care.",
    img: "/hms.webp",
    link: "https://github.com/ofeoritse-amiteye/HOSPTAL-MANAGEMENT-SYSTEM",
  },
  {
    id: 3,
    color: "bg-gradient-to-b from-blue-400 to-red-500",
    title: "Smart Inventory Management System (React,firebase)",
    desc: "The Smart Inventory Management System is a robust application developed using React and Firebase. This system optimizes inventory control, product tracking, and stock management. It features a user-friendly interface that enables businesses to monitor stock levels in real-time, receive alerts for expiring products, and generate detailed sales analytics. With seamless integration of Firebase's real-time database, this application ensures accurate and efficient inventory operations, helping businesses reduce waste and improve profitability.",
    img: "/inventory.jpg",
    link: "https://github.com/ofeoritse-amiteye/Inventory-Management-system-with-react.js",
  },
  {
    id: 4,
    color: "bg-gradient-to-b from-red-500 to-teal-500",
    title: "CBT Web Application (Django,Mysql)",
    desc: "The Computer-Based Testing (CBT) System is a dynamic application developed using Django and MySQL. This system revolutionizes the examination process by providing a secure and efficient platform for conducting tests online. It features an intuitive interface for students and administrators, allowing for seamless test creation, automated grading, and detailed performance analytics. With robust backend support from Django and MySQL, this application ensures data integrity and a smooth testing experience.",
    img: "/test.jpg",
    link: "https://github.com/ofeoritse-amiteye/Django-CBT-WEB-APPLICATION",
  },
];

const heroVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const PortfolioPage = () => {
  return (
    <motion.div className="h-screen">
      <div className="flex flex-col relative ">
        <motion.div
          className="w-full h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-50 to-red-100 "
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#1A4870] to-green-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            My Portfolio
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-700 max-w-2xl mx-auto px-4 sm:px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Explore my work and see what I’ve been up to!
          </motion.p>
        </motion.div>

        {/* Items Section */}
        <div className="flex flex-col">
          {items.map((item) => (
            <div
              className={`${item.color} w-full flex items-center justify-center py-20 px-4`}
              key={item.id}
            >
              <div className="flex flex-col gap-8 text-white items-center max-w-4xl mx-auto">
                <div className="relative h-44 w-full md:h-64 md:w-96 lg:h-64 lg:w-3/4">
                  <Image
                    src={item.img}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h1 className="text-2xl md:text-4xl lg:text-3xl font-bold text-center">
                  {item.title}
                </h1>
                <p className="text-center text-sm md:text-base lg:text-lg max-w-prose">
                  {item.desc}
                </p>
                <Link href={item.link}>
                  <motion.button
                    className="p-2 bg-white text-gray-600 font-semibold rounded hover:bg-gray-100 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    See Demo
                  </motion.button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;