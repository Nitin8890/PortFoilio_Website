import React from "react";
import logo1 from "./images/ed2.png";
import logo2 from "./images/edited1.png";
import logo3 from "./images/cryptowise.png";
import logo4 from "./images/calci.png";
import logo5 from "./images/foodie.png";
import logo6 from "./images/CE.png";
import logo7 from "./images/ET.png";
import logo8 from "./images/p1 (1).png"
import logo9 from "./images/p1 (3).png"
import logo10 from "./images/p2.png"
import { motion } from "framer-motion";
function Projects() {
  return (
    <div className="m-0">
      <h1
        className="Project text-6xl h-auto text-center underline m-10"
        id="Projects"
      >
        Projects
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        <motion.div
          class=" pN max-w-xs mx-auto mb-2 p-3 rounded-lg  bg-gradient-to-br from-black  to-slate-900 border-2 border-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1 }}
        >
          <img class="w-full h-48 rounded-lg" src={logo1} alt="product" />
          <div class="px-6 py-4">
            <h4 class=" mb-3 text-xl font-semibold  text-center">
              ADVISOR
            </h4>
          </div>
          <div className="flex justify-between items-center ">
            <button className="h-8 w-16 bg-teal-300 text-white border-2 border-white ml-5 rounded-lg hover:text-black hover:bg-gray-500 text-lg">
              <a href="https://fascinating-sundae-dec772.netlify.app/">LIVE</a>
            </button>
            <span className="font-extrabold text-white">|</span>
            <button className="h-8 w-16 bg-teal-300 text-black border-2 border-white ml-5 rounded-lg hover:text-black hover:bg-gray-500 text-lg">
              <a href="https://github.com/Nitin8890/AdviceGenrator">CODE</a>
            </button>
          </div>
        </motion.div>

        <motion.div
          class=" pN max-w-xs mx-auto mb-2 p-3 rounded-lg  bg-gradient-to-br from-black  to-slate-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-2 border-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1 }}
        >
          <img class="w-full h-48 rounded-lg" src={logo2} alt="product" />
          <div class="px-6 py-4">
            <h4 class="mb-3 text-xl font-semibold  text-center">
              TO-DO LIST
            </h4>
          </div>
          <div className="flex justify-between items-center ">
            <button className="h-8 w-16 bg-teal-300 text-black border-2 border-white ml-5 rounded-lg hover:text-black hover:bg-gray-500 text-lg">
              <a href="https://chic-lolly-bade17.netlify.app/">LIVE</a>
            </button>
            <span className="font-extrabold text-white">|</span>
            <button className="h-8 w-16 bg-teal-300 text-black border-2 border-white ml-5 rounded-lg hover:text-black hover:bg-gray-500 text-lg">
              <a href="/">CODE</a>
            </button>
          </div>
        </motion.div>
        <motion.div
          class=" pN max-w-xs mx-auto mb-2 p-3 rounded-lg  bg-gradient-to-br from-black  to-slate-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-2 border-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1 }}
        >
          <img class="w-full h-48 rounded-lg" src={logo3} alt="product" />
          <div class="px-6 py-4">
            <h4 class="mb-3 text-xl font-semibold  text-center">
              CRYPTOWISE
            </h4>
          </div>
          <div className="flex justify-between items-center ">
            <button className="h-8 w-16 bg-teal-300 text-black border-2 border-white ml-5 rounded-lg hover:text-black hover:bg-gray-500 text-lg">
              <a href="https://crypto-wise.netlify.app/">LIVE</a>
            </button>
            <span className="font-extrabold text-white">|</span>
            <button className="h-8 w-16 bg-teal-300 text-black border-2 border-white ml-5 rounded-lg hover:text-black hover:bg-gray-500 text-lg">
              <a href="https://github.com/Nitin8890/crypto_wise">CODE</a>
            </button>
          </div>
        </motion.div>
        <motion.div
          class=" pN max-w-xs mx-auto mb-2 p-3 rounded-lg  bg-gradient-to-br from-black  to-slate-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-2 border-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1 }}
        >
          <img class="w-full h-48 rounded-lg" src={logo4} alt="product" />
          <div class="px-6 py-4">
            <h4 class="mb-3 text-xl font-semibold  text-center">
              CALCULATOR
            </h4>
          </div>
          <div className="flex justify-between items-center ">
            <button className="h-8 w-16 bg-teal-300 text-black border-2 border-white ml-5 rounded-lg hover:text-black hover:bg-gray-500 text-lg">
              <a href="https://jolly-concha-4ca525.netlify.app/">LIVE</a>
            </button>
            <span className="font-extrabold text-white">|</span>
            <button className="h-8 w-16 bg-teal-300 text-black border-2 border-white ml-5 rounded-lg hover:text-black hover:bg-gray-500 text-lg">
              <a href="/">CODE</a>
            </button>
          </div>
        </motion.div>
        <motion.div
          class=" pN max-w-xs mx-auto mb-2 p-3 rounded-lg  bg-gradient-to-br from-black  to-slate-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-2 border-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1 }}
        >
          <img class="w-full h-48 rounded-lg" src={logo5} alt="product" />
          <div class="px-6 py-4">
            <h4 class="mb-3 text-xl font-semibold  text-center">
              RECIPEBOOK
            </h4>
          </div>
          <div className="flex justify-between items-center ">
            <button className="h-8 w-16 bg-teal-300 text-black border-2 border-white ml-5 rounded-lg hover:text-black hover:bg-gray-500 text-lg">
              <a href="https://astonishing-basbousa-b64d8c.netlify.app/">
                LIVE
              </a>
            </button>
            <span className="font-extrabold text-white">|</span>
            <button className="h-8 w-16 bg-teal-300 text-black border-2 border-white ml-5 rounded-lg hover:text-black hover:bg-gray-500 text-lg">
              <a href="/">CODE</a>
            </button>
          </div>
        </motion.div>
        <motion.div
          class=" pN max-w-xs mx-auto mb-2 p-3 rounded-lg  bg-gradient-to-br from-black  to-slate-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-2 border-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1 }}
        >
          <img class="w-full h-48 rounded-lg" src={logo6} alt="product" />
          <div class="px-6 py-4">
            <h4 class="mb-3 text-xl font-semibold  text-center">
              CODEZONE
            </h4>
          </div>
          <div className="flex justify-between items-center ">
            <button className="h-8 w-16 bg-teal-300 text-black border-2 border-white ml-5 rounded-lg hover:text-black hover:bg-gray-500 text-lg">
              <a href="https://codepen-by-nitin.netlify.app/">LIVE</a>
            </button>
            <span className="font-extrabold text-white">|</span>
            <button className="h-8 w-16 bg-teal-300 text-black border-2 border-white ml-5 rounded-lg hover:text-black hover:bg-gray-500 text-lg">
              <a href="https://github.com/Nitin8890/CodeEditor">CODE</a>
            </button>
          </div>
        </motion.div>
        <motion.div
          class=" pN max-w-xs mx-auto mb-2 p-3 rounded-lg  bg-gradient-to-br from-black  to-slate-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-2 border-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1 }}
        >
          <img class="w-full h-48 rounded-lg" src={logo7} alt="product" />
          <div class="px-6 py-4">
            <h4 class="mb-3 text-xl font-semibold  text-center">
              EXPENSE TRACKER
            </h4>
          </div>
          <div className="flex justify-between items-center ">
            <button className="h-8 w-16 bg-teal-300 text-black border-2 border-white ml-5 rounded-lg hover:text-black hover:bg-gray-500 text-lg">
              <a href="https://dancing-kashata-a12107.netlify.app/">LIVE</a>
            </button>
            <span className="font-extrabold text-white">|</span>
            <button className="h-8 w-16 bg-teal-300 text-black border-2 border-white ml-5 rounded-lg hover:text-black hover:bg-gray-500 text-lg">
              <a href="https://github.com/Nitin8890/React_expense_tracker">
                CODE
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
        class=" pN max-w-xs mx-auto mb-2 p-3 rounded-lg  bg-gradient-to-br from-black  to-slate-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-2 border-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 1 }}
      >
        <img class="w-full h-48 rounded-lg" src={logo8} alt="product" />
        <div class="px-6 py-4">
          <h4 class="mb-3 text-xl font-semibold  text-center">
            TipEase 
          </h4>
        </div>
        <div className="flex justify-between items-center ">
          <button className="h-8 w-16 bg-teal-300 text-black border-2 border-white ml-5 rounded-lg hover:text-black hover:bg-gray-500 text-lg">
            <a href="https://magnificent-travesseiro-d20ffa.netlify.app/">LIVE</a>
          </button>
          <span className="font-extrabold text-white">|</span>
          <button className="h-8 w-16 bg-teal-300 text-black border-2 border-white ml-5 rounded-lg hover:text-black hover:bg-gray-500 text-lg">
            <a href="https://github.com/Nitin8890/Tip_calculator">
              CODE
            </a>
          </button>
        </div>
      </motion.div>
      <motion.div
      class=" pN max-w-xs mx-auto mb-2 p-3 rounded-lg  bg-gradient-to-br from-black  to-slate-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-2 border-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 1 }}
    >
      <img class="w-full h-48 rounded-lg" src={logo9} alt="product" />
      <div class="px-6 py-4">
        <h4 class="mb-3 text-xl font-semibold  text-center">
          Mortgage Mate 
        </h4>
      </div>
      <div className="flex justify-between items-center ">
        <button className="h-8 w-16 bg-teal-300 text-black border-2 border-white ml-5 rounded-lg hover:text-black hover:bg-gray-500 text-lg">
          <a href="https://mortgagecalcu.netlify.app/">LIVE</a>
        </button>
        <span className="font-extrabold text-white">|</span>
        <button className="h-8 w-16 bg-teal-300 text-black border-2 border-white ml-5 rounded-lg hover:text-black hover:bg-gray-500 text-lg">
          <a href="https://github.com/Nitin8890/Mortgage-calcultor">
            CODE
          </a>
        </button>
      </div>
    </motion.div>
    <motion.div
    class=" pN max-w-xs mx-auto mb-2 p-3 rounded-lg  bg-gradient-to-br from-black  to-slate-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-2 border-white"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 1 }}
  >
    <img class="w-full h-48 rounded-lg" src={logo10} alt="product" />
    <div class="px-6 py-4">
      <h4 class="mb-3 text-xl font-semibold  text-center">
        Nike Landing page
      </h4>
    </div>
    <div className="flex justify-between items-center ">
      <button className="h-8 w-16 bg-teal-300 text-black border-2 border-white ml-5 rounded-lg hover:text-black hover:bg-gray-500 text-lg">
        <a href="https://dancing-kashata-a12107.netlify.app/">LIVE</a>
      </button>
      <span className="font-extrabold text-white">|</span>
      <button className="h-8 w-16 bg-teal-300 text-black border-2 border-white ml-5 rounded-lg hover:text-black hover:bg-gray-500 text-lg">
        <a href="https://github.com/Nitin8890/React_expense_tracker">
          CODE
        </a>
      </button>
    </div>
  </motion.div>
      </div>
    </div>
  );
}
export default Projects;
