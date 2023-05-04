import React from "react";
import {motion} from "framer-motion";

function Sidebar() {
    return (
        <div className=" flex justify-center sm:flex sm:justify-end">
            <motion.ul className="text-white flex space-x-8 p-5"
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1.6}}
            >   
                <li className="text-white text-xl font-bold hover:text-rose-600 transition delay-150 hover:underline "><a href="#Home">HOME</a></li>
                <li className="text-white text-xl font-bold hover:text-rose-600 transition delay-150 hover:underline "><a href="#Projects">PROJECTS</a></li>
                <li className="text-white text-xl font-bold hover:text-rose-600 transition delay-150 hover:underline "><a href="#About">ABOUT</a></li>
                <li className="text-white text-xl font-bold hover:text-rose-600 transition delay-150 hover:underline "><a href="#Contacts">CONTACTS</a></li>
            </motion.ul>
        </div>

    );
}
export default Sidebar;