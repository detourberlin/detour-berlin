"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="w-full bg-[#F5EFE7] text-[#4A403A] min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Forgot Password Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-16 mt-32">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Forgot Your Password?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-[#8D775F] max-w-2xl"
        >
          No worries, we got you. Enter your email to reset your password.
        </motion.p>

        {/* Reset Password Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-[#E3D5C5] p-10 rounded-2xl shadow-2xl w-full max-w-md mt-20"
        >
          <h2 className="text-3xl font-bold text-center">Reset Password</h2>

          <form className="mt-6 flex flex-col gap-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-lg rounded-md bg-[#F5EFE7] border border-[#8D775F] focus:outline-none focus:ring-2 focus:ring-[#8D775F]"
            />

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#4A403A" }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-[#8D775F] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-xl transition-all"
            >
              Send Reset Link
            </motion.button>
          </form>

          {/* Back to Login */}
          <div className="mt-5 text-center">
            <Link href="/login" className="text-[#8D775F] hover:underline">
              Back to Login
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Extra Space for Smooth Scrolling */}
      <div className="h-[50vh]"></div>
    </div>
  );
}
