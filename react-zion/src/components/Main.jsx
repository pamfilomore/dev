import React from "react";
import "./index.css";
import {
  Card,
  CardContainer,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <>
      <Container maxWidth="false" disableGutters>
        <div
          style={{
            backgroundImage: `url(${require("../assets/img/img4.jpg")})`,
            height: "805px",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "inline-block" /* remove extra space below image */,
            opacity: "100%",
          }}
        >
          <div className="text-white text-center">
            Explore
            <br></br>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Main;
