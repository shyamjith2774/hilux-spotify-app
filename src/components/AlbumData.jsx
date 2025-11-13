import React, { useContext, useEffect,useRef } from 'react'
import { useParams, } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'
import Navbar from './Navbar'
import { PlayerContext } from '../context/PlayerContext'

const AlbumData = () => {
    const {id}=useParams()
    const albumdata=albumsData[id]
    const {PlayWithID}=useContext(PlayerContext)
        
  return (
    <>
        <Navbar/>
        {/* first section */}
        <div  className='flex mt-10 gap-8 flex-col md:flex-row md:items-end  '  >
            
             <img src={albumdata.image} className='w-48 rounded' alt="" />

             <div className='flex flex-col'>
                <p>Playlist</p>
                
                 <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumdata.name}</h2>
                 
                  <h4 className=''>{albumdata.desc} </h4>
                   
                    <div className='mt-1 '>
                        
                        <img src={assets.spotify_logo} className='inline-block w-6  pr-2' alt="" />
                        <b>Spotify</b>* 12,345 Likes  *<b>50 songs,</b>  About 2 hr 30 min
                        
                    </div>
             </div>
        </div>

        {/* songs heading section       */}
        <div className='grid grid-cols-3 md:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
            <p><b className='mr-4'>#</b>Title</p>
            <p>Album</p>
            <p className='hidden md:block'>Date Added</p>
            <img src={assets.clock_icon}  className=' w-4 ' alt="" />
            
        </div>
        <hr />
        {/* somgs list section */}
       
       {songsData.map((items)=>(
        
        <div onClick={()=>PlayWithID(items.id)} key={items.id} className='grid grid-cols-3 md:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7]  hover:bg-[#ffffff2b] cursor-pointer'>
            <div className='text-white flex items-center'>
                <b className='mr-4 text-[#a7a7a7}'>{items.id+1}</b>
                 <img src={items.image} className='inline w-10 mr-5' alt="" />
               <p className='hidden md:block'>  {items.name}</p>
            </div>
            <p className='text-[15px]'>{items.name}</p>
            <p className='text-[15px] hidden md:block'>289 Days Ago</p>
            <p className='text-[15px] '>{items.duration}</p>
           
        </div>

        
       ))}
       
     
        
    </>
  )
}

export default AlbumData