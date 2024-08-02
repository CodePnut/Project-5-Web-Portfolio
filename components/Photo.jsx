"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Image
            src="/assets/photo1.png"
            priority
            quality={100}
            alt=""
            width={298}
            height={298}
            className="object-contain w-[300px] h-[300px] xl:w-[500px] xl:h-[500px]"
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[280px] h-[280px] xl:w-[410px] xl:h-[410px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://ww.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLineJoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
