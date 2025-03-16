"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function WelcomePage() {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    async function fetchVideoUrl() {
      try {
        const res = await fetch("/api/get-video");
        const data = await res.json();

        if (res.ok) {
          setVideoUrl(data.url);
        } else {
          console.error("Error fetching video:", data.error);
        }
      } catch (err) {
        console.error("Failed to load video", err);
      }
    }

    fetchVideoUrl();
  }, []);

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-black">
      {/* Background Video */}
      {videoUrl && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center text-center text-white px-6">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-[200px] sm:w-[260px] md:w-[320px] lg:w-[360px] xl:w-[400px] mb-10 sm:mb-14"
        >
          <Image
            src="/logo_white-2.png"
            alt="Detour Berlin Logo"
            width={400}
            height={180}
            className="w-full h-auto brightness-[1.3] drop-shadow-lg"
          />
        </motion.div>

        {/* Main Heading - "Smooth Slide Up" */}
        <motion.h1
          initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[1.5rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[3.5rem] font-bold uppercase tracking-wide text-[#2980B9] font-serif mb-6"
        >
          Unfolding Soon
        </motion.h1>

        {/* Subtext - "Soft Fade" */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-300 font-light italic tracking-wide mb-3 sm:mb-4"
        >
          A New Era of Exclusivity is Unfolding
        </motion.p>

        {/* Gold Line - "Elegant Expand" */}
        <motion.div
          initial={{ width: "0%", opacity: 0 }}
          animate={{ width: "67%", opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          className="h-[2px] bg-[#2980B9] shadow-md"
        ></motion.div>
      </div>
    </div>
  );
}
