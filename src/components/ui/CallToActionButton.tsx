import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CallToActionButton = () => {
  return (
    <motion.a
      href="#contact"
      initial={{ scale: 1 }}
      animate={{
        scale: [1, 1.05, 1],
        boxShadow: [
          "0 0 0px rgba(0,0,0,0)",
          "0 0 15px rgba(236, 72, 153, 0.6)",
          "0 0 0px rgba(0,0,0,0)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.08,
        transition: { type: "spring", stiffness: 200 },
      }}
      whileTap={{ scale: 0.9 }}
      className="inline-flex items-center gap-2 rounded-full bg-pink-300 px-6 py-3
        border text-white font-semibold shadow-lg transition-colors duration-200"
    >
      Let&apos;s collaborate
      <ArrowRight className="size-5" />
    </motion.a>
  );
};
