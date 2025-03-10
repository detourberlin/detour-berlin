"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Import useRouter
import Navbar from "@/components/Navbar";

export default function About() {
  const router = useRouter(); // Initialize router

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
          Discover <span className="text-[#8D775F]">Detour Berlin</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-lg md:text-2xl text-[#8D775F] max-w-2xl"
        >
          A movement beyond fashion—where exclusivity meets culture, blending
          high-end <strong>elegance</strong> with{" "}
          <strong>bold streetwear</strong>.
        </motion.p>
      </section>

      {/* Scrolling Sections */}
      {aboutData.map((section, index) => (
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
          <motion.div
            whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? -2 : 2 }}
            className="text-6xl"
          >
            {section.icon}
          </motion.div>
          <h2 className="text-5xl font-bold mt-4">{section.title}</h2>
          <p className="mt-4 text-lg md:text-xl max-w-3xl text-[#4A403A]">
            {section.description}
          </p>
        </motion.section>
      ))}

      {/* Final Call to Action */}
      <motion.section
        className="flex flex-col items-center justify-center min-h-screen text-center px-6 py-16 bg-[#4A403A] text-white"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-6xl font-extrabold">Be Part of the Future</h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Join <strong>Detour Berlin</strong> and redefine what it means to be
          exclusive.
        </p>

        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#8D775F" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/membership")} // Redirect to Membership Page
          className="mt-8 bg-white text-[#4A403A] px-14 py-4 rounded-full font-semibold text-lg shadow-xl transition-all"
        >
          Join the Movement
        </motion.button>
      </motion.section>
    </div>
  );
}

// About Data Array
const aboutData = [
  {
    icon: "🏛️",
    title: "Our Legacy",
    description:
      "Built on a foundation of luxury and culture, Detour Berlin redefines premium fashion and experiences.",
  },
  {
    icon: "🎭",
    title: "The Vision",
    description:
      "To bridge the gap between high-end fashion and streetwear culture, making exclusivity an experience.",
  },
  {
    icon: "👑",
    title: "Who We Are",
    description:
      "A collective of designers, creatives, and innovators pushing the boundaries of luxury.",
  },
  {
    icon: "🚀",
    title: "The Future",
    description:
      "Innovating the industry with new trends, elite memberships, and unparalleled experiences.",
  },
];
