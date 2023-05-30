import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
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
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Main />
            <About />
        </ThemeProvider>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
