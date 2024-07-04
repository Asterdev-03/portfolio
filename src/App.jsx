import React from "react";

import Header from "./sections/Header";
import Profile from "./sections/Profile";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import Navbar from "./components/FloatingNavbar";
import TrailEffect from "./utils/TrailEffect";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="w-full h-full bg-colorbg text-secondaryalt p-0 m-0 ">
      <TrailEffect />
      <Navbar />
      <div className="">
        <Header />
        <Profile />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
