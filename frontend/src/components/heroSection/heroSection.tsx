import React, { useState, useEffect } from "react";
//router
import { Link } from "react-router-dom";
// components and styles
import { Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useStyles } from "./styles";

interface HeroProps {
  images: string;
  text?: string;
  textButtons?: {
    button1: string
    button2: string
  }
}

const Hero: React.FC<HeroProps> = ({ images, text, textButtons }) => {
  const [backgroundImage, setBackgroundImage] = useState(images);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const classes = useStyles({ images: 'your-image-url', isMobile });
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

  useEffect(() => {
    setBackgroundImage(images);
    setTimeout(() => {}, 0);
  }, [images]);

  return (
    <div
      className={classes.hero}
      style={{
        background: 'no-repeat',
        backgroundImage: `url(${images})`,
        backgroundSize: mobileView ? 'contain' : "cover",
        height: mobileView ? "24vh" : "100vh",
        width: mobileView ? "100vw" : "",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        paddingLeft:  mobileView ? "0rem" : "15vw",
        textShadow: "2px 2px 4px #000000",
      }}
    >
      <div className={classes.content}>
        {text && (
          <p className={classes.text}>{text}</p>
        )}
        {textButtons && (
        <div className={classes.buttons}>
          <Button
            color="inherit"
            component={Link}
            to="/contactus"
            className={classes.button}
          >
            {textButtons.button1}
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            component={Link}
            to="/contactus"
            className={classes.button2}
          >
            {textButtons.button2}
          </Button>
        </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
