import React from "react";

const projects = [
  {
    name: "Lecturer's Assessment Portal",
    desc: "Lorem ipsum dolor sit amet.",
    code: "https://github.com/Asterdev-03/quiz-web-app",
    image1: "./assets/portfolio1.jpg",
  },
  {
    name: "C Algorithms & Snippets",
    desc: "Lorem ipsum dolor sit amet.",
    code: "https://github.com/Asterdev-03/C",
    image1: "./assets/portfolio2.jpg",
  },
  {
    name: "Companion AI",
    desc: "Lorem ipsum dolor sit amet.",
    code: "https://github.com/Asterdev-03/companion-ai",
    image1: "./assets/portfolio3.jpg",
  },
  {
    name: "Discord Bot",
    desc: "Lorem ipsum dolor sit amet.",
    code: "https://github.com/Asterdev-03/Discord-Bot-JS",
    image1: "./assets/portfolio4.jpg",
  },
  {
    name: "Pig Jump",
    desc: "Lorem ipsum dolor sit amet.",
    code: "https://github.com/Asterdev-03/Pig-Jump",
    image1: "./assets/portfolio5.png",
  },
  {
    name: "Minesweeper",
    desc: "Lorem ipsum dolor sit amet.",
    code: "https://github.com/Asterdev-03/Minesweeper",
    image1: "./assets/portfolio6.jpg",
  },
];

const PersonalProjects = () => {
  return (
    <div id="personal" className="px-48 pb-20">
      <div className="grid grid-cols-3 w-full gap-3">
        {projects.map(({ name, desc, image1, code }, index) => (
          <div
            key={index}
            className="project-card bg-black w-full h-72 relative rounded-lg overflow-hidden"
            style={{
              backgroundImage: `url(${image1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="project-info text-center bg-white bg-opacity-40 text-black w-full h-60 absolute bottom-0 transition-transform duration-500 ease-in-out translate-y-3/4">
              <h1 className="bg-gold h-1/6 p-2 flex justify-center items-center text-xl font-bold">
                {name}
              </h1>
              <p className="p-3 mb-3 h-3/6 text-black font-normal text-base">
                {desc}
              </p>
              <a
                href={code}
                className="m-3 px-4 py-2 bg-black text-white hover:bg-violet-950 rounded-lg flex justify-center items-center"
              >
                Code {"</>"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalProjects;
