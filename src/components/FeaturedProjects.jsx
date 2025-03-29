import React from "react";
import { FaRegHandPointRight } from "react-icons/fa";

const featuredProjs = [
  {
    name: "CITA",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima adipisci placeat mollitia error laborum.",
    code: "https://cita-official.vercel.app",
    image: "./assets/cita.png",
  },
  {
    name: "Student Assessment Platform",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima adipisci placeat mollitia error laborum.",
    code: "https://cita-official.vercel.app",
    image: "./assets/cita.png",
  },
];

const FeaturedProjects = () => {
  return (
    <div id="featured" className="px-48">
      <h1 className="pt-10 text-4xl font-bold mb-14 text-center">PROJECTS</h1>

      {/*     
      <div className="flex mb-10 p-8 gap-4 h-80 w-full border-t border-l border-b-8 border-r-8 border-primaryalt rounded-3xl">
        <div className="bg-primaryalt p-0 w-1/2 rounded-2xl overflow-hidden">
          <a
            href="https://www.bluewaytradingcompany.info/"
            className="block w-full h-full"
          >
            <img
              src="./assets/btc.jpg"
              className="w-full h-full object-fill hover:scale-125 transition-transform duration-500"
              alt=""
            />
          </a>
        </div>
        <div className="w-1/2 flex flex-col justify-left items-left text-left">
          <h3 className="text-secondary font-bold text-base underline mb-1">
            Featured Project
          </h3>
          <h1 className="mb-1 text-4xl font-semibold">
            Blueway Trading Company
          </h1>
          <h3 className="mb-5 text-sm font-light">Web Developer</h3>
          <p className="mb-5 font-normal text-base text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            minima adipisci placeat mollitia error laborum.
          </p>

          <a
            href="https://www.bluewaytradingcompany.info/"
            className="bg-secondaryalt hover:bg-transparent hover:text-secondaryalt text-colorbg p-2 rounded-lg border-2 border-secondaryalt w-fit"
          >
            Check it out!
          </a>
        </div>
      </div> 
        */}

      {featuredProjs.map((proj) => (
        <div className="flex mb-10 p-8 gap-6 h-80 w-full border-t border-l border-b-8 border-r-8 border-primaryalt rounded-3xl">
          <div className="bg-primaryalt w-1/2 rounded-2xl overflow-hidden">
            <a href={proj.code}>
              <img
                src={proj.image}
                className="w-full h-full object-fill hover:scale-125 transition-transform duration-500"
              />
            </a>
          </div>

          <div className="w-1/2 flex flex-col justify-center items-left text-left">
            <h3 className="text-secondary font-bold text-base underline underline-offset-4 mb-3">
              Featured Project
            </h3>

            <h1 className="mb-5 text-gold text-3xl font-semibold">
              {proj.name}
            </h1>
            <p className="mb-5 font-normal text-base text-justify">
              {proj.desc}
            </p>

            <a
              href={proj.code}
              className="flex bg-secondaryalt hover:bg-transparent hover:text-secondaryalt text-colorbg p-2 rounded-lg border-2 border-secondaryalt w-fit"
            >
              <p className="pr-2">Check it out</p>
              <FaRegHandPointRight size={24} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProjects;
