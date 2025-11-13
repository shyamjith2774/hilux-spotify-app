import React from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
       
        {/* Home and Search section */}
        
        <div  className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            
                <Link to='/' className='flex items-center gap-3 pl-8 cursor-pointer'>
                    
                    <img src={assets.home_icon} className='w-6' alt="home icon" />
                    <p className='font-bold'>Home</p>

                </Link>
                
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    
                    <img src={assets.search_icon} className='w-6' alt="home icon" />
                    <p className='font-bold'>Search</p>

                </div>
        
        </div>

          {/* Your Library&create playlist Section */}

         <div className='bg-[#121212] h-[85%] rounded'>
               
            {/* your library */}
            <div className='p-4 flex items-center justify-between cursor-pointer'>
               
                <div className='flex items-center gap-3'>
                    <img src={assets.stack_icon} className='w-5' alt="" />
                    <p className='font-bold'>Your Library</p>
                </div>
               
                <div className='flex items-center gap-3'>
                    <img src={assets.arrow_icon} className='w-4' alt="" />
                    <img src={assets.plus_icon} className='w-4' alt="" />
                 </div>
           
            </div>

            {/* create playlist */}
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 cursor-pointer'>
                <h1>Create Your First playlist</h1>
                <p className='font-light'>it's easy we will help you</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 cursor-pointer'>
                    Create Playlist
                </button>
            </div>


             <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4 cursor-pointer'>
                <h1>Lets find Some Podcasts to Follow</h1>
                <p className='font-light'>we'll kee you updated on new episodes</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 cursor-pointer'>
                    Browse podcasts
                </button>
            </div>


        </div>



    </div>
  )
}

export default Sidebar