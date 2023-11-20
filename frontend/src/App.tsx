// React
import React from "react";
// router
import Router from "./router";
// global components
import { SkeletonTheme } from "react-loading-skeleton";
import Navbar from "components/navbar/Navbar";
import Footer from "components/footer/footer";
// style
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "react-loading-skeleton/dist/skeleton.css";
import "./index.css";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "'Bebas Neue', sans-serif",
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      primary: {
        main: '#FFD020',
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Navbar />
          <Router />
          <Footer />
        </SkeletonTheme>
      </ThemeProvider>
    </div>
  );
}

export default App;
