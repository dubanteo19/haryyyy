import { ImageContainer } from "@/components/common/ImageContainer";
import { motion } from "motion/react";
import { contactItems } from "../data/contact-data";
import { getImageUrl } from "@/lib/utils";

export const ContactSection = () => {
  const imageSrc = getImageUrl("0d2da2c8-4fa4-4121-8038-491f7c22b23f.png");
  return (
    <section id="contact" className="px-6 py-16  min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-3 text-pink-700"
        >
          Let's Get in Touch ✉️
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 mb-10"
        >
          Feel free to reach out through any of the platforms below!
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactItems.map((item) => (
            <motion.a
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "tween",
                stiffness: 300,
                delay: 0.3,
                duration: 0.8,
              }}
              className={`flex items-center gap-4 p-4 rounded-xl shadow  bg-white
hover:shadow-lg transition border ${item.borderColor}`}
            >
              {item.icon}
              <span className="text-gray-700 font-medium">{item.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
      <ImageContainer
        className="my-2 size-[220px] mx-auto mt-10 rounded-full"
        src={imageSrc}
      />
    </section>
  );
};
