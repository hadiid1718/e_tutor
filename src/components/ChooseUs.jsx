import React from "react";
import { motion } from "framer-motion";
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { SlideLeft } from "../utility/animation";

// Choose Us Data
const ChoosedUsData = [
  {
    id: "1",
    title: "One-on-One Teaching",
    desc: "All of our special education experts have a degree in special education.",
    icon: <GrYoga />,
    bgColor: "#0063ff",
    delay: 0.3,
  },
  {
    id: "2",
    title: "24/7 Tutor Availablity",
    desc: "Our tutor always available to respond as quick as possible for you",
    link: "/",
    icon: <FaDumbbell />,
    bgColor: "#73bc00",
    delay: 0.6,
  },
  {
    id: "3",
    title: "Interactive Whiteboard",
    desc: "Our digital whiteboard equipped with audio, video and chat feature",
    link: "/",
    icon: <GiGymBag />,
    bgColor: "#fa6400",
    delay: 0.9,
  },
  {
    id: "4",
    title: "Affordable price",
    desc: "Choose an expert tutor based on your budget and per hour",
    link: "/",
    icon: <GiGymBag />,
    bgColor: "#fe6baa",
    delay: 0.9,
  },
];
const ChooseUs = () => {
  return (
    <>
      <div className="bg-[#f9fafc]">
        <div className="container py-24">
          {/* header sec */}
          <div className=" space-y-4 p-6 text-center max-w-[500px] mx-auto">
            <h1 className="uppercase font-semibold text-orange-600">
              Why Choose Us
            </h1>
            <p className="font-semibold text-3xl">
              Benefits of online tutoring service with us
            </p>
          </div>
          {/* cards sec */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {ChoosedUsData.map((item) => {
              return (
                <motion.div
                  variants={SlideLeft(item.delay)}
                  initial="hidden"
                  whileInView={"visible"}
                  className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
                >
                  <div
                    style={{ backgroundColor: item.bgColor }}
                    className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
                  >
                    <div className="text-2xl">{item.icon}</div>
                  </div>
                  <p className="font-semibold ">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
