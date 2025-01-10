import React from "react";
import { motion } from "framer-motion";

function Sidebar() {
  return (
    <div className="grid">
      <div className="flex justify-around items-center p-5 bg-dc">
        <motion.h1
          whileHover={{ scale: 1.8 }}
          whileTap={{ scale: 0.8 }}
          className="text-2xl font-extrabold cursor-pointer"
        >
          <span className="meraNam text-white text-4xl">Nitin</span>
        </motion.h1>
        <motion.ul
          className="text-white flex justify-between sm:w-1/2 space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <li className="text-xl text-white font-bold relative hover:text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
            <a href="#Home">HOME</a>
          </li>
          <li className="text-xl text-white font-bold relative hover:text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
            <a href="#Projects">PROJECTS</a>
          </li>
          <li className="text-xl text-white font-bold relative hover:text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
            <a href="#About">ABOUT</a>
          </li>
          <li className="text-xl text-white font-bold relative hover:text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
            <a href="#Contacts">CONTACTS</a>
          </li>
        </motion.ul>
      </div>
      <hr className="bg-black w-4/5 m-auto mb-10"></hr>
    </div>
  );
}
export default Sidebar;
