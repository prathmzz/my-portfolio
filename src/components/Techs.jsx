import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
// import { TbBrandNextjs } from "react-icons/tb";
import { FaJava, FaPython } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { IoLogoJavascript } from "react-icons/io5";
import { FaDocker } from "react-icons/fa";
import { animate, motion } from "framer-motion";

export const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Techs = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <RiReactjsLine className="text-8xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.75)}
          className="p-4"
        >
          <LiaNode className="text-8xl text-green-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.0)}
          className="p-4"
        >
          <SiMongodb className="text-8xl text-green-600" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.25)}
          className="p-4"
        >
          <IoLogoJavascript className="text-8xl text-yellow-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="p-4"
        >
          <FaJava className="text-8xl text-red-600" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.75)}
          className="p-4"
        >
          <FaPython className="text-8xl text-blue-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4.0)}
          className="p-4"
        >
          <FaDocker className="text-8xl text-blue-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Techs;
