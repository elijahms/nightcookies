import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useState } from "react"

function App() {

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = createTheme({
    palette: {
      type: "light",
      mode: prefersDarkMode ? "dark" : "light",
      primary: {
        main: "#D566A6",
      },
      secondary: {
        main: "#7558cc",
      },
      background: {
        default: "#61C7C3",
      },
      text: {
        primary: "#FFFFFF",
        pink: "#D566A6",
      },
    },
    typography: {
      fontFamily: "FuturaBold, Raleway",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
