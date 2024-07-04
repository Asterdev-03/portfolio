import React from "react";

const About = () => {
  return (
    <div id="about" className="pt-10">
      <h1 className="text-6xl font-bold mb-14 text-center">About Me</h1>
      <div className="flex gap-x-20">
        <div className="flex w-2/6 justify-center items-center bg-black z-20"></div>
        <div className="w-3/6 text-justify">
          <p className="text-lg font-bold mb-2">I'm Aswin K,</p>
          <p className="text-base font-semibold mb-6">Software developer</p>
          <p className="text-sm font-medium mb-10">
            I'm a Software developer from Kerala, India. I have a Bachelor's
            degree in Computer Science and Engineering (BTech CSE). My passion
            for problem-solving has led me to develop a strong foundation in web
            development and software engineering, where I have gained hands-on
            experience in creating dynamic and efficient applications.
          </p>
          <p className="text-base font-medium mb-2">
            <span className="text-gold">Email:</span> temp@gmail.com
          </p>
          <p className="text-base font-medium mb-10">
            <span className="text-gold">Place:</span> Kerala, India - 679543
          </p>
          <div className="flex gap-x-4 justify-center items-center w-fit h-fit mb-7">
            <button
              onClick={() => {}}
              className="bg-secondaryalt z-20 hover:bg-transparent hover:text-secondaryalt text-colorbg px-6 py-2 rounded-lg border-2 border-secondaryalt"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
