import React from "react";
import "./index.css";
import logo from "../assets/img/img2.jpg";
import { Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="lg" className="pt-14">
      <div className="text-slate-700 dark:text-slate-500">
        Talisay, Batangas
      </div>
      <div className=" text-4xl font-title">Zion Grace Campsite</div>
      <Typography className="pt-3 leading-loose">
        A tranquil and picturesque outdoor retreat nestled in the midst of
        nature's beauty. Located near Tagaytay, this campsite offers a serene
        environment where visitors can relax and unwind, away from the hustle
        and bustle of city life.
      </Typography>
      <Typography className="pt-4 leading-loose ">
        Provides you a peaceful escape from the daily stresses and demands of
        modern life. It is a place where individuals can truly "get out" and
        reconnect with nature.
      </Typography>

      <div className="pt-12 text-4xl font-title">Relax and Restore</div>
      <div className="pt-3 flex row ">
        <div className="leading-loose pr-6">
          Enjoy the stunning view of Taal and Taal Lake. Immerse yourself in the
          lush green landscapes, letting go of worries and finding inner peace
          amidst the beauty that surrounds you.
        </div>

        <img className="rounded-lg max-w-xs" src={logo} alt="" />
      </div>
    </Container>
  );
};

export default About;

//bg-slate-400
