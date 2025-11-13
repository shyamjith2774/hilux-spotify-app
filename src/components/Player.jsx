import React, { useContext } from 'react'
import { assets,} from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {
    const {Track,seekbg,seekbar,PlayStatus,play,pause,Time,previous,next,seeksong}=useContext(PlayerContext)
    


  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
        {/* left section */}
        <div className='hidden lg:flex items-center gap-4'>
             {/* first it was songsdata& then   songsData changed to Track after creating state in context which is having also songsData  */}
            <img src={Track.image} className='w-12   ' alt="" />
                <div>                                                   
                    <p>{Track.name}</p>
                    <p>{Track.desc.slice(0,12)}</p>
                </div>
        </div>

            {/* center section */}
        <div className='flex flex-col items-center gap-1 m-auto'>
            <div className='flex gap-4'>
                <img src={assets.shuffle_icon} className='w-4 cursor-pointer' alt="" />
                <img onClick={previous} src={assets.prev_icon} className='w-4 cursor-pointer' alt="" />
                { PlayStatus? <img src={assets.pause_icon} onClick={pause} className='w-4 cursor-pointer' alt="" />
                : <img src={assets.play_icon} onClick={play} className='w-4 cursor-pointer' alt="" />}
                <img onClick={next} src={assets.next_icon} className='w-4 cursor-pointer' alt="" />
                <img src={assets.loop_icon} className='w-4 cursor-pointer' alt="" />
            </div>
            <div className='flex items-center gap-4'>
                <p>{Time.currentTime.minute}:{Time.currentTime.second}</p>
                <div  ref={seekbg} onClick={seeksong} className='w-[60vw] max-w-[500px] bg-gray-400 rounded-full cursor-pointer'>
                    <hr ref={seekbar} className='h-1 border-none w-0 bg-green-800 rounded-full'/>
                </div>
                <p>{Time.totalTime.minute}:{Time.totalTime.second}</p>
            </div>
        </div>

            {/* right section */}
            <div className='hidden lg:flex items-center  gap-2  cursor-pointer'>
                <img src={assets.plays_icon} className='w-4' alt="" />
                <img src={assets.mic_icon} className='w-4' alt="" />
                <img src={assets.queue_icon} className='w-4' alt="" />
                <img src={assets.speaker_icon} className='w-4' alt="" />
                <img src={assets.volume_icon} className='w-4' alt="" />
                <div className='w-10 bg-slate-50 h-1 rounded'></div>
                <img src={assets.mini_player_icon} className='w-4' alt="" />
                <img src={assets.zoom_icon} className='w-4' alt="" />

            </div>
    </div>
  )
}

export default Player