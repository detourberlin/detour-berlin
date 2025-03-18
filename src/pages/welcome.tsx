"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WelcomePage() {
  const videoUrl = "https://oxaedsctutegvubi.public.blob.vercel-storage.com/premium-background-OppH6jteGJSIUwtXc2tqyMBnTfVLiX.mp4";
  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

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

        {/* Subtext - "Soft Fade" */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-100 font-light italic tracking-wide mb- sm:mb-4"
        >
          A New Era of Exclusivity is Unfolding
        </motion.p>

        {/* Gold Line - "Elegant Expand" */}
        <motion.div
          initial={{ width: "0%", opacity: 0 }}
          animate={{ width: "67%", opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          className="h-[2px] bg-gray-100 shadow-md"
        ></motion.div>
      </div>
    </div>
  );
}
