import React, { useState, useEffect } from "react";
// components and styles
import RectangleCareer from "assets/img/career/RectangleCareer.png";
import { useStyles } from "./styles";

interface HeroProps {
  images: string;
  text1: string;
  text2: string;
  text3: string;
}

const HeroImgAndText: React.FC<HeroProps> = ({
  images,
  text1,
  text2,
  text3,
}) => {
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
        backgroundImage: `url(${RectangleCareer})`,
        backgroundSize: "100% 100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingLeft: "2rem",
        textShadow: "2px 2px 4px #000000",
      }}
    >
      <div className={classes.div}>
        <p className={classes.text1}>{text1}</p>
        <p className={classes.text1}>
          {text2} <span className={classes.text2}>{text3}</span>
        </p>
      </div>
      <div className={classes.buttons}></div>
    </div>
  );
};

export default HeroImgAndText;
