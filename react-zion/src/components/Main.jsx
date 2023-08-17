import React from "react";
import "./index.css";
import { Container } from "@mui/material";
import videoBg from "../assets/ClipF.mp4";
import logo from "../assets/tranparentLogo.png";
import { Link } from "react-scroll";

const Main = () => {
  return (
    <div
      className="relative z-0 flex h-[100vh] shrink-0 flex-col items-center justify-center"
      id="hero"
    >
      <video
        className="absolute w-full h-full object-cover overflow-hidden brightness-110"
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
      >
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="hero-label z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-header font-extrabold">
          LET'S GO CAMPING
        </h1>
      </div>

      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={1500}
        className="absolute rounded-full animate-bounce bottom-20 hover:animate-none hover:animate-ping hover:cursor-pointer"
      >
        <svg
          className="stroke-gray-500 fill-transparent h-12 w-12"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Main;
