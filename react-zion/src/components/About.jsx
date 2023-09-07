import React from "react";
import "./index.css";
import c1 from "../assets/img/fc1.jpg";
import c2 from "../assets/img/fc2.jpg";
import c3 from "../assets/img/fc3.jpg";

import leaf from "../assets/leaves.png";
import nature from "../assets/nature.png";

import { Container } from "@mui/material";
import { Carousel } from "@material-tailwind/react";

const About = () => {
  return (
    <Container fixed maxWidth="lg" className="pt-6" id="about">
      <div className="p-6">
        <div className="pt-8 text-slate-500 text-center font-navFont text-sm md:text-base">
          Talisay, Batangas
        </div>
        <div className="text-3xl md:text-4xl font-title border-b border-gray-200 dark:text-slate-700 text-center">
          Zion Grace Campsite
        </div>
        <div className="pt-12 leading-loose text-sm md:text-base font-navFont">
          A tranquil and picturesque outdoor retreat nestled in the midst of
          nature's beauty. Located near Tagaytay, this campsite offers a serene
          environment where visitors can relax and unwind, away from the hustle
          and bustle of city life.
        </div>
        <div className="py-6 leading-loose text-sm md:text-base font-navFont">
          Provides you a peaceful escape from the daily stresses and demands of
          modern life. It is a place where individuals can truly "get out" and
          reconnect with nature.
          <div className="flex ">
            <img
              className="pt-4 absolute h-44 sm:h-64 md:h-72 lg:h-80"
              src={leaf}
              alt=""
            />
            <img className="rounded-b-lg h-72 sm:h-80 md:h-96" src={nature} />
          </div>
        </div>
      </div>

      <div className="lg:flex space-x-3 sm:flex-none p-6">
        <div>
          <div className="pt-11 text-2xl md:text-3xl font-header border-b border-gray-200 dark:text-slate-700">
            Relaxing Pleasure
          </div>
          <div className="pt-7 leading-loose text-sm md:text-base font-navFont">
            Enjoy the stunning view of Taal Volcano and Taal Lake. Immerse
            yourself in the lush green landscapes, letting go of worries and
            finding inner peace amidst the beauty that surrounds you.
          </div>
        </div>
        <div className="pt-7">
          <Carousel className="rounded-lg shadow-xl shadow-black/40 w-72 overflow-hidden transition-all delay-300 hover:scale-105 origin-bottom -rotate-1 hover:rotate-0">
            <img className="max-w-xs" src={c1} alt="" />
            <img className="max-w-xs" src={c2} alt="" />
            <img className="max-w-xs" src={c3} alt="" />
          </Carousel>
        </div>
      </div>
    </Container>
  );
};

export default About;

//bg-slate-400
