import React, { useEffect, useRef, useState } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaArrowAltCircleRight,
} from "react-icons/fa";

const Home = () => {
  const words = [
    "Software Developement",
    "Web Developement",
    "Frontend Developement",
    "Backend Developement",
    "Game Developement",
    "Java Developement",
    "Python Developement",
    "Full Stack Developement",
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
    <div className="flex flex-row gap-x-16 justify-center mb-32 w-full h-full">
      <div className="text-left w-1/2 flex flex-col justify-center items-start">
        <h1 className="text-4xl font-semibold mb-4">Hi There,</h1>
        <h1 className="text-5xl font-semibold mb-4">
          I'm <span className="text-gold">Aswin K</span>
        </h1>

        <h2 className="text-2xl font-medium mb-4">
          <span>I am into</span>
          <span className="pl-2 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            {displayedText}
          </span>
        </h2>

        <h4 className="text-justify text-lg font-light mb-4">
          Aspiring developer with a passion for problem-solving, seeking
          opportunities to apply skills to innovative projects in the field.
        </h4>

        <button
          className="flex justify-center items-center px-3 py-2 mb-7 z-20 bg-secondaryalt hover:bg-transparent hover:text-secondaryalt text-colorbg rounded-lg border-2 border-secondaryalt"
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="pr-2">About Me</span>
          <FaArrowAltCircleRight size={20} />
        </button>

        <div className="space-x-6 h-full flex justify-end">
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

      <div className="flex justify-center items-center z-20">
        <div className="w-60 h-60 rounded-3xl overflow-hidden">
          <img
            src="./assets/myAvatar.jpg"
            className="w-full h-full object-cover hover:scale-125 hover:-translate-y-8 hover:-translate-x-4 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
