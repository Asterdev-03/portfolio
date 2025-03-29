import React from "react";
import Cube from "../utils/Cube";

const Skills = () => {
  return (
    <div id="skills" className="items-center justify-center px-48 p-10 w-full">
      <h1 className="text-4xl font-bold mb-14 text-center">MY SKILLS</h1>

      <div className="grid grid-cols-6 gap-6">
        {[...Array(21)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-center"
          >
            <Cube index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
