import React from "react";
import { Container } from "@mui/material";
import bgGradient from "../assets/img/img4.jpg";

const GradientImage = () => {
  return (
    <Container maxWidth="false" disableGutters className="">
      <div className="pt-5 w-full relative h-96 bg-gradient-to-t from-gray-600">
        <div className=" bottom-0 left-0 w-full">
          <img
            className="absolute mix-blend-overlay w-full h-full object-cover"
            src={bgGradient}
          />
        </div>
      </div>
    </Container>
  );
};

export default GradientImage;
