import Meditation from "../assets/images/meditation.jpg";
import EyeExercise from "../assets/images/eyeexercise.jpg";
import Walking from "../assets/images/walking.jpg";
import Music from "../assets/images/music.jpg";
import { Link } from "react-router-dom";
import DoodleImg from "../assets/images/doodle.png"

const HomePage = () => {

  const activities = [
    {activityImg: Meditation, activityTitle:"Meditation",activityLink: "/meditation"},
    {activityImg: EyeExercise, activityTitle:"Sight Savvy",activityLink: "/eyeworkout"},
    {activityImg: Walking, activityTitle:"Walk",activityLink: "/walking"},
    {activityImg: Music, activityTitle:"Music",activityLink: "/music"},
    {activityImg: DoodleImg, activityTitle:"Doodling",activityLink: "/doodle"},
    {activityImg: Music, activityTitle:"Music",activityLink: "/music"},
    {activityImg: Music, activityTitle:"Music",activityLink: "/music"},
    {activityImg: Music, activityTitle:"Music",activityLink: "/music"},
  ]

  return (
    <div className="min-h-screen flex justify-center gap-2 items-center w-full">
      <div className=" w-[500px] h-[500px] rounded-[999px] absolute top-0 right-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-red-200 via-purple-300 to-purple-200">
      </div>
      <div className=" w-[500px] h-[500px] rounded-[999px] absolute top-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-red-200 via-pink-300 to-pink-200"></div>
      <div className="gap-4">
        <h2 className="text-center text-5xl m-3">Activities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 flex-wrap">
        {activities.map((item,index) => (
        <Link to={item.activityLink} className="bg-transparent/5 shadow-lg bg-clip-border rounded-xl w-48 p-2 cursor-pointer" key={index}>
        <img src={item.activityImg} alt="" className="h-[150px] rounded-sm w-full  object-fill" />
        <h3 className="text-center">{item.activityTitle}</h3>
        </Link>
        ))}
      </div> 
      </div>
           
    </div>
  )
}

export default HomePage