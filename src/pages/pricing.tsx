"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function Pricing() {
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
          Exclusive <span className="text-[#8D775F]">Membership Pricing</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-lg md:text-2xl text-[#8D775F] max-w-2xl"
        >
          Choose your path to exclusivity—monthly or yearly premium access.
        </motion.p>
      </section>

      {/* Pricing Cards Section */}
      <section className="w-full flex flex-wrap justify-center items-center gap-12 min-h-screen px-8">
        {pricingData.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-[#E3D5C5] p-10 rounded-2xl shadow-2xl w-[320px] md:w-[400px] lg:w-[450px] text-center transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold">{plan.title}</h2>
            <p className="mt-4 text-lg text-[#8D775F]">{plan.description}</p>
            <p className="mt-6 text-5xl font-extrabold text-[#4A403A]">
              {plan.price}
            </p>
            <ul className="mt-6 space-y-3 text-lg text-[#4A403A]">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center justify-center gap-2">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#4A403A" }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-[#8D775F] text-white px-10 py-3 rounded-full font-semibold text-lg shadow-lg transition-all"
            >
              Get Started
            </motion.button>
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
        <h2 className="text-6xl font-extrabold text-[#8D775F]">
          Join the Elite
        </h2>
        <p className="mt-4 text-lg md:text-xl text-[#4A403A] max-w-2xl">
          Experience exclusive parties, fashion perks, and VIP access with{" "}
          <b>Detour Berlin</b>.
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

// Pricing Data Array
const pricingData = [
  {
    title: "Monthly Membership",
    description: "Access exclusive perks & premium events.",
    price: "$99/month",
    features: [
      "VIP Event Access",
      "Exclusive Fashion Drops",
      "Member-Only Perks",
    ],
  },
  {
    title: "Yearly Membership",
    description: "Unlock an all-year elite experience.",
    price: "$999/year",
    features: ["All Monthly Perks", "Private Parties", "Limited Edition Items"],
  },
];
