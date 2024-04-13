import EyeWorkout from "./EyeWorkout";
import HomePage from "./HomePage";
import Meditation from "./Meditation";
import Music from "./Music";
import {Route, Routes } from "react-router-dom"
import WalkPage from "./WalkPage";
import Doodle from "./Doodle";

export const Relax = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/music" element={<Music/>}/>
        <Route path="/meditation" element={<Meditation/>}/>
        <Route path="/eyeworkout" element={<EyeWorkout/>}/>
        <Route path="/walking" element={<WalkPage/>}/>
        <Route path="/doodle" element={<Doodle/>}/>
      </Routes>
    </div>
  );
};

export default Relax;