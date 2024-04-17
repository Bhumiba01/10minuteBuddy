import React, { useRef, useEffect, useState } from 'react';
import { Slider } from '@/components/ui/slider';

interface CardProps {
    Icon: React.ReactNode;
    soundSrc: string;
    masterVolume: number
}

const Card: React.FC<CardProps> = ({
    Icon,
    soundSrc,
    masterVolume
}) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(masterVolume);
    const handleToggleActive = () => {
        setIsActive(!isActive);
        if (audioRef.current) {
            if (!isActive) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    };

    const handleVolumeChange = (value: number[]) => {
        setVolume(value[0]);
        if (audioRef.current) {
            audioRef.current.volume = masterVolume * value[0] / 10000;
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            if (isActive) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
        if(audioRef.current)
            audioRef.current.volume = masterVolume * volume / 10000;
    }, [isActive, masterVolume]);

    return (
        <div className={`aspect-square w-full relative cursor-pointer flex justify-center items-center hover:bg-card-cardhover rounded-md ${isActive ? 'bg-card-cardhover text-skin-base' : ''}`}>
            <div className="icon" onClick={handleToggleActive}>
                {Icon}
            </div>
            {isActive && (
                <Slider
                    className='slider-secondary absolute bottom-0'
                    value={[volume]}
                    onChange={handleVolumeChange}
                />
            )}
            <audio ref={audioRef} src={soundSrc} loop />
        </div>
    );
};

export default Card;