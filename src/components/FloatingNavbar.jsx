import React from "react";
import { FaHome, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa";

// Floating Navbar
const Navbar = () => {
  const handleNavButtonClick = (e) => {
    document
      .getElementById(e.currentTarget.name)
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed z-50 bottom-4 left-1/2 transform -translate-x-1/2 inline-flex justify-between gap-x-2 bg-primary bg-opacity-20 px-3 py-1 rounded-3xl">
      <button
        name="home"
        onClick={handleNavButtonClick}
        className="hover:bg-white text-secondaryalt hover:text-black p-2 rounded-full flex items-center justify-center text-xl w-12 h-12"
      >
        <FaHome />
      </button>
      <button
        name="proj"
        onClick={handleNavButtonClick}
        className="hover:bg-white text-secondaryalt hover:text-black p-2 rounded-full flex items-center justify-center text-xl w-12 h-12"
      >
        <FaProjectDiagram />
      </button>
      <button
        name="skills"
        onClick={handleNavButtonClick}
        className="hover:bg-white text-secondaryalt hover:text-black p-2 rounded-full flex items-center justify-center text-xl w-12 h-12"
      >
        <FaTools />
      </button>
      <button
        name="contact"
        onClick={handleNavButtonClick}
        className="hover:bg-white text-secondaryalt hover:text-black p-2 rounded-full flex items-center justify-center text-xl w-12 h-12"
      >
        <FaEnvelope />
      </button>
    </div>
  );
};

export default Navbar;
