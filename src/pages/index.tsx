"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import MembershipCard from "@/components/MembershipCard";

export default function Home() {
  const router = useRouter();

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const hover3DEffect = {
    rest: { scale: 1, rotateX: 0, rotateY: 0 },
    hover: {
      scale: 1.05,
      rotateX: -5,
      rotateY: 5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen w-full bg-[#F5EFE7] text-[#4A403A]">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-6xl md:text-7xl font-extrabold tracking-tight"
        >
          Welcome to{" "}
          <motion.span whileHover={{ scale: 1.1 }} className="text-[#8D775F]">
            Detour Berlin
          </motion.span>
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
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="mt-12"
        >
          <MembershipCard onClick={() => router.push("/membership")} />
        </motion.div>
      </div>

      {/* Samba Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-[#E3D5C5] text-[#4A403A]"
      >
        <motion.h2
          variants={hover3DEffect}
          whileHover="hover"
          className="text-5xl font-bold"
        >
          The Elegance of{" "}
          <motion.span whileHover={{ scale: 1.1 }} className="text-[#8D775F]">
            Samba
          </motion.span>
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-lg md:text-xl text-[#8D775F]"
        >
          Experience high-class fashion and exclusive formal events.
        </motion.p>
      </motion.div>

      {/* Dyuloka Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-[#D6C4A8] text-[#4A403A]"
      >
        <motion.h2
          variants={hover3DEffect}
          whileHover="hover"
          className="text-5xl font-bold"
        >
          The Boldness of{" "}
          <motion.span whileHover={{ scale: 1.1 }} className="text-[#8D775F]">
            Dyuloka
          </motion.span>
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-lg md:text-xl text-[#8D775F]"
        >
          The best in streetwear culture, fashion, and events.
        </motion.p>
      </motion.div>

      {/* Why Join Detour Berlin */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-[#4A403A] text-white"
      >
        <h2 className="text-5xl font-bold">Why Join Detour Berlin?</h2>
        <ul className="mt-6 space-y-4 text-lg md:text-xl">
          {[
            "🌟 Access to private and exclusive events",
            "🛍️ Early access to premium clothing collections",
            "🎟️ VIP invitations to Samba and Dyuloka showcases",
            "💎 Special perks and membership-only privileges",
          ].map((benefit, index) => (
            <motion.li key={index} whileHover={{ scale: 1.1, x: 5 }}>
              {benefit}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-[#F5EFE7] text-[#4A403A]"
      >
        <h2 className="text-5xl font-bold">What Our Members Say</h2>
        <div className="mt-6 space-y-8">
          {[
            {
              quote:
                "Detour Berlin is unlike anything else. The events are next-level!",
              name: "Alexander R.",
            },
            {
              quote:
                "I love the exclusivity and the perks. Feels premium and high-end.",
              name: "Isabella M.",
            },
          ].map((testimonial, index) => (
            <motion.blockquote
              key={index}
              whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 1 : -1 }}
              className="text-lg md:text-xl italic text-[#8D775F]"
            >
              &quot;{testimonial.quote}&quot;
              <br />
              <span className="font-bold">- {testimonial.name}</span>
            </motion.blockquote>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-[#8D775F] text-white"
      >
        <h2 className="text-5xl font-bold">Get in Touch</h2>
        <p className="mt-4 text-lg md:text-xl">
          Have questions? Contact us for exclusive membership details.
        </p>
        <motion.button
          whileHover={{
            scale: 1.1,
            rotateX: -5,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-white text-[#4A403A] px-8 py-3 rounded-full font-semibold shadow-lg transition-all"
          onClick={() => router.push("/connect")}
        >
          Contact Us
        </motion.button>
      </motion.div>
    </div>
  );
}
