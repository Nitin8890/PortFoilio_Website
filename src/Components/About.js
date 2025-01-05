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
function About() {
  return (
    <motion.div className="m-0" id="About">
      <hr className="h-1 container mx-auto "></hr>

      <h1
        className="about text-6xl h-auto text-center underline p-10 lbtn"
        
      >
        More of Me
      </h1>
      <div className="grid justify-center items-center ">
        <motion.div
          className="border-2 border-white grid justify-center items-center p-10 w-fit rounded-lg  bg-gradient-to-b from-black to-slate-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ol className="space-y-3">
            <h1 className="name text-4xl h-auto text-center underline p-2 text-teal-300 font-extrabold">
              Compititive Coding and Hackathons
            </h1>
            <li>
              <span>&rarr; 2 ⭐ on CodeChef with Max rating of 1500 , 1391 Leetcode contest rating.</span>
            </li>
            <li>
              <span>
                &rarr;Recieved certificate of participation in SMART ABESEC
                Hackathon.
              </span>
            </li>
            <li>
              <span>
                &rarr;Solved 500+ DSA and Algorithms questions on different
                coding platforms.
              </span>
            </li>
            <li>
              <span>
                &rarr;Completed my B.tech from{" "}
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
              <span>
                &rarr;Completed My schooling from{" "}
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

      <h1 class="lbtn text-center text-6xl font-bold underline m-10">
        Skill Badges
      </h1>

    <motion.div
        class="grid justify-center items-center grid-col-3 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:ml-52 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
    >
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          class=" bg-gradient-to-b from-black to-slate-900 grid h-32 w-32 items-center justify-center rounded-b-full border-2 border-orange-600 shadow-[0px_20px_30px_1px_#ed8936]"
        >
          <img src={HTML} alt="ima" class="h-20 w-20 rounded-xl object-cover" />
          <h1 class="text-center font-extrabold text-white text-xs">HTML5</h1>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          class="  bg-gradient-to-b from-black to-slate-900 grid h-32 w-32 items-center justify-center rounded-b-full border-2 border-blue-600 shadow-[0px_20px_20px_0px_#4299e1]"
        >
          <img
            src={css}
            alt="im"
            class="h-20 w-20 rounded-xl object-cover"
          ></img>
          <h1 class="text-center font-extrabold text-white text-xs">CSS3</h1>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          class=" bg-gradient-to-b from-black to-slate-900 grid h-32 w-32 items-center justify-center rounded-b-full border-2 border-yellow-600 shadow-[0px_20px_20px_0px_#f6e05e]"
        >
          <img
            src={js}
            alt="im"
            class="h-20 w-20 rounded-xl object-cover"
          ></img>
          <h1 class="text-center font-extrabold text-white text-xs">JavaScript</h1>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          class=" bg-gradient-to-b from-black to-slate-900 grid h-32 w-32 items-center justify-center rounded-b-full border-2 border-green-400 shadow-[0px_20px_20px_0px_#90EE90]"
        >
          <img src={nd} alt="i" class="h-20 w-20 rounded-xl object-cover"></img>
          <h1 class="text-center font-extrabold text-white text-xs">Node.js</h1>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          class=" bg-gradient-to-b from-black to-slate-900 grid h-32 w-32 items-center justify-center rounded-b-full border-2 border-green-700 shadow-[0px_20px_20px_0px_#48bb78]"
        >
          <img
            src={mongo}
            alt="i"
            class="h-20 w-20 rounded-xl object-cover"
          ></img>
          <h1 class="text-center font-bold text-white text-xs">MongoDB</h1>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          class=" bg-gradient-to-b from-black to-slate-900 grid h-32 w-32 items-center justify-center rounded-b-full border-2 border-white shadow-[0px_20px_20px_0px_#bee3f8]"
        >
          <img src={tw} alt="i" class="h-20 w-20 rounded-xl object-cover"></img>
          <h1 class="text-center font-extrabold text-white text-xs">Tailwind</h1>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          class=" bg-gradient-to-b from-black to-slate-900 grid h-32 w-32 items-center justify-center rounded-b-full border-2 border-blue-800 shadow-[0px_20px_20px_0px__#00758f]"
        >
          <img
            src={sql}
            alt="i"
            class="h-20 w-20 rounded-xl object-cover"
          ></img>
          <h1 class="text-center font-extrabold text-white text-xs">SQL</h1>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          class=" bg-gradient-to-b from-black to-slate-900 grid h-32 w-32 items-center justify-center rounded-b-full border-2 border-blue-900 shadow-[0px_20px_20px_0px_#2c5282]"
        >
          <img
            src={rct}
            alt="i"
            class="h-20 w-20 rounded-xl object-cover"
          ></img>
          <h1 class="text-center font-extrabold text-white text-xs">React.js</h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
export default About;
