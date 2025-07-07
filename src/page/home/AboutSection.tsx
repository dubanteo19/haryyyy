import { ImageContainer } from "@/components/common/ImageContainer";
import { getImageUrl } from "@/lib/utils";
import { motion } from "motion/react";

export const AboutSection = () => {
  const imageSrc = getImageUrl("51ac3213-0076-4254-b09c-9525203fd552.webp");
  return (
    <section id="about" className="bg-white py-10 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-pink-600 mb-4"
        >
          About Me 💫
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-gray-700 text-[15px] leading-relaxed"
        >
          Hey, I’m <span className="font-semibold text-pink-700">HaryLe</span> —
          a creative freelancer who’s passionate about curating aesthetic desk
          setups, sharing calming <span className="italic">study vibes</span>,
          and unboxing the latest goodies. I enjoy crafting content that
          connects, inspires, and adds value to others.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-gray-700 mt-4 text-[15px] leading-relaxed"
        >
          Whether it’s reviewing products, organizing my workspace, or sharing
          tips on staying productive, I always strive to keep things honest,
          chill, and visually pleasing.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-gray-700 mt-4 text-[15px] leading-relaxed"
        >
          Let’s connect and create something memorable together! ✨
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <ImageContainer
            className="my-6 max-w-[400px] mx-auto"
            src={imageSrc}
          />
        </motion.div>
      </div>
    </section>
  );
};
