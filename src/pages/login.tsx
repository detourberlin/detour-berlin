"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Login() {
  return (
    <div className="w-full min-h-screen bg-[#F5EFE7] text-[#4A403A]">
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
          Welcome Back to <span className="text-[#8D775F]">Detour Berlin</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-lg md:text-2xl text-[#8D775F] max-w-2xl"
        >
          Access your exclusive membership and premium benefits.
        </motion.p>
      </section>

      {/* Login Form Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-[#E3D5C5] p-12 rounded-2xl shadow-2xl w-full max-w-lg"
        >
          <h2 className="text-4xl font-bold text-center">Sign In</h2>
          <p className="mt-4 text-lg text-[#8D775F] text-center">
            Enter your details to continue your premium journey.
          </p>

          {/* Login Form */}
          <form className="mt-8 flex flex-col gap-6">
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
              whileHover={{ scale: 1.1, backgroundColor: "#4A403A" }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-[#8D775F] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-xl transition-all"
            >
              Login
            </motion.button>
          </form>

          {/* Forgot Password & Sign Up Links */}
          <div className="mt-6 text-center">
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

      {/* Extra Space for Scrolling Feel */}
      <div className="h-[80vh]"></div>
    </div>
  );
}
