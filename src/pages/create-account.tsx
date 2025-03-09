"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function CreateAccount() {
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
          Create Your Account
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-lg md:text-2xl text-[#8D775F] max-w-2xl"
        >
          Join Detour Berlin and access exclusive benefits.
        </motion.p>
      </section>

      {/* Create Account Form */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#E3D5C5] p-12 rounded-2xl shadow-2xl w-full max-w-lg"
        >
          <h2 className="text-4xl font-bold text-center">Sign Up</h2>

          {/* Form */}
          <form className="mt-8 flex flex-col gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 text-lg rounded-md bg-[#F5EFE7] border border-[#8D775F] focus:outline-none focus:ring-2 focus:ring-[#8D775F]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 text-lg rounded-md bg-[#F5EFE7] border border-[#8D775F] focus:outline-none focus:ring-2 focus:ring-[#8D775F]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 text-lg rounded-md bg-[#F5EFE7] border border-[#8D775F] focus:outline-none focus:ring-2 focus:ring-[#8D775F]"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 text-lg rounded-md bg-[#F5EFE7] border border-[#8D775F] focus:outline-none focus:ring-2 focus:ring-[#8D775F]"
            />

            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#4A403A" }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-[#8D775F] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-xl transition-all"
            >
              Sign Up
            </motion.button>
          </form>

          {/* Back to Login */}
          <div className="mt-6 text-center">
            <p>
              Already have an account?{" "}
              <a
                href="/login"
                className="text-[#8D775F] font-semibold hover:underline"
              >
                Login here
              </a>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Extra Space for Scrolling Feel */}
      <div className="h-[50vh]"></div>
    </div>
  );
}
