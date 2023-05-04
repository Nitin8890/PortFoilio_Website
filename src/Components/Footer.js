import React from 'react'

export default function Footer() {

  return (
    <footer className=' p-10 sm:w-full'>
      <hr className="h-1 container mx-auto "></hr>
      <div className='grid mt-10 justify-center'>
        <p className='text-lg text-white'>&copy; {(new Date().getFullYear())},<span className='name'>Nitin Tiwari</span>,All rights reserved</p>
      </div>
    </footer>
  );
}
