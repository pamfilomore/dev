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
          <motion.div
            className="text-white absolute bottom-12 left-20 hover:underline text-4xl"
            gutterBottom
            variant="h5"
            component="div"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            Lets go
            <br></br>
            Outdoor!
          </motion.div>
        </div>
      </Container>
    </>
  );
};

export default Main;
