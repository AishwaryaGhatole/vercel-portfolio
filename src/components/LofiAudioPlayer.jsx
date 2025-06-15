import React, {useState, useEffect, useRef} from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const LofiAudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume ] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;

    if(isPlaying){
      audio.volume = 0;
      audio.play();

      let vol = 0;
      const fadeIn = setInterval(() => {
        if(vol < volume) {
          vol += 0.05;
          audio.volume = Math.min(vol, volume);
        } else {
          clearInterval(fadeIn)
        }
      }, 100)
    } else {
      let vol = audio.volume;
      const fadeOut = setInterval(() => {
        if(vol > 0){
          audio.volume = Math.max(vol, 0 )
        } else {
          clearInterval(fadeOut);
          audio.pause();
        }
      }, 100)
    }
  }, [isPlaying]);

  const toggleAudio = () =>{
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="./public/lofi-loop.mp3"
        loop
        preload="auto"
      />
      <button
      onClick={toggleAudio}
        className="fixed bottom-6 left-6 z-50 bg-violet-900 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
        aria-label="Toggle Lofi Sound"
        >
        {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
      </button>
    </>
  )
}

export default LofiAudioPlayer;