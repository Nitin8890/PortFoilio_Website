import React from "react";
import { motion } from "framer-motion";
import HTML from "./images/HTML.png";
import css from "./images/CSS.png";
import js from "./images/js.png";
import mongo from "./images/mongo.png";
import rct from "./images/react.png";
import sql from "./images/sql.png";
import tw from "./images/tw.png";
import nd from "./images/node.png";
import '../App.css'
function About() {
  return (
    <motion.div className="m-4" id="About">
      <hr className="h-1 container mx-auto mt-5"></hr>

      <h1 className=" text-6xl h-auto text-center underline text-t1 font-bold p-10 lbtn">
        More of Me
      </h1>
      <div className="grid justify-center items-center lbtn">
        <motion.div
          className="border-2 border-white grid justify-center items-center p-10 w-fit rounded-lg  bg-dc shadow-[7px_7px_10px_2px_rgba(0,_0,_0,_0.15)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ol className="space-y-3 ">
            <h1 className="name text-4xl h-auto text-center underline p-2  font-extrabold lbtn">
              Compititive Coding and Hackathons
            </h1>
            <li>
              <span classname="lbtn">
                &rarr; 2 ⭐ on CodeChef with Max rating of 1500 , 1391 Leetcode
                contest rating.
              </span>
            </li>
            <li>
              <span classname="lbtn">
                &rarr; Recieved certificate of participation in SMART ABESEC
                Hackathon.
              </span>
            </li>
            <li>
              <span classname="lbtn">
                &rarr;Solved 500+ DSA and Algorithms questions on different
                coding platforms.
              </span>
            </li>
            <li>
              <span classname="lbtn">
                &rarr; Completed my B.tech from{" "}
                <a
                  className="underline text-white"
                  href="https://www.abesit.in/"
                >
                  ABES Institute of technology
                </a>{" "}
                in CSE with overall GPA of 7.2(Current).{" "}
              </span>
            </li>
            <li>
              <span classname="lbtn">
                &rarr; Completed My schooling from{" "}
                <a
                  className="underline text-white"
                  href="https://janakpuri.kvs.ac.in/"
                >
                  KVS Janakpuri
                </a>{" "}
                in science(P.C.M) with overall Percentage of 89%.
              </span>
            </li>
          </ol>
        </motion.div>
      </div>

      <h1 class="lbtn text-t1 font-bold text-center text-4xl underline mt-20">
        Skill Badges
      </h1>
      <motion.div
      className="grid ml-32 mt-10 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Card 1 */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="bg-dc grid h-32 w-32 items-center justify-center rounded-b-full border-2 border-orange-600 shadow-[7px_7px_10px_2px_rgba(0,_0,_0,_0.15)]"
      >
        <img src={HTML} alt="HTML" className="h-20 w-20 rounded-xl object-cover" />
        <h1 className="text-center font-extrabold text-white text-xs">HTML5</h1>
      </motion.div>
    
      {/* Card 2 */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="bg-dc grid h-32 w-32 items-center justify-center rounded-b-full border-2 border-blue-600 shadow-[7px_7px_10px_2px_rgba(0,_0,_0,_0.15)]"
      >
        <img src={css} alt="CSS" className="h-20 w-20 rounded-xl object-cover" />
        <h1 className="text-center font-extrabold text-white text-xs">CSS3</h1>
      </motion.div>
    
      {/* Card 3 */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="bg-dc grid h-32 w-32 items-center justify-center rounded-b-full border-2 border-yellow-600 shadow-[7px_7px_10px_2px_rgba(0,_0,_0,_0.15)]"
      >
        <img src={js} alt="JavaScript" className="h-20 w-20 rounded-xl object-cover" />
        <h1 className="text-center font-extrabold text-white text-xs">JavaScript</h1>
      </motion.div>
    
      {/* Card 4 */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="bg-dc grid h-32 w-32 items-center justify-center rounded-b-full border-2 border-green-400 shadow-[7px_7px_10px_2px_rgba(0,_0,_0,_0.15)]"
      >
        <img src={nd} alt="Node.js" className="h-20 w-20 rounded-xl object-cover" />
        <h1 className="text-center font-extrabold text-white text-xs">Node.js</h1>
      </motion.div>
    
      {/* Card 5 */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="bg-dc grid h-32 w-32 items-center justify-center rounded-b-full border-2 border-green-700 shadow-[7px_7px_10px_2px_rgba(0,_0,_0,_0.15)]"
      >
        <img src={mongo} alt="MongoDB" className="h-20 w-20 rounded-xl object-cover" />
        <h1 className="text-center font-bold text-white text-xs">MongoDB</h1>
      </motion.div>
    
      {/* Card 6 */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="bg-dc grid h-32 w-32 items-center justify-center rounded-b-full border-2 border-white shadow-[7px_7px_10px_2px_rgba(0,_0,_0,_0.15)]"
      >
        <img src={tw} alt="Tailwind" className="h-20 w-20 rounded-xl object-cover" />
        <h1 className="text-center font-extrabold text-white text-xs">Tailwind</h1>
      </motion.div>
    
      {/* Card 7 */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="bg-dc grid h-32 w-32 items-center justify-center rounded-b-full border-2 border-blue-800 shadow-[7px_7px_10px_2px_rgba(0,_0,_0,_0.15)]"
      >
        <img src={sql} alt="SQL" className="h-20 w-20 rounded-xl object-cover" />
        <h1 className="text-center font-extrabold text-white text-xs">SQL</h1>
      </motion.div>
    
      {/* Card 8 */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="bg-dc grid h-32 w-32 items-center justify-center rounded-b-full border-2 border-blue-900 shadow-[7px_7px_10px_2px_rgba(0,_0,_0,_0.15)]"
      >
        <img src={rct} alt="React.js" className="h-20 w-20 rounded-xl object-cover" />
        <h1 className="text-center font-extrabold text-white text-xs">React.js</h1>
      </motion.div>
    </motion.div>
    
    </motion.div>
  );
}
export default About;
