import React, { useRef, useState, useEffect } from "react";

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

const Cube = ({ index }) => {
  const [activeFace, setActiveFace] = useState("front");
  const [isHovering, setIsHovering] = useState(false);
  const cubeRef = useRef(null);

  const handleMouseEnter = (e) => {
    if (!cubeRef.current) return;

    setIsHovering(true);

    const cube = cubeRef.current;
    const rect = cube.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x < 40) setActiveFace("left");
    else if (x > rect.width - 40) setActiveFace("right");
    else if (y < 40) setActiveFace("top");
    else if (y > rect.height - 40) setActiveFace("bottom");
    else setActiveFace("front");
  };

  const handleMouseLeave = () => {
    setActiveFace("front");
  };

  const getRotation = () => {
    switch (activeFace) {
      case "right":
        return "rotateY(-90deg)";
      case "left":
        return "rotateY(90deg)";
      case "top":
        return "rotateX(-90deg)";
      case "bottom":
        return "rotateX(90deg)";
      default:
        return "rotateY(0deg)";
    }
  };

  return (
    <div
      style={{
        perspective: "1000px",
        width: "100px", // Adjust as needed
        height: "100px", // Adjust as needed
        position: "relative",
        margin: "auto",
      }}
      ref={cubeRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="cube"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          transformStyle: "preserve-3d",
          transition: "transform 0.5s",
          transform: getRotation(),
        }}
      >
        {["front", "right", "left", "top", "bottom"].map((face) => (
          <div
            key={face}
            className={`face ${face}`}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",

              ...getFaceStyles(face),
            }}
          >
            <div className="flex flex-col items-center justify-center bg-dark p-3">
              {skills[index]?.icon}
              <span className="mt-3 text-sm font-semibold text-white">
                {skills[index]?.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      {!isHovering && (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      )}
    </div>
  );
};

const getFaceStyles = (face) => {
  switch (face) {
    case "front":
      return { transform: "translateZ(50px)" };
    case "right":
      return { transform: "translateX(50px) rotateY(90deg)" };
    case "left":
      return { transform: "translateX(-50px) rotateY(-90deg)" };
    case "top":
      return { transform: "translateY(-50px) rotateX(90deg)" };
    case "bottom":
      return { transform: "translateY(50px) rotateX(-90deg)" };
    default:
      return {};
  }
};

export default Cube;
