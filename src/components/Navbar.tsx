"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, LogIn } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-lg shadow-md z-50 transition-all duration-300">
      <div className="w-full flex items-center justify-between px-8 py-4">
        {/* Company Name (Fully Left-Aligned) */}
        <div className="w-1/3">
          <Link href="/" className="text-2xl font-bold text-[#4A403A]">
            Detour Berlin
          </Link>
        </div>

        {/* Navigation Menu (Centered) */}
        <div className="w-1/3 flex justify-center space-x-8 text-lg font-medium text-[#4A403A]">
          <Link href="/benefits" className="hover:text-[#8D775F] transition">
            Benefits
          </Link>
          <Link href="/about" className="hover:text-[#8D775F] transition">
            About
          </Link>
          <Link href="/pricing" className="hover:text-[#8D775F] transition">
            Pricing
          </Link>
          <Link href="/membership" className="hover:text-[#8D775F] transition">
            Membership
          </Link>
          <Link href="/connect" className="hover:text-[#8D775F] transition">
            Connect
          </Link>
        </div>

        {/* Login Icon (Fully Right-Aligned) */}
        <div className="w-1/3 flex justify-end">
          <Link
            href="/login"
            className="text-[#4A403A] hover:text-[#8D775F] transition"
          >
            <LogIn size={28} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#4A403A]"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col items-center bg-[#F5EFE7] bg-opacity-90 backdrop-blur-md py-4 space-y-4"
        >
          <Link
            href="/benefits"
            className="hover:text-[#8D775F] transition"
            onClick={() => setIsOpen(false)}
          >
            Benefits
          </Link>
          <Link
            href="/about"
            className="hover:text-[#8D775F] transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/pricing"
            className="hover:text-[#8D775F] transition"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/membership"
            className="hover:text-[#8D775F] transition"
            onClick={() => setIsOpen(false)}
          >
            Membership
          </Link>
          <Link
            href="/connect"
            className="hover:text-[#8D775F] transition"
            onClick={() => setIsOpen(false)}
          >
            Connect
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
