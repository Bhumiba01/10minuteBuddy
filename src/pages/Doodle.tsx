import Doodle1 from "../assets/images/doodles/doodle-1.jpg"
import Doodle2 from "../assets/images/doodles/doodle-2.jpg"
import Doodle3 from "../assets/images/doodles/doodle-3.jpg"
import Doodle4 from "../assets/images/doodles/doodle-4.jpg"
import Doodle5 from "../assets/images/doodles/doodle-5.jpg"
import Doodle6 from "../assets/images/doodles/doodle-6.jpg"
import Doodle7 from "../assets/images/doodles/doodle-7.jpg"
import Doodle8 from "../assets/images/doodles/doodle-8.jpg"
import Doodle9 from "../assets/images/doodles/doodle-9.jpg"
import Doodle10 from "../assets/images/doodles/doodle-10.jpg"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const Doodle = () => {

  const doodleImgs = [
    {img : Doodle1, src: "doodle-1"},
    {img : Doodle2, src: "doodle-2"},
    {img : Doodle3, src: "doodle-3"},
    {img : Doodle4, src: "doodle-4"},
    {img : Doodle5, src: "doodle-5"},
    {img : Doodle6, src: "doodle-6"},
    {img : Doodle7, src: "doodle-7"},
    {img : Doodle8, src: "doodle-8"},
    {img : Doodle9, src: "doodle-9"},
    {img : Doodle10, src: "doodle-10"},
  ]

  const [currentImg, setCurrentImg] = useState(doodleImgs[0]);
  const [timer, setTimer] = useState(600); // 10 minutes in seconds
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * doodleImgs.length);
    setCurrentImg(doodleImgs[randomIndex]);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getRandomImage();
    }, timer * 1000); // Convert timer to milliseconds

    return () => clearInterval(interval); 

  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  return (
    <div className="h-screen flex flex-col w-full justify-center gap-2 items-center">
      <div className=" w-[500px] h-[500px] rounded-[999px] absolute top-0 right-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-red-200 via-purple-300 to-purple-200">
      </div>
      <div className=" w-[500px] h-[500px] rounded-[999px] absolute top-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-red-200 via-pink-300 to-pink-200"></div>

      <div className="flex bg-transparent/5 w-80 h-80 rounded-md shadow-lg flex-col gap-10 items-center justify-center ">
        <div className="flex items-center justify-center button rounded-full bg-transparent/5 shadow-md h-72 w-72">
          <img src={currentImg.img} alt={currentImg.src} className="rounded-md h-full w-full object-fill"/>     
        </div>
      </div>
      
      <Button onClick={getRandomImage} className="text-white bg-black hover:bg-white hover:text-black">Random Image</Button>
      <p>Time Left: {formatTime(timer)}</p>      
    </div>
  )
}

export default Doodle