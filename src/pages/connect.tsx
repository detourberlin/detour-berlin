"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Connect() {
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
          Connect with <span className="text-[#8D775F]">Detour Berlin</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-lg md:text-2xl text-[#8D775F] max-w-2xl"
        >
          Have questions? Want to collaborate? Reach out to us and let’s create
          something extraordinary.
        </motion.p>
      </section>

      {/* Contact Form Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#E3D5C5] p-10 rounded-2xl shadow-2xl w-full max-w-2xl"
        >
          <h2 className="text-4xl font-bold text-center">Get in Touch</h2>
          <p className="mt-4 text-lg text-[#8D775F] text-center">
            Fill out the form and we’ll get back to you as soon as possible.
          </p>

          {/* Contact Form */}
          <form className="mt-8 flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 text-lg rounded-md bg-[#F5EFE7] border border-[#8D775F] focus:outline-none focus:ring-2 focus:ring-[#8D775F]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 text-lg rounded-md bg-[#F5EFE7] border border-[#8D775F] focus:outline-none focus:ring-2 focus:ring-[#8D775F]"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-3 text-lg rounded-md bg-[#F5EFE7] border border-[#8D775F] focus:outline-none focus:ring-2 focus:ring-[#8D775F]"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#4A403A" }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-[#8D775F] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-xl transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* Social Media Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 py-16 bg-[#F5EFE7]">
        <h2 className="text-5xl font-extrabold text-[#8D775F]">Follow Us</h2>
        <p className="mt-4 text-lg md:text-xl text-[#4A403A] max-w-2xl">
          Stay updated on the latest events, drops, and news by following us on
          social media.
        </p>

        {/* Social Media Links */}
        <div className="mt-8 flex gap-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-[#8D775F] text-4xl transition-transform"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}

// Social Media Icons & Links
const socialLinks = [
  { icon: <FaInstagram />, link: "https://instagram.com" },
  { icon: <FaTwitter />, link: "https://twitter.com" },
  { icon: <FaFacebookF />, link: "https://facebook.com" },
  { icon: <FaYoutube />, link: "https://youtube.com" },
];
