import React from "react";
import FeaturedProjects from "../components/FeaturedProjects";
import PersonalProjects from "../components/PersonalProjects";

const Projects = () => {
  return (
    <div id="proj" className="text-center bg-dark">
      <FeaturedProjects />
      <PersonalProjects />
    </div>
  );
};

export default Projects;
