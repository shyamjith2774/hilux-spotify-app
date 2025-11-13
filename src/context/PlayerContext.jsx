import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext()

const PlayerContextProvider = (props) => {

    const [Track, setTrack] = useState(songsData[2])
    const [PlayStatus, setPlaystatus] = useState(false)
    const [Time, setTime] = useState(
        {
            currentTime: {
                second: 0,
                minute: 0
            },
            totalTime: {
                second: 0,
                minute: 0

            }

        }

    )

    const audioref = useRef()
    const seekbg = useRef()
    const seekbar = useRef()

    const play=()=>{
            audioref.current.play()
            setPlaystatus(true)
    }
    const pause=()=>{
        audioref.current.pause()
        setPlaystatus(false)
    }

    const PlayWithID=async(id)=>{
        await setTrack(songsData[id]);
        await audioref.current.play();
        setPlaystatus(true)

    }

    // logic for previos and next buttons
    const previous =async ()=>{
        if(Track.id>0){
            await setTrack(songsData[Track.id-1]);
            await audioref.current.play()
            setPlaystatus(true)
        }
    }
     const next =async ()=>{
        if(Track.id<songsData.length-1){
            await setTrack(songsData[Track.id+1]);
            await audioref.current.play()
            setPlaystatus(true)
        }
    }

    const seeksong=async (e)=>{
     audioref.current.currentTime= ((e.nativeEvent.offsetX / seekbg.current.offsetWidth)*audioref.current.duration)
    }



        // for showing time proparties of song 
    useEffect(()=>{
            setTimeout(()=>{
                audioref.current.ontimeupdate=()=>{
                    // for seekbar
                    seekbar.current.style.width=(Math.floor(audioref.current.currentTime/audioref.current.duration*100))+"%";
                    setTime(
                          {
                            currentTime: {
                                second: Math.floor(audioref.current.currentTime % 60),
                                minute: Math.floor(audioref.current.currentTime / 60)
                            },
                            totalTime: {
                               second: Math.floor(audioref.current.duration % 60),
                                minute: Math.floor(audioref.current.duration / 60)
                            }   

                            }
                    )
                }
            })
    },[audioref])



    const contextvalue = {
        audioref,
        seekbg,
        seekbar,
        Track,setTrack,
        PlayStatus,setPlaystatus,
        Time,setTime,
        play,
        pause,
        PlayWithID,
        previous,next,
        seeksong
    }
    return (

        <PlayerContext.Provider value={contextvalue}>
            {props.children}
        </PlayerContext.Provider>
    )

}

export default PlayerContextProvider