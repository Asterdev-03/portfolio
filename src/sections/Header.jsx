import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Header = () => {
  const handleNavButtonClick = (e) => {
    document
      .getElementById(e.currentTarget.name)
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      id="home"
      className="container mx-auto flex justify-between items-center text-center p-3"
    >
      <div className="space-x-6 w-1/3 h-full">
        <button
          name="home"
          onClick={handleNavButtonClick}
          className="relative group"
        >
          Home
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
        <button
          name="about"
          onClick={handleNavButtonClick}
          className="relative group"
        >
          About
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
        <button
          name="proj"
          onClick={handleNavButtonClick}
          className="relative group"
        >
          Projects
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
        <button
          name="skills"
          onClick={handleNavButtonClick}
          className="relative group"
        >
          Skills
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
        <button
          name="contact"
          onClick={handleNavButtonClick}
          className="relative group"
        >
          Contact
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
      </div>
      <div className="w-1/3 h-full flex justify-center">
        <div className="akcircle w-16 h-16 flex justify-center items-center bg-transparent border-2 border-white rounded-full">
          AK
        </div>
      </div>
      <div className="space-x-6 w-1/3 h-full flex justify-end">
        <a href="#home" className="hover:text-blue-300">
          <FaLinkedin size={24} />
        </a>
        <a href="#about" className="hover:text-blue-300">
          <FaTwitter size={24} />
        </a>
        <a href="#projects" className="hover:text-blue-300">
          <FaGithub size={24} />
        </a>
        <a href="#contact" className="hover:text-blue-300">
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default Header;
