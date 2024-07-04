import React from "react";

const FeaturedProjects = () => {
  return (
    <div id="featured" className="px-48">
      <h1 className="pt-10 text-6xl font-bold mb-14 text-center">Projects</h1>
      <div className="flex mb-10 p-8 gap-4 h-fit w-full border-t border-l border-b-8 border-r-8 border-primaryalt rounded-3xl">
        <div className="bg-primaryalt p-0 w-1/2 rounded-2xl overflow-hidden">
          <a
            href="https://www.bluewaytradingcompany.info/"
            className="block w-full h-full"
          >
            <img
              src="./assets/pict1.jpg"
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
      <div className="flex mb-10 p-8 gap-4 h-fit w-full border-t border-l border-b-8 border-r-8 border-primaryalt rounded-3xl">
        <div className="bg-primaryalt p-0 w-1/2 rounded-2xl overflow-hidden">
          <a
            href="https://cita-official.vercel.app/"
            className="block w-full h-full"
          >
            <img
              src="./assets/cita.png"
              className="w-full h-full object-fillr hover:scale-125 transition-transform duration-500"
              alt=""
            />
          </a>
        </div>
        <div className="w-1/2 flex flex-col justify-left items-left text-left">
          <h3 className="text-secondary font-bold text-base underline mb-1">
            Featured Project
          </h3>
          <h1 className="mb-1 text-4xl font-semibold">CITA</h1>
          <h3 className="mb-5 text-sm font-light">Web Developer</h3>
          <p className="mb-5 font-normal text-base text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            minima adipisci placeat mollitia error laborum.
          </p>

          <a
            href="https://cita-official.vercel.app/"
            className="bg-secondaryalt hover:bg-transparent hover:text-secondaryalt text-colorbg p-2 rounded-lg border-2 border-secondaryalt w-fit"
          >
            Check it out!
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
