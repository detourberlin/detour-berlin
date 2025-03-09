"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function Membership() {
  return (
    <div className="w-full bg-[#F5EFE7] text-[#4A403A] min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-extrabold tracking-tight"
        >
          <span className="text-[#8D775F]">Exclusive</span> Membership
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-lg md:text-2xl text-[#8D775F] max-w-2xl"
        >
          Unlock a world of **exclusive perks, premium fashion drops, and VIP event access**.
        </motion.p>
      </section>

      {/* Membership Benefits */}
      <section className="w-full flex flex-wrap justify-center items-center gap-12 min-h-screen px-8">
        {benefitsData.map((benefit, index) => (
          <motion.div
            key={index}
            className="bg-[#E3D5C5] p-10 rounded-2xl shadow-2xl w-[320px] md:w-[400px] lg:w-[450px] text-center transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold">{benefit.title}</h2>
            <p className="mt-4 text-lg text-[#8D775F]">{benefit.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Final Call to Action */}
      <motion.section
        className="flex flex-col items-center justify-center min-h-screen text-center px-6 py-16 bg-[#F5EFE7]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-6xl font-extrabold text-[#8D775F]">Join the Elite Circle</h2>
        <p className="mt-4 text-lg md:text-xl text-[#4A403A] max-w-2xl">
          Secure your spot and **experience luxury, fashion, and exclusivity** with **Detour Berlin**.
        </p>

        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#4A403A" }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-[#8D775F] text-white px-14 py-4 rounded-full font-semibold text-lg shadow-xl transition-all"
        >
          Become a Member
        </motion.button>
      </motion.section>
    </div>
  );
}

// Membership Benefits Data
const benefitsData = [
  {
    title: "VIP Event Access",
    description: "Gain entry to exclusive Detour Berlin parties & luxury gatherings.",
  },
  {
    title: "Limited Edition Fashion",
    description: "Get early access to **premium clothing drops & collaborations**.",
  },
  {
    title: "Private Perks & Rewards",
    description: "Enjoy members-only benefits, priority reservations & more.",
  },
  {
    title: "Elite Community",
    description: "Network with like-minded individuals in a luxurious setting.",
  },
];
