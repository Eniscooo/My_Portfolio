"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ofeoritse-amiteye",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    color: "hover:border-gray-400/50 hover:text-gray-300",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ofeoritse-amiteye-760527263/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    color: "hover:border-blue-400/50 hover:text-blue-400",
  },
  {
    label: "Email",
    href: "mailto:ofeoritseamiteye@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    color: "hover:border-purple-400/50 hover:text-purple-400",
  },
];

const ContactPage = () => {
  const [error, setError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const text = "Let's Build Something.";

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

  return (
    <motion.div
      className="h-full overflow-auto"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-full flex flex-col lg:flex-row px-4 sm:px-6 md:px-12 lg:px-16 xl:px-48 justify-center gap-6 sm:gap-8 lg:gap-16 py-6 sm:py-8">
        {/* LEFT SIDE — Info */}
        <motion.div
          className="lg:w-1/2 flex flex-col justify-center gap-5 sm:gap-6 md:gap-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Animated title */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: index * 0.05 }}
                className={letter === "." ? "gradient-text" : "text-white"}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <p className="text-dark-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
            Got a project in mind, want to collaborate, or just want to say hi? I&apos;d love to hear from you.
          </p>

          {/* Contact Links */}
          <div className="flex flex-col gap-2 sm:gap-3">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className={`group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-dark-600 bg-dark-800/50 text-dark-200 transition-all duration-300 ${link.color}`}
              >
                <div className="text-dark-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {link.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-white text-xs sm:text-sm">{link.label}</p>
                  <p className="text-[10px] sm:text-xs text-dark-400 truncate">
                    {link.href.replace("mailto:", "").replace("https://", "").replace("www.", "")}
                  </p>
                </div>
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
                  className="ml-auto text-dark-500 group-hover:translate-x-1 transition-transform flex-shrink-0"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE — Form */}
        <motion.form
          onSubmit={sendEmail}
          ref={form}
          className="lg:w-1/2 glass-card p-5 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-5 justify-center mb-6 lg:mb-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ minHeight: "400px" }}
        >
          <h2 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Send a message</h2>
          <div className="divider-glow !my-0" />

          <div className="flex flex-col gap-1.5">
            <label className="text-xs sm:text-sm font-medium text-dark-300">
              Your Message
            </label>
            <motion.textarea
              rows={4}
              className="w-full bg-dark-800/80 border border-dark-600 rounded-xl p-3 sm:p-4 text-dark-100 text-xs sm:text-sm placeholder:text-dark-500 outline-none resize-none focus:border-accent-blue/50 focus:shadow-glow transition-all duration-300"
              name="message"
              placeholder="Tell me about your project or idea..."
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs sm:text-sm font-medium text-dark-300">
              Your Email
            </label>
            <motion.input
              name="user_email"
              type="email"
              className="w-full bg-dark-800/80 border border-dark-600 rounded-xl p-3 sm:p-4 text-dark-100 text-xs sm:text-sm placeholder:text-dark-500 outline-none focus:border-accent-blue/50 focus:shadow-glow transition-all duration-300"
              placeholder="you@example.com"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </div>

          {error && (
            <p className="text-red-400 text-xs sm:text-sm flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
              </svg>
              Something went wrong. Please try again.
            </p>
          )}

          <motion.button
            type="submit"
            className="btn-primary w-full flex items-center justify-center gap-2 mt-1 sm:mt-2 text-sm sm:text-base !py-2.5 sm:!py-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSending ? (
              <div className="flex items-center justify-center gap-1">
                <div className="w-2 h-2 rounded-full bg-white/80 animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 rounded-full bg-white/80 animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 rounded-full bg-white/80 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            ) : isSent ? (
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Sent Successfully!
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </span>
            )}
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
