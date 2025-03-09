"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 
import Navbar from "@/components/Navbar";
import MembershipCard from "@/components/MembershipCard";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter(); 

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen w-full bg-[#F5EFE7] text-[#4A403A]">
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-6xl md:text-7xl font-extrabold tracking-tight"
        >
          Welcome to <span className="text-[#8D775F]">Detour Berlin</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mt-4 text-lg md:text-xl text-[#8D775F]"
        >
          A premium experience for exclusive members.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#4A403A" }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-[#8D775F] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all"
          onClick={() => router.push("/membership")} 
        >
          Join Now
        </motion.button>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mt-12"
        >
          <MembershipCard onClick={() => router.push("/membership")} />
        </motion.div>
      </div>

      <div className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-[#E3D5C5] text-[#4A403A]">
        <motion.h2 initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }} className="text-5xl font-bold">
          The Elegance of <span className="text-[#8D775F]">Samba</span>
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }} className="mt-4 text-lg md:text-xl text-[#8D775F]">
          Experience high-class fashion and exclusive formal events.
        </motion.p>
      </div>

      <div className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-[#D6C4A8] text-[#4A403A]">
        <motion.h2 initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }} className="text-5xl font-bold">
          The Boldness of <span className="text-[#8D775F]">Dyuloka</span>
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }} className="mt-4 text-lg md:text-xl text-[#8D775F]">
          The best in streetwear culture, fashion, and events.
        </motion.p>
      </div>

      <div className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-[#4A403A] text-white">
        <motion.h2 initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }} className="text-5xl font-bold">
          Why Join Detour Berlin?
        </motion.h2>
        <motion.ul initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }} className="mt-6 space-y-4 text-lg md:text-xl">
          <li>🌟 Access to private and exclusive events</li>
          <li>🛍️ Early access to premium clothing collections</li>
          <li>🎟️ VIP invitations to Samba and Dyuloka showcases</li>
          <li>💎 Special perks and membership-only privileges</li>
        </motion.ul>
      </div>

      <div className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-[#F5EFE7] text-[#4A403A]">
        <motion.h2 initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }} className="text-5xl font-bold">
          What Our Members Say
        </motion.h2>

        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }} className="mt-6 space-y-8">
          <blockquote className="text-lg md:text-xl italic text-[#8D775F]">
            "Detour Berlin is unlike anything else. The events are next-level!"
            <br />
            <span className="font-bold">- Alexander R.</span>
          </blockquote>

          <blockquote className="text-lg md:text-xl italic text-[#8D775F]">
            "I love the exclusivity and the perks. Feels premium and high-end."
            <br />
            <span className="font-bold">- Isabella M.</span>
          </blockquote>
        </motion.div>
      </div>

      <div className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-[#8D775F] text-white">
        <motion.h2 initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }} className="text-5xl font-bold">
          Get in Touch
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }} className="mt-4 text-lg md:text-xl">
          Have questions? Contact us for exclusive membership details.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#4A403A" }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-white text-[#4A403A] px-8 py-3 rounded-full font-semibold shadow-lg transition-all"
          onClick={() => router.push("/connect")}
        >
          Contact Us
        </motion.button>
      </div>
    </div>
  );
}
