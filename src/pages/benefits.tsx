"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function Benefits() {
  return (
    <div className="w-full bg-[#F5EFE7] text-[#4A403A]">
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
          <span className="text-[#8D775F]">Exclusive</span> Membership Benefits
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-lg md:text-2xl text-[#8D775F] max-w-2xl"
        >
          Unlock a world of{" "}
          <strong>luxury, exclusivity, and elite experiences.</strong>
          Gain access to{" "}
          <strong>
            VIP events, limited fashion drops, and unparalleled perks.
          </strong>
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#4A403A" }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-[#8D775F] text-white px-12 py-4 rounded-full font-semibold text-lg shadow-xl transition-all"
        >
          Apply for Membership
        </motion.button>
      </section>

      {/* Scrolling Benefits Sections */}
      {benefitsData.map((section, index) => (
        <motion.section
          key={index}
          className={`flex flex-col justify-center items-center min-h-screen px-8 text-center ${
            index % 2 === 0 ? "bg-[#E3D5C5]" : "bg-[#D6C4A8]"
          }`}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold">
            {section.icon} {section.title}
          </h2>
          <p className="mt-4 text-lg md:text-xl max-w-3xl text-[#8D775F]">
            {section.description}
          </p>
        </motion.section>
      ))}

      {/* Final Call to Action */}
      <motion.section
        className="flex flex-col items-center justify-center min-h-screen text-center px-6 py-16 bg-[#F5EFE7]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-6xl font-extrabold text-[#8D775F]">
          Join the Elite
        </h2>
        <p className="mt-4 text-lg md:text-xl text-[#4A403A] max-w-2xl">
          Become a member of **Detour Berlin** and unlock luxury beyond limits.
        </p>

        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#4A403A" }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-[#8D775F] text-white px-14 py-4 rounded-full font-semibold text-lg shadow-xl transition-all"
        >
          Apply Now
        </motion.button>
      </motion.section>
    </div>
  );
}

// Benefits Data Array
const benefitsData = [
  {
    icon: "✨",
    title: "Private VIP Parties",
    description:
      "Experience exclusive, invite-only luxury events with the elite.",
  },
  {
    icon: "🛍️",
    title: "Early Fashion Access",
    description: "Be the first to get access to limited luxury fashion drops.",
  },
  {
    icon: "🎟️",
    title: "Exclusive Perks & Rewards",
    description:
      "Get priority access, concierge services, and unique member-only rewards.",
  },
  {
    icon: "🌎",
    title: "Global Luxury Experiences",
    description:
      "Enjoy exclusive retreats, high-end travel experiences, and elite networking opportunities.",
  },
  {
    icon: "🏆",
    title: "Premium Lounge Access",
    description:
      "Access high-end lounges, private networking spaces, and secret VIP clubs.",
  },
  {
    icon: "💎",
    title: "Luxury Brand Collaborations",
    description:
      "Get first-hand access to collaborations with the most prestigious brands.",
  },
  {
    icon: "🚗",
    title: "Elite Concierge Services",
    description:
      "Personalized services including luxury travel bookings, dining, and event planning.",
  },
];
