import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'

import NavBar from './components/Nav'
import Main from './components/Main'
import About from './components/About'
import GradientImg from './components/GradientImage'
import Rates from './components/Rates';

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
        <Rates />
    </ThemeProvider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
