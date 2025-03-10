"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WelcomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/premium-background.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-6">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <Image
            src="/logo.png"
            alt="Detour Berlin Logo"
            width={280}
            height={150}
            className="brightness-125"
          />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[3.5rem] font-extrabold uppercase tracking-wide text-[#E6CBA8] font-serif"
        >
          The Future of Exclusivity Unfolds
        </motion.h1>

        {/* Subtext Animation */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          className="text-2xl mt-4 max-w-3xl text-gray-300 font-light italic"
        >
          A new era of prestige designed for the select few
        </motion.p>

        {/* Subtle Gold Line Animation */}
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "50%" }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="mt-6 h-[2px] bg-[#E6CBA8]"
        ></motion.div>
      </div>
    </div>
  );
}
