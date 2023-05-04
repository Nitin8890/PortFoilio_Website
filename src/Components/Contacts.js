import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import lg1 from "./svg/whatsapp.png"
import lg2 from "./svg/linkedin.png"
import lg3 from "./svg/gmail.png"


export default function Contacts() {
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_5penn5r', 'template_41m0g8g', form.current, '28367iLewIWpQoFA2')
    .then((result) => {
        console.log(result.text);
        alert("Mail Sent,Thank You for contacting us.")
    }, (error) => {
        console.log(error.text);
        alert("There is an error!");
    });
    e.target.reset();
};


  return (
    <div className=' p-5'>
    <hr className="h-1 container mx-auto "></hr>

        <h1 className='contacts text-6xl text-rose-600 p-16 text-center h-auto' id="Contacts">GET IN TOUCH!</h1>
        <div className=' grid-flow-col justify-evenly space-y-5 sm:flex'>
          <div className='grid grid-flow-row gap-2 sm:grid-flow-row sm:gap-2 justify-center '>
            <button className='transition duration-150 hover:scale-105 w-36 h-20 bg-white   text-rose-600 text-center text-2xl  rounded-lg lbtn  shadow-2xl border-2 border-black flex justify-evenly items-center'>
            <img src={lg3} className="h-10 w-10" alt=''></img>
            <a href='mailto:rt346196@gmail.com'>MAIL</a>
            </button>
            <button className='transition duration-150 hover:scale-105 w-36 h-20 bg-white   text-rose-600 text-center text-2xl  rounded-lg lbtn  shadow-2xl border-2 border-black flex justify-evenly items-center'>
            <img src={lg2} className="h-10 w-10" alt=''></img>
            <a href='https://www.linkedin.com/in/nitin-tiwari-75aa7a1b3/'>LinkedIn</a>
            </button>
            <button className='transition duration-150 hover:scale-105 w-36 h-20 bg-white   text-rose-600 text-center text-2xl  rounded-lg lbtn  shadow-2xl border-2 border-black flex justify-evenly items-center'>
            <img src={lg1} className="h-10 w-10" alt=''></img>
            <a href='https://api.whatsapp.com/send?phone=9354414775'>What's App</a>
            </button>
          </div>
            <form  ref={form} onSubmit={sendEmail} className='h-auto grid grid-flow-row sm:grid-flow-row gap-10 justify-center w-auto sm:w-fit sm:justify-center'>
              <input id='input' placeholder='Your Name' type='text' className='rounded-lg w-auto h-auto sm:h-10 sm:w-96 border-2 border-black' name="name"></input>
              <input id='mail' placeholder='Email' type='email' className='rounded-lg w-auto h-auto sm:h-10 sm:w-96 border-2 border-black' name="email"  required></input>
              <textarea type='text' placeholder='Type Your Message...' className='rounded-lg w-auto h-auto sm:h-40 sm:w-96 border-2 border-black' name="message" required></textarea>
              <button  className='text-xl text-white border-2 border-black w-28 rounded-lg bg-rose-600 transition duration-150 hover:scale-105 ' required>Sumbit</button>
          </form>  
        </div>     
    </div>
  )
}
