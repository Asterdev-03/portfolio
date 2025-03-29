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
      className="container mx-auto flex justify-between items-center text-center px-12 pt-6"
    >
      <div className="space-x-6 w-1/3 h-full">
        <button
          name="about"
          onClick={handleNavButtonClick}
          className="relative group"
        >
          ABOUT
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
        <button
          name="exp"
          onClick={handleNavButtonClick}
          className="relative group"
        >
          EXPERIENCE
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
        <button
          name="proj"
          onClick={handleNavButtonClick}
          className="relative group"
        >
          PROJECTS
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
        <button
          name="contact"
          onClick={handleNavButtonClick}
          className="relative group"
        >
          CONTACT
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
      </div>
      <div className="w-1/3 h-full flex justify-center">
        <div className="akcircle w-16 h-16 font-bold text-xl flex justify-center items-center bg-transparent border-2 border-white rounded-full">
          AK
        </div>
      </div>
      <div className="space-x-8 w-1/3 h-full flex justify-end">
        <a
          href="https://linkedin.com/in/aswinkarat/"
          target="_blank"
          className="hover:text-red-500"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://x.com/asterdev03/"
          target="_blank"
          className="hover:text-red-500"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://github.com/Asterdev-03/"
          target="_blank"
          className="hover:text-red-500"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.instagram.com/aster_dev/"
          target="_blank"
          className="hover:text-red-500"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default Header;
