import React from "react";
import logo1 from "./images/ed2.png";
import logo2 from "./images/edited1.png";
import logo3 from "./images/cryptowise.png";
import logo4 from "./images/calci.png";
import logo5 from "./images/foodie.png"
import {motion} from "framer-motion";
function Projects() {
  return (
  <div className="">
  <h1 className="Project text-6xl text-rose-600  h-auto text-center underline" id="Projects">Projects</h1>
    <div class="grid lg:grid-cols-3 h-auto p-16 ">
      <motion.div class="max-w-xs mx-4 mb-2 p-3 rounded-lg shadow-lg bg-cyan-500"
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      whileHover={{scale:1.1,}}
      transition={{duration:1}}
      >
        <img class="w-full h-48 rounded-lg"
          src={logo1}
          alt="product" />
        <div class="px-6 py-4 overflow-hidden">
          <h4 class="mb-3 text-xl font-semibold tracking-tight text-rose-600">Advice Generator</h4>
          <p class="leading-normal text-white">
          This is very basic advice generator , which fetches data from Advices API and displays it on screen.
          </p>
        </div>
        <button className="h-8 w-16 bg-white border-2 boder-black text-rose-600 ml-5 rounded-lg hover:bg-green-300 text-lg"><a href="https://fascinating-sundae-dec772.netlify.app/">LIVE</a></button>
      </motion.div>
      <motion.div class="max-w-xs mx-4 mb-2 p-3 rounded-lg shadow-lg bg-cyan-500"
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      whileHover={{scale:1.1,}}
      transition={{duration:1}}
      >
        <img class="w-full h-48 rounded-lg"
          src={logo2}
          alt="product" />
        <div class="px-6 py-4 overflow-hidden">
          <h4 class="mb-3 text-xl font-semibold tracking-tight text-rose-600">Todo List</h4>
          <p class="leading-normal text-white">A To Do list to plan your entire day.</p>  
        </div>
        <button className="h-8 w-16 bg-white border-2 boder-black text-rose-600 ml-5 rounded-lg  hover:bg-green-300 text-lg"><a href="https://chic-lolly-bade17.netlify.app/">LIVE</a></button>
      </motion.div>
      <motion.div class="max-w-xs mx-4 mb-2 p-3 rounded-lg shadow-lg bg-cyan-500"
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      whileHover={{scale:1.1,}}
      transition={{duration:1}}
      >
        <img class="w-full h-48 rounded-lg"
          src={logo3}
          alt="product" />
        <div class="px-6 py-4 overflow-hidden">
          <h4 class="mb-3 text-xl font-semibold tracking-tight text-rose-600">CryptoWise</h4>
          <p class="leading-normal text-white">This crypto app fetches data from COINGECCKO API and diplay real time crypto market status.</p>
        </div>
        <button className="h-8 w-16 bg-white border-2 boder-black text-rose-600 ml-5 rounded-lg  hover:bg-green-300 text-lg"><a href="https://crypto-wise.netlify.app/">LIVE</a></button>
      </motion.div>
      <motion.div class="max-w-xs mx-4 mb-2 p-3 rounded-lg shadow-lg bg-cyan-500"
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      whileHover={{scale:1.1,}}
      transition={{duration:1}}
      >
        <img class="w-full h-48 rounded-lg"
          src={logo4}
          alt="product" />
        <div class="px-6 py-4 overflow-hidden">
          <h4 class="mb-3 text-xl font-semibold tracking-tight text-rose-600">Calculator</h4>
          <p class="leading-normal text-white">A very basic calculator completely build with React.</p>
        </div>
        <button className="h-8 w-16 bg-white border-2 boder-black text-rose-600 ml-5 rounded-lg  hover:bg-green-300 text-lg"><a href="https://jolly-concha-4ca525.netlify.app/">LIVE</a></button>
      </motion.div>
      {/* */}
      <motion.div class="max-w-xs mx-4 mb-2 p-3 rounded-lg shadow-lg bg-cyan-500"
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      whileHover={{scale:1.1,}}
      transition={{duration:1}}
      >
        <img class="w-full h-48 rounded-lg"
          src={logo5}
          alt="product" />
        <div class="px-6 py-4 overflow-hidden">
          <h4 class="mb-3 text-xl font-semibold tracking-tight text-rose-600">Foodie WebApp</h4>
          <p class="leading-normal text-white">Foodie is a WebApp which takes user input and searches matching the provided input and has add to favorites and remove from favorites functionality.</p>
        </div>
        <button className="h-8 w-16 bg-white border-2 boder-black text-rose-600 ml-5 rounded-lg  hover:bg-green-300 text-lg"><a href="https://astonishing-basbousa-b64d8c.netlify.app/">LIVE</a></button>
      </motion.div>
    </div>
   
  </div>
  );
}
export default Projects;