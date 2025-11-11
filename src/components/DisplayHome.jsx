import React from 'react'
import Navbar from './Navbar'
import AlbumItems from './AlbumItems'
import { albumsData } from '../assets/assets'
import { songsData } from '../assets/assets'

const DisplayHome = () => {
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
                   {songsData.map((items)=>(
            <AlbumItems key={items.id} image={items.image} name={items.name} desc={items.desc} id={items.id}/>  
       ))}
        </div>

    </div>
    </>
  )
}

export default DisplayHome