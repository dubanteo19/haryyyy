import { ImageContainer } from "@/components/common/ImageContainer";
import { InstagramIcon } from "@/components/icons/instagram";
import { TikTokIcon } from "@/components/icons/tiktok";
import type { IConLink } from "@/type/icon-button";
import { LocationEdit, MailIcon } from "lucide-react";
import Typewriter from "typewriter-effect";
import { motion } from "motion/react";
import { CallToActionButton } from "@/components/ui/CallToActionButton";
import { AVATAR } from "@/constants/constants";
import { getImageUrl } from "@/lib/utils";

export const HeroSection = () => {
  const imageSrc = getImageUrl("685e02a0-e3f8-484f-a551-9542016e64.png");
  const item = { hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } };
  const iconLinks: IConLink[] = [
    { icon: MailIcon },
    {
      icon: TikTokIcon,
      href: "https://www.tiktok.com/@_bthaodiary?is_from_webapp=1&sender_device=pc",
    },
    {
      icon: InstagramIcon,
      href: "https://www.instagram.com/_bthaodiary/",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="hero"
      className="flex flex-col space-y-2 items-center mt-2 min-h-screen "
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "tween", stiffness: 120 }}
      >
        <ImageContainer
          className="rounded-full size-20 shadow-lg"
          src={AVATAR}
        />
      </motion.div>

      <motion.h2
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="font-semibold text-lg"
      >
        @_bthaodiary
      </motion.h2>

      <div className="flex text-gray-500 text-sm items-center">
        <LocationEdit size={15} />
        <span>Tp.HCM</span>
      </div>
      <motion.div variants={item} className="h-6 text-center text-sm">
        <Typewriter
          options={{
            strings: [
              "Aesthetic desk-setups",
              "Study vibes ✏️",
              "Unboxing addict 📦",
              "Honest reviews ⭐",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 30,
            delay: 45,
          }}
        />
      </motion.div>
      <motion.div variants={item} className="flex space-x-4">
        {iconLinks.map(({ icon: Icon, href }, i) =>
          href ? (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 inline-block"
            >
              <Icon />
            </motion.a>
          ) : (
            <motion.div
              key={i}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 inline-block"
            >
              <Icon />
            </motion.div>
          ),
        )}
      </motion.div>
      <motion.div
        initial={{ y: 50, scale: 0.9 }}
        animate={{
          y: [0, -50, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 4,
          ease: "easeOut",
          repeat: Infinity,
        }}
        whileHover={{
          scale: 1.04,
          rotate: [-1, 0],
          transition: { type: "tween", stiffness: 120 },
        }}
        className=" w-[320px] rounded-3xl bg-gradient-to-br from-pink-100 to-pink-300 p-6 mt-6 
        shadow-lg border border-pink-300 transition-all duration-300 overflow-hidden"
      >
        <h2 className="mb-3 text-center text-xl font-extrabold tracking-wide">
          Hey there!{" "}
          <motion.span
            className="inline-block origin-[70%_70%]"
            animate={{ rotate: [0, 20, -10, 20, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
          >
            👋
          </motion.span>
        </h2>
        <p className="text-center text-[14px] leading-relaxed text-gray-700">
          I'm a creative freelancer who loves curating{" "}
          <span className="font-medium text-pink-800">
            aesthetic desk setups
          </span>
          , sharing <span className="italic">study vibes</span>, unboxing the
          latest goodies 📦, and giving honest reviews . Let's work together to
          make your brand stand out! 💡
        </p>
      </motion.div>
      <CallToActionButton />
      <ImageContainer className="my-2 size-[220px]" src={imageSrc} />
    </motion.div>
  );
};
