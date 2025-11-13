import React, { useContext } from 'react'
import Navbar from './Navbar'
import AlbumItems from './AlbumItems'
import { albumsData } from '../assets/assets'
import { songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const DisplayHome = () => {
      const {PlayWithID}=useContext(PlayerContext)

  return (
    <>
   
    <Navbar/>
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
                   {albumsData.map((items)=>(
            <AlbumItems key={items.id} image={items.image} name={items.name} desc={items.desc} id={items.id}/>  
       ))}
        </div>

    </div>

     <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Todays Biggest Hits</h1>
        <div className='flex overflow-auto'>
                   {songsData.map(({image,name,desc,id})=>(
            // <AlbumItems key={items.id} image={items.image} name={items.name} desc={items.desc} id={items.id}/>  
             <div onClick={()=>PlayWithID(id)} key={id}  className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] '>
                    <img src={image} className='rounded' alt="" />
                    <p className='font-bold mt-2 mb-1'>{name}</p>
                    <p className='text-slate-200 text-sm'>{desc}</p>

            </div>   
       ))}
        </div>

    </div>
    </>
  )
}

export default DisplayHome