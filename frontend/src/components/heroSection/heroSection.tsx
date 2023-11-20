import React, { useState, useEffect } from "react";
//router
import { Link } from "react-router-dom";
// components and styles
import { Button } from "@mui/material";
import { useStyles } from "./styles";

interface HeroProps {
  images: string;
  text: string;
  textButtons: {
    button1: string
    button2: string
  }
}

const Hero: React.FC<HeroProps> = ({ images, text, textButtons }) => {
  const [backgroundImage, setBackgroundImage] = useState(images);
  const classes = useStyles({ images: backgroundImage });

  useEffect(() => {
    setBackgroundImage(images);
    setTimeout(() => {}, 0);
  }, [images]);

  return (
    <div
      className={classes.hero}
      style={{
        backgroundImage: `url(${images})`,
        backgroundSize: "cover",
        height: "732px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: "2rem",
        textShadow: "2px 2px 4px #000000",
      }}
    >
      <p className={classes.text}>{text}</p>
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
    </div>
  );
};

export default Hero;
