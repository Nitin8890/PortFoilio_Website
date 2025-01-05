import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import lg1 from "./svg/whatsapp.png"
import lg2 from "./svg/linkedin.png"
import lg3 from "./svg/gmail.png"
import {motion} from "framer-motion";

export default function Contacts() {
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_5penn5r', 'template_41m0g8g', form.current, '28367iLewIWpQoFA2')
    .then((result) => {
        console.log(result.text);
        alert("Mail Sent,Thank You!!!.")
    }, (error) => {
        console.log(error.text);
        alert("There is an error! Mail was not sent");
    });
    e.target.reset();
};


  return (
    <motion.div className=' m-0 p-5' id='Contacts'>
    <hr className="h-1 container mx-auto "></hr>

        <h1 className='contacts text-6xl  p-16 text-center h-auto lbtn underline'>GET IN TOUCH!</h1>
        <motion.div className=' grid-flow-col justify-evenly space-y-5 sm:flex '
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}

        >
          <div className='grid grid-flow-row gap-2 mt-4 sm:grid-flow-row sm:gap-2 justify-center'>
            <button className='border-2 border-white transition duration-150 hover:scale-105 w-36 h-20 bg-gradient-to-br from-black  to-slate-900 text-center text-2xl  rounded-lg lbtn  shadow-2xl  flex justify-evenly items-center'>
            <img src={lg3} className="h-10 w-10" alt=''></img>
            <a href='mailto:rt346196@gmail.com'>MAIL</a>
            </button>
            <button className='transition duration-150 hover:scale-105 w-36 h-20 bg-gradient-to-br from-black  to-slate-900 text-center text-2xl  rounded-lg lbtn  shadow-2xl border-2 border-white flex justify-evenly items-center'>
            <img src={lg2} className="h-10 w-10" alt=''></img>
            <a href='https://www.linkedin.com/in/nitin-tiwari-75aa7a1b3/'>LinkedIn</a>
            </button>
            <button className='transition duration-150 hover:scale-105 w-36 h-20 bg-gradient-to-br from-black  to-slate-900 text-center text-2xl  rounded-lg lbtn  shadow-2xl border-2 border-white flex justify-evenly items-center'>
            <img src={lg1} className="h-10 w-10" alt=''></img>
            <a href='https://api.whatsapp.com/send?phone=9354414775'>What's App</a>
            </button>
          </div>
          <motion.div
          initial={{opacity:0,x:'100vw'}}
          animate={{opacity:1,x:0}}
          transition={{duration:1}}
          
          >
          <form ref={form} onSubmit={sendEmail} className='bg-gradient-to-br from-black  to-slate-900 rounded-xl h-auto grid grid-flow-row sm:grid-flow-row gap-10 justify-center w-auto sm:w-fit sm:justify-center shadow-xl p-4 border-2 border-white'>
            <input id='input' placeholder='Your Name' type='text' className='text-black rounded-lg w-auto h-auto sm:h-10 sm:w-96 border-2 border-black' name="name"></input>
            <input id='mail' placeholder='Email' type='email' className='text-black rounded-lg w-auto h-auto sm:h-10 sm:w-96 border-2 border-black' name="email"  required></input>
            <textarea type='text' placeholder='Type Your Message...' className='text-black rounded-lg w-auto h-auto sm:h-40 sm:w-96 border-2 border-black' name="message" required></textarea>
            <button  className='text-xl font-bold  text-black border-2 border-black w-28 rounded-lg bg-teal-300 transition duration-150 hover:scale-105 ' required>Sumbit</button>
          </form> 
          </motion.div>
           
        </motion.div>     
    </motion.div>
  )
}
