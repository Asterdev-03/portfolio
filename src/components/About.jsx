import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="pt-10">
      <h1 className="text-4xl font-bold mb-14 text-center">ABOUT ME</h1>

      <div className="flex gap-x-20 py-3">
        <div className="flex w-2/6 justify-center items-center z-20 overflow-hidden rounded-xl">
          <img
            src="./assets/myAvatar2.jpg"
            className="w-full h-full object-fill hover:scale-125 hover:-translate-x-10 transition-transform duration-500"
          />
        </div>

        <div className="w-3/6 text-justify font-medium pt-6">
          <p className="text-base mb-3">
            I'm a Software developer from India. I have a Bachelor's degree in
            Computer Science and Engineering (B.Tech. CSE) with Minor in
            Robotics and Automation.
          </p>
          <p className="text-base mb-3">
            Over one year of experience in software development, with a strong
            understanding of data structures, algorithms and OOP, along with
            hands-on experience in developing web applications and software
            solutions.
          </p>
          <p className="text-base mb-14">
            Skilled in full-stack development, with expertise in UI/UX design,
            agile methodologies and database management.
          </p>

          <button
            className="flex justify-center items-center px-3 py-2 mb-7 z-20 bg-secondaryalt hover:bg-transparent hover:text-secondaryalt text-colorbg rounded-lg border-2 border-secondaryalt"
            onClick={() => {
              window.open("./ASWIN_K.pdf");
            }}
          >
            <span className="pr-2">Resume</span>
            <FaCloudDownloadAlt size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
