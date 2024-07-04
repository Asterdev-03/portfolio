import React from "react";
import AnimatedBackground from "../utils/AnimatedBackground";
import Home from "../components/Home";
import About from "../components/About";

const Profile = () => {
  return (
    <div className="relative px-48 py-24 border-b-2 overflow-hidden">
      <AnimatedBackground />
      <Home />
      <About />
    </div>
  );
};

export default Profile;
