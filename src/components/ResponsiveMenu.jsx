import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  BiLogOut } from "react-icons/bi";
import { GrContact } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { PiStudentBold } from "react-icons/pi";


const ResponsiveMenu = ({ isOpen, setIsOpen }) => {
  const closeAction = () => {
    setIsOpen(!isOpen);
  };
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute w-[350px] top-10 z-10 lg:hidden"
        >
          <div className="text-xl font-semibold bg-[#222] opacity-90 py-28 m-6 rounded text-white ">
            <div className="ml-24 mt-3 mb-8 w-28 h-28 bg-white rounded-full">
               
            </div>
            <div className="relative text-center mb-8 mt-0">
              <p>Welcome! Hadeed Malik</p>
              </div>
            <ul className=" flex flex-col ml-10 gap-10 ">
              <li className="flex gap-4 hover:text-blue-300 duration-300 cursor-pointer border-b-2">
                <span className="flex justify-center items-center">
                  <CgProfile className=""/>
                </span>
                View Profile
              </li>
              <li className="flex gap-4 hover:text-blue-300 duration-300 cursor-pointer border-b-2">
                <span className="flex justify-center items-center">
                  <PiStudentBold />
                </span>
                For Student
              </li>
              <li className="flex gap-4 hover:text-blue-300 duration-300 cursor-pointer border-b-2">
                <span className="flex justify-center items-center">
                  <IoSettings />
                </span>
                Setting
              </li>
              <li className="flex gap-4 hover:text-blue-300 duration-300 cursor-pointer border-b-2">
                <span className="flex justify-center items-center">
                  <GrContact />
                </span>
                Contact Us
              </li>
              <li className="flex gap-4 hover:text-blue-300 duration-300 cursor-pointer border-b-2">
                <span className="flex justify-center items-center ">
                  <BiLogOut />
                </span>
                Log Out
              </li>
            </ul>
            <span
              className="absolute top-10 right-10 cursor-pointer"
              onClick={closeAction}
            >
              X
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
