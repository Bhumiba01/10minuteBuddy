import { useEffect, useRef, useState } from "react";
import { FaPlay, FaStop } from "react-icons/fa"
import Meditate from "../assets/images/meditate.jpg"
const Meditation = () => {
  const audioUrl = "src/assets/sounds/breathing.mp3";
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setTimeLeft(600);
    }
  };

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleStop(); // Stop the audio when time is up
    }
  }, [isPlaying, timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };


  return (
    <div className="h-screen flex flex-col w-full justify-center gap-2 items-center">
      <audio  ref={audioRef} src={audioUrl} typeof="audio/mp3" loop/>
      <div className=" w-[500px] h-[500px] rounded-[999px] absolute top-0 right-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-red-200 via-purple-300 to-purple-200">
      </div>
      <div className=" w-[500px] h-[500px] rounded-[999px] absolute top-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-red-200 via-pink-300 to-pink-200"></div>
      <div className="flex gap-4 flex-wrap"></div>

      <div className="flex bg-transparent/5 w-64 h-64 rounded-md shadow-lg flex-col gap-10 items-center justify-center ">
        
        <div className="flex items-center justify-center button rounded-full bg-transparent/5 shadow-md h-32 w-32">
           <img src={Meditate} alt="meditation" className="rounded-md h-36 w-36 object-cover"/>
        </div>    
        <div className="flex gap-6 cursor-pointer">
          <button onClick={handlePlay} disabled={isPlaying}>
          <FaPlay className="hover:text-pink-600 cursor-pointer transition-transform active:scale-50 hover:scale-75 ease-in-out h-8 w-8"/>
          </button>
          <button onClick={handleStop} disabled={!isPlaying}>
          <FaStop className="hover:text-pink-600 cursor-pointer transition-transform active:scale-50 hover:scale-75 ease-in-out fade-in-20 h-8 w-8"/>
          </button>
        </div>
      </div>
      <p>Time Left: {formatTime(timeLeft)}</p>
    </div>
  )
}

export default Meditation