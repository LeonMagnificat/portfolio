import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E6DFD3",
    },
    secondary: {
      main: "#A62BF2",
    },
    orange: {
      main: "#9E3F0D",
    },
    delete: {
      main: "#D32B02",
    },
    white: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: ["Nunito, sans-serif", "Bentham, serif", "Inter Tight, sans-serif"],
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
