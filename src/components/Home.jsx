import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Home = () => {
  const words = [
    "Software Developement",
    "Web Developement",
    "Frontend Developement",
    "Backend Developement",
    "Game Developement",
  ];

  const typingSpeed = 120;
  const removingSpeed = 40;
  const pauseDuration = 800;

  const [displayedText, setDisplayedText] = useState("");
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  const timeoutId = useRef(null);

  const type = () => {
    const currentWord = words[wordIndex.current];

    if (isDeleting.current) {
      if (charIndex.current > 0) {
        charIndex.current -= 1;
        setDisplayedText(currentWord.substring(0, charIndex.current));
      } else {
        isDeleting.current = false;
        wordIndex.current = (wordIndex.current + 1) % words.length;
        timeoutId.current = setTimeout(type, typingSpeed);
        return;
      }
    } else {
      if (charIndex.current < currentWord.length) {
        charIndex.current += 1;
        setDisplayedText(currentWord.substring(0, charIndex.current));
      } else {
        isDeleting.current = true;
        timeoutId.current = setTimeout(type, pauseDuration);
        return;
      }
    }

    if (isDeleting.current) {
      timeoutId.current = setTimeout(type, removingSpeed);
    } else {
      timeoutId.current = setTimeout(type, typingSpeed);
    }
  };

  useEffect(() => {
    timeoutId.current = setTimeout(type, typingSpeed);
    return () => clearTimeout(timeoutId.current);
  }, []);

  return (
    <div className="flex flex-row gap-x-16 justify-center mb-40 w-full h-full">
      <div className="text-left w-1/2 flex flex-col justify-center items-start">
        <h1 className="text-5xl font-semibold mb-4">Hi There,</h1>
        <h1 className="text-5xl font-semibold mb-4">
          I'm <span className="text-gold">Aswin K</span>
        </h1>
        <h2 className="text-2xl font-medium mb-4">
          I Am Into{" "}
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            {displayedText}
          </span>
        </h2>
        <h4 className="text-justify text-lg font-light mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cumque
          incidunt, quisquam esse labore facilis suscipit
        </h4>
        <div className="flex gap-x-4 justify-center items-center w-fit h-fit mb-7">
          <button
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-secondaryalt z-20 hover:bg-transparent hover:text-secondaryalt text-colorbg px-6 py-2 rounded-lg border-2 border-secondaryalt"
          >
            About Me
          </button>
        </div>
        <div className="space-x-6 h-full flex justify-end">
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
      <div className="flex justify-center items-center z-20">
        <img src="./assets/vite.svg" width="150px" className="" />
      </div>
    </div>
  );
};

export default Home;
