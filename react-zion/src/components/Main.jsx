import React from "react";
import "./index.css";
import { Container } from "@mui/material";
import { motion } from "framer-motion";
import videoBg from "../assets/ClipF.mp4";
import logo from "../assets/tranparentLogo.png";
const Main = () => {
  return (
    <>
      <Container maxWidth="false" disableGutters>
        <div className="relative flex h-[100vh] shrink-0 flex-col items-center justify-center ">
          <video
            className="absolute -z-10 w-full h-full object-cover overflow-hidden brightness-110"
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
          >
            <source src={videoBg} type="video/mp4" />
          </video>
          <h1 className="text-white"></h1>
          <button className="absolute rounded-full animate-bounce bottom-3 ">
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
          </button>
        </div>
      </Container>
    </>
  );
};

export default Main;