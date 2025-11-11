import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <>
    {/* First section of navbar */}
        
        <div className='w-full flex justify-between items-center font-semibold'>
           
            {/* left side arrow buttons of first section*/}
            <div className='flex items-center gap-3'>
                <img src={assets.arrow_left} className='w-8 bg-black p-2  rounded-full cursor-pointer' alt="" />
                <img src={assets.arrow_right} className='w-8 bg-black p-2  rounded-full cursor-pointer' alt="" />
            </div>

            {/* right side buttons of first section*/}
            <div className='flex items-center gap-4'>
                <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block'> Explore premium </p>
                <p className='bg-black py-1 px-4 rounded-2xl text-white text-[15px] cursor-pointer'>Install app</p>
                <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>S</p>
            </div>

        </div>


     {/* 2nd section of navbar */}

        <div className='flex items-center gap-2 mt-4 cursor-pointer'>      
            <p className='bg-white text-black px-4 py-1 rounded-2xl'>All</p>
            <p className='bg-black px-4 py-1 rounded-2xl'>Music</p>
            <p className='bg-black px-4 py-1 rounded-2xl'>Podcasts</p>
        </div>
    
    </>
  )
}

export default Navbar