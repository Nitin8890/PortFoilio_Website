import React from 'react'

export default function Footer() {

  return (
    <footer className='m-0 p-10 sm:w-full bg-dc'>
      <div className='grid mt-10 justify-center'>
        <p className='text-lg'>&copy;{(new Date().getFullYear())},<span className='name text-t2'> Nitin Tiwari</span>, All rights reserved</p>
      </div>
    </footer>
  );
}
