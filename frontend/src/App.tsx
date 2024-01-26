// React
import React, { useState, useEffect } from "react";
// router
import Router from "./router"
// global components
import { SkeletonTheme } from "react-loading-skeleton";
import Navbar from "components/navbar/Navbar";
import Footer from "components/footer/footer";
// style
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "react-loading-skeleton/dist/skeleton.css";
import "./index.css";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const handleResize = () => {
    return window.innerWidth <= 1043
      ? setMobileView(true)
      : setMobileView(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        main: "#FFD020",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          body {
            overflow: ${drawerOpen ? "hidden" : "auto"};
          }
        `,
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            width: "19%",
            alignItems: "center",
          },
        },
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <CssBaseline />
          <Navbar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
          <Router />
          <Footer />
        </SkeletonTheme>
      </ThemeProvider>
    </div>
  );
}

export default App;
