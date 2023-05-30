import React from "react";
import "./index.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Box,
  Button,
  Container,
} from "@mui/material";

import logo from "../assets/green.png";
import styled from "@emotion/styled";
import { motion, useScroll } from "framer-motion";

const Logo = styled("img")(() => ({
  width: "9rem",
  minWidth: "9rem",
}));

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AppBar position="sticky" className="header" color="primary">
        <Container maxWidth="lg">
          <Toolbar className="toolbar" disableGutters>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <motion.div whileHover={{ scale: 0.9 }}>
                <a href="/">
                  <Logo
                    className="cursor-pointer"
                    src={logo}
                    alt="logo"
                    sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  />
                </a>
              </motion.div>
              <Stack direction="row" spacing={2}>
                <Button color="inherit" href="/" style={{ fontSize: 14 }}>
                  Contact us
                </Button>
                <Button color="inherit" style={{ fontSize: 14 }}>
                  About
                </Button>
                <Button color="inherit" style={{ fontSize: 14 }}>
                  Rates
                </Button>
                <Button color="inherit" style={{ fontSize: 14 }}>
                  Where
                </Button>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Button
                    variant="contained"
                    color="error"
                    style={{ fontSize: 15 }}
                  >
                    BOOK NOW
                  </Button>
                </motion.div>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
};

export default Header;

//style={{ borderStyle: "dashed", borderColor: "red" }}
