import React from 'react';
import ReactDOM from 'react-dom/client';
// import Header from './components/Header'

import NavBar from './components/Nav'
import Main from './components/Main'
import About from './components/About'
import GradientImg from './components/GradientImage'
import Amenities from './components/Amenities';

// import FoodHubs from './components/FoodHubs'
import FindUs from './components/FindUs'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import FacebookMsg from './components/FacebookMsg';
import VidGallery from './components/VidGallery';


import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';



const theme = createTheme({
    palette: {
        primary: {
            main: '#096a2e'
        },
        secondary: {
            main: '#1D4354'
        }
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Header /> */}
        <NavBar />
        <Main />
        <About />
        <GradientImg />
        <Amenities />
        <VidGallery />

        {/* <FoodHubs /> */}
        <FindUs />
        <FAQ />
        <Footer />
        <FacebookMsg />

    </ThemeProvider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
