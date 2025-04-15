import React from "react";
import HeroImg from "../assets/OIP.jpeg";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight } from "../utility/animation";

const Hero = () => {
  return (
    <>
      <div className="container grid grid-cols-1 gap-4 md:grid-cols-2 min-h-[650px] relative ">
        {/* Brand info */}
        <div className="flex justify-center flex-col  px-32 md:pr-16 xl:pr-40 md:py-0">
          <div className="text-center md:text-left space-y-6">
            <motion.p
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="visible"
              className="text-orange-600 uppercase font-semibold"
            >
              100% satisfaction Guarantee
            </motion.p>
            <motion.h1
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="visible"
              className="text-4xl font-semibold lg:text-6xl !leading-tight"
            >
              Find Your Perfect <span className="text-yellow-400">Tutor</span>
            </motion.h1>
            <motion.p
              variants={SlideRight(0.8)}
              initial="hidden"
              animate="visible"
            >
              We help you find perfect tutor for 1-on-1 lessons. It is
              completely free and private
            </motion.p>
            {/* Button Section  */}
            <motion.div
              variants={SlideRight(1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start gap-8 !mt-8 items-center"
            >
              <button className="primary-btn">Get Started</button>
              <button className="flex justify-end items-center gap-2 font-semibold">
                <span className="w-10 h-10 bg-blue-100 rounded-full flex justify-center items-center">
                  <FaPlay className="text-blue-600" />
                </span>
                See how it works
              </button>
            </motion.div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={HeroImg}
            alt="HeroImg"
            className="w-[250px] md:w-[550px] xl:w-[600px] lg:w-[650px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
