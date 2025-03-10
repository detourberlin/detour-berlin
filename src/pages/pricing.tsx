"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function Pricing() {
  const router = useRouter();

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
          Choose Your <span className="text-[#8D775F]">Exclusive Access</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-lg md:text-2xl text-[#8D775F] max-w-2xl"
        >
          Elevate your status with premium membership options tailored for the
          elite.
        </motion.p>
      </section>

      {/* Scrolling Pricing Sections */}
      {pricingData.map((plan, index) => (
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
          <h2 className="text-5xl font-bold">{plan.title}</h2>
          <p className="mt-4 text-lg md:text-xl max-w-3xl text-[#8D775F]">
            {plan.description}
          </p>
          <p className="mt-6 text-5xl font-extrabold text-[#4A403A]">
            {plan.price}
          </p>

          {/* Features */}
          <ul className="mt-6 space-y-4 text-lg text-[#4A403A] font-medium">
            {plan.features.map((feature, i) => (
              <li key={i} className="text-xl">
                {feature}
              </li>
            ))}
          </ul>

          {/* Call to Action */}
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "#4A403A",
              color: "#F5EFE7",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/membership")}
            className="mt-8 bg-[#8D775F] text-white px-14 py-4 rounded-full font-semibold text-lg shadow-xl 
                      transition-all duration-300 border-2 border-transparent hover:border-[#F5EFE7]"
          >
            Get Started
          </motion.button>
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
          Unlock Exclusive Benefits
        </h2>
        <p className="mt-4 text-lg md:text-xl text-[#4A403A] max-w-2xl">
          Get VIP access, premium fashion drops, and luxury experiences with{" "}
          <b>Detour Berlin</b>.
        </p>

        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: "#4A403A",
            color: "#F5EFE7",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/membership")}
          className="mt-8 bg-[#8D775F] text-white px-14 py-4 rounded-full font-semibold text-lg shadow-xl 
                    transition-all duration-300 border-2 border-transparent hover:border-[#F5EFE7]"
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
    description: "Experience exclusive perks & premium events.",
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
