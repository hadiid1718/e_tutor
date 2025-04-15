import React, { useState } from "react";
import { NavbarMenu } from "../mocData/data";
import { MdComputer, MdMenu } from "react-icons/md";



import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";
const Navbar = () => {
 
const [ isOpen, setIsOpen] = useState();

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center ml-6 py-6">
          {/* logo section */}
          <Link to="/" className="text-2xl flex items-center gap-2 font-bold">
            <MdComputer className="text-3xl text-blue-600" />
            <p className="">My Tutor</p>
          </Link>
          {/* Menu section */}
          <div className="hidden lg:block">
            <ul className="flex item-center gap-6">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-blue-600 duration-300 font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* CTA section */}
          <div className="hidden lg:block space-x-6">
            <Link to="/signin" className="font-semibold">Sign In</Link>
            <Link to="/register" className="text-white bg-blue-500 px-6 py-2 rounded-full hover:bg-blue-700 duration-500">
              Register
            </Link>
          </div>
          {/* mobile hamburger */}
          <div className="lg:hidden sm:block ">
            <MdMenu
              className="text-4xl cursor-pointer"
              onClick={()=> setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </nav>
      <ResponsiveMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
