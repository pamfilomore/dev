import React from "react";
import "./index.css";
import { Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container
      maxWidth="lg"
      className=" h-96 border-dotted hover:border-solid border-4"
    >
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        className=" text-2xl"
      >
        About
      </Typography>
    </Container>
  );
};

export default About;
