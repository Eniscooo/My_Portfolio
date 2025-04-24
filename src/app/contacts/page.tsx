
"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Get in touch.";

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setIsSending(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      )
      .then(
        () => {
          setIsSending(false);
          setIsSent(true);
          form.current?.reset();
        },
        () => {
          setIsSending(false);
          setError(true);
        }
      );
  };

  const form = useRef<HTMLFormElement>(null);

  return (
    <motion.div
      className="md:h-screen h-100vh bg-gradient-to-b from-blue-50 to-red-100 "
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col custom-con:flex-row px-4 sm:px-8 md:px-12 custom-con:px-20 xl:px-48 justify-center overflow-scroll ">
        {/* TEXT CONTAINER */}
        <motion.div
          className=" custom-con:h-100vh custom-con:w-1/2 flex items-center justify-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="hidden custom-con:block ">
            <Image src="/mail.png" alt="" height={150} width={150} />
          </div>
          <div className="md:text-7xl text-4xl mb-5">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 3,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>
        {/* FORM CONTAINER */}
        <motion.form
          onSubmit={sendEmail}
          ref={form}
          className="custom-con:h-custom custom-con:mt-10 custom-con:w-1/2 bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6 justify-center custom-con:px mb-10 "
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{minHeight:"500px"}}
        >
          <div className=" hidden custom-con:block items-center justify-center w-full text-center font-bold text-2xl mt-5">
            <h1>send me a message</h1>
          </div>
          <motion.span
            initial={{ y: -10, opacity:0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hello there,
          </motion.span>
          <motion.textarea
            rows={4}
            className=" border-b-2 border-gray-300 outline-none p-6 resize-none"
            name="message"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.span
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            E-mail address :
          </motion.span>
          <motion.input
            name="user_email"
            type="text"
            className="border-b-2 border-gray-300 outline-none p-2"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          {error && <p className="text-red-500">Failed. Please try again.</p>}
        <motion.button
          type="submit"
          className="bg-purple-200 rounded font-semibold text-gray-600 p-4 hover:bg-[#1A4870] hover:text-white transition-all duration-300 mb-5"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSending ? (
            <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <circle cx="4" cy="12" r="3" fill="currentColor">
                <animate id="svgSpinners3DotsBounce0" attributeName="cy" begin="0;svgSpinners3DotsBounce1.end+0.25s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12" />
              </circle>
              <circle cx="12" cy="12" r="3" fill="currentColor">
                <animate attributeName="cy" begin="svgSpinners3DotsBounce0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12" />
              </circle>
              <circle cx="20" cy="12" r="3" fill="currentColor">
                <animate id="svgSpinners3DotsBounce1" attributeName="cy" begin="svgSpinners3DotsBounce0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12" />
              </circle>
            </svg>
            </div>
          ) : isSent ? (
            "Sent!"
          ) : (
            "Send"
          )}
        </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default ContactPage;