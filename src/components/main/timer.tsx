import React, { useEffect, useState } from 'react'
import { GrPause, GrPlay, GrPowerReset } from 'react-icons/gr';

export default function timer() {
    const [seconds, setSeconds] = useState<number>(600);
    const [timerActive, setTimerActive] = useState<boolean>(false);
    
    useEffect(() => {
      const interval = setInterval(() => {
        if (timerActive && seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    
      return () => clearInterval(interval);
    }, [timerActive, seconds]);
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    const handlePauseResume = () => {
        setTimerActive((prevTimerActive) => !prevTimerActive);
      };
    
      const handleReset = () => {
        setSeconds(600);
        setTimerActive(false);
      };

  return (
    <div className='flex justify-center items-center'>
    <span className='cursor-pointer rounded-md flex p-2 bg-card-cardhover bg-opacity-5 transition duration-300 ease-in-out hover:bg-opacity-20' onClick={handleReset}>
      <GrPowerReset />
    </span>
    <span className='rounded-md flex p-2 m-3 bg-card-cardhover bg-opacity-5 transition duration-300 ease-in-out hover:bg-opacity-20'>
    {`${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`}
    </span>
    <span className='cursor-pointer rounded-md flex p-2 bg-card-cardhover bg-opacity-5 transition duration-300 ease-in-out hover:bg-opacity-20' onClick={handlePauseResume}>
      {timerActive ? <GrPause /> : <GrPlay />}
    </span>
  </div>
  )
}