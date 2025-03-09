import { motion } from "framer-motion";

interface MembershipCardProps {
  onClick?: () => void;
}

export default function MembershipCard({ onClick }: MembershipCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.1)", // Soft platinum glow
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="membership-card relative w-[420px] h-[240px] bg-primary rounded-3xl shadow-xl border border-gray-700 text-white p-6 flex flex-col justify-between overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {/* Subtle Platinum Glow Border */}
      <div className="absolute inset-0 rounded-3xl border border-[#A8A8A8] opacity-20"></div>

      {/* Edge Glow Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-[#8F8F8F] to-transparent opacity-10 animate-pulse"></div>

      {/* Top Section */}
      <div className="relative z-10">
        <h2 className="text-2xl font-extrabold text-[#C0C0C0] tracking-wide uppercase">
          VIP Membership
        </h2>
        <p className="text-[#A0A0A0] mt-2 text-sm">
          Exclusive luxury events & premium perks.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 flex justify-between items-center">
        <span className="text-sm text-[#8C8C8C] tracking-wider">#0001</span>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 rounded-full bg-[#232323] text-[#D0D0D0] font-semibold text-sm shadow-md border border-[#656565] hover:bg-[#2E2E2E] transition-all"
          onClick={onClick}
        >
          Join Now
        </motion.button>
      </div>
    </motion.div>
  );
}
