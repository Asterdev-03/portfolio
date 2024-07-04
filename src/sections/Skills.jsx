import React from "react";
import { FaCode, FaTools, FaDatabase } from "react-icons/fa";
import {
  DiJavascript1,
  DiPython,
  DiReact,
  DiNodejsSmall,
  DiDocker,
  DiAws,
  DiPostgresql,
  DiMongodb,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiTypescript,
  SiGraphql,
  SiRedux,
  SiDjango,
  SiFlask,
  SiFirebase,
  SiKubernetes,
} from "react-icons/si";
import Cube from "../utils/Cube";

const skills = [
  {
    name: "JavaScript",
    icon: <DiJavascript1 size={40} className="text-yellow-500" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={40} className="text-blue-500" />,
  },
  { name: "Python", icon: <DiPython size={40} className="text-blue-400" /> },
  { name: "Java", icon: <FaCode size={40} className="text-red-500" /> },
  { name: "C++", icon: <FaCode size={40} className="text-purple-500" /> },
  { name: "HTML", icon: <DiHtml5 size={40} className="text-orange-600" /> },
  { name: "CSS", icon: <DiCss3 size={40} className="text-blue-600" /> },
  { name: "React", icon: <DiReact size={40} className="text-blue-500" /> },
  { name: "Redux", icon: <SiRedux size={40} className="text-purple-600" /> },
  {
    name: "Tailwind",
    icon: <FaTools size={40} className="text-teal-500" />,
  },
  {
    name: "Node.js",
    icon: <DiNodejsSmall size={40} className="text-green-600" />,
  },
  { name: "Express", icon: <FaTools size={40} className="text-gray-700" /> },
  { name: "GraphQL", icon: <SiGraphql size={40} className="text-pink-500" /> },
  { name: "Django", icon: <SiDjango size={40} className="text-green-800" /> },
  { name: "Flask", icon: <SiFlask size={40} className="text-gray-600" /> },
  { name: "Git", icon: <FaTools size={40} className="text-orange-500" /> },
  { name: "Docker", icon: <DiDocker size={40} className="text-blue-500" /> },
  {
    name: "Kubernetes",
    icon: <SiKubernetes size={40} className="text-blue-400" />,
  },
  { name: "AWS", icon: <DiAws size={40} className="text-orange-400" /> },
  {
    name: "Firebase",
    icon: <SiFirebase size={40} className="text-yellow-600" />,
  },
  { name: "MongoDB", icon: <DiMongodb size={40} className="text-green-500" /> },
  {
    name: "PostgreSQL",
    icon: <DiPostgresql size={40} className="text-blue-500" />,
  },
  { name: "MySQL", icon: <FaDatabase size={40} className="text-blue-600" /> },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center px-48"
    >
      <div className="p-10 w-full">
        <h1 className="text-6xl font-bold mb-14 text-center">My Skills</h1>

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
    </div>
  );
};

export default Skills;
