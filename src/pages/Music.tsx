import React, { useEffect, useState } from 'react';
import { CiLight } from 'react-icons/ci';
import { PiSpeakerHigh, PiSpeakerSimpleX } from "react-icons/pi";
import { Slider } from '@/components/ui/slider';
import { LuCloudRain, LuWind } from 'react-icons/lu';
import Card from '@/components/main/card';
import { IoThunderstormOutline } from 'react-icons/io5';
import { TbBeach } from 'react-icons/tb';
import { GiBigWave, GiRiver, GiSplashyStream, GiWaterfall } from 'react-icons/gi';
import { MdScubaDiving } from 'react-icons/md';
import Timer from '@/components/main/timer';

const Music = () => {
  const [showSlider, setShowSlider] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(100);
  const [masterVal, setMasterVal] = useState<number>(100);

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    setMasterVal(volume);
    if (!isMuted) {
      setVolume(0);
    } else {
      setVolume(masterVal);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
  };

  const soundSources = [
    { Icon: <LuCloudRain className='w-16 h-16' />, soundSrc: "src/assets/sounds/rain.mp3" },
    { Icon: <IoThunderstormOutline className='w-16 h-16' />, soundSrc: "src/assets/sounds/thunder.mp3" },
    { Icon: <LuWind className='w-16 h-16' />, soundSrc: "src/assets/sounds/wind.mp3" },
    { Icon: <TbBeach className='w-16 h-16' />, soundSrc: "src/assets/sounds/seashore.mp3" },
    { Icon: <GiBigWave className='w-16 h-16' />, soundSrc: "src/assets/sounds/wave.mp3" },
    { Icon: <MdScubaDiving className='w-16 h-16' />, soundSrc: "src/assets/sounds/underwater.mp3" },
    { Icon: <GiWaterfall className='w-16 h-16' />, soundSrc: "src/assets/sounds/waterfall.mp3" },
    { Icon: <GiRiver className='w-16 h-16' />, soundSrc: "src/assets/sounds/river.mp3" },
    { Icon: <GiSplashyStream className='w-16 h-16' />, soundSrc: "src/assets/sounds/stream.mp3" }
  ];

  return (
    <div className="bg-indigo-900 text-indigo-200 font-sans min-h-screen">
      <div className='p-4 mb-20 grid grid-cols-3'>
        <div className='flex justify-start items-center'>10 Minute Buddy</div>
        <div className="flex justify-center items-center"><Timer/></div>
        <div className='flex justify-end items-center'>
          <div
            className='relative cursor-pointer flex p-2'
            onMouseEnter={() => setShowSlider(true)}
            onMouseLeave={() => setShowSlider(false)}
          >
            {showSlider && <Slider className='h-8 w-24 mr-5' value={isMuted ? [0] : [volume]} onChange={handleVolumeChange} />}
            {isMuted ? (
              <PiSpeakerSimpleX className='h-8 w-8 transition duration-300 ease-in-out hover:text-indigo-100' onClick={handleMuteToggle} />
            ) : (
              <PiSpeakerHigh className='h-8 w-8 transition duration-300 ease-in-out hover:text-indigo-100' onClick={handleMuteToggle} />
            )}
          </div>
          <span className='cursor-pointer flex p-2'>
            <CiLight className='h-8 w-8 transition duration-300 ease-in-out hover:text-indigo-100' />
          </span>
        </div>
      </div>
      <div className='w-1/2 mx-auto grid grid-cols-6 gap-12 flex-row justify-items-center'>
        {soundSources.map((source, index) => (
          <Card
            key={index}
            Icon={source.Icon}
            soundSrc={source.soundSrc}
            masterVolume={volume}
          />
        ))}
      </div>
    </div >
  )
}

export default Music;