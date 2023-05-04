import React from "react";
import {motion} from "framer-motion";
function About(){
    return(
        <motion.div className="">
        <hr className="h-1 container mx-auto "></hr>

        <h1 className="about text-6xl text-rose-600  h-auto text-center underline p-10" id="About">More of Me</h1>
            <div className="grid justify-center items-center">
                <motion.div className="grid justify-center items-center p-10 w-fit rounded-lg bg-cyan-500"
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:2}}
                >
                     <ol className="space-y-3">
                     <h1 className="name text-4xl text-white  h-auto text-center underline p-10">Compititive Coding and Hackathons</h1>
                        <li><span>&rarr; 2 ⭐ on CodeChef with Max rating 1500.</span></li>
                        <li><span>&rarr;Recieved certificate of participation in SMART ABESEC Hackathon.</span></li>
                        <li><span>&rarr;Solved 500+ DSA and Algorithms questions on different coding platforms.</span></li>
                        <li><span>&rarr;Completed my B.tech from <a className="underline text-white" href="https://www.abesit.in/">ABES Institute of technology</a> in CSE with overall GPA of 7.2(Current). </span></li>
                        <li><span>&rarr;Completed My schooling from <a className="underline text-white" href="https://janakpuri.kvs.ac.in/">KVS Janakpuri</a> in science(P.C.M) with overall Percentage of 89%.</span></li>
                    </ol>
                </motion.div>
            </div>
        </motion.div>
    );
}
export default About;