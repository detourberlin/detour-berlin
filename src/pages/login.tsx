"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Login() {
  return (
    <div className="w-full min-h-screen bg-[#F5EFE7] text-[#4A403A] flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Login Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-16 mt-24">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Welcome Back to <span className="text-[#8D775F]">Detour Berlin</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="mt-5 text-lg md:text-xl text-[#8D775F] max-w-2xl"
        >
          Access your exclusive membership and premium benefits.
        </motion.p>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-[#E3D5C5] p-10 rounded-2xl shadow-2xl w-full max-w-md mt-16"
        >
          <h2 className="text-3xl font-bold text-center">Sign In</h2>
          <p className="mt-3 text-lg text-[#8D775F] text-center">
            Enter your details to continue your premium journey.
          </p>

          <form className="mt-6 flex flex-col gap-5">
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

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#4A403A" }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-[#8D775F] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-xl transition-all"
            >
              Login
            </motion.button>
          </form>

          {/* Links */}
          <div className="mt-5 text-center">
            <Link
              href="/forgot-password"
              className="text-[#8D775F] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="mt-2 text-center">
            <p>
              New here?{" "}
              <Link
                href="/create-account"
                className="text-[#8D775F] font-semibold hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Extra Space for Light Scrolling */}
      <div className="h-[60vh]"></div>
    </div>
  );
}
