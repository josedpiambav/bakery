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
  }, [images])

  return (
    <div
      className={classes.hero}
      style={{
        background: "no-repeat center center",
        backgroundImage: `url(${RectangleCareer})`,
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        textShadow: "2px 2px 4px #000000",
        backgroundSize: mobileView ? 'contain' : "cover",
        height: mobileView ? "24vh" : "100vh",
        width: mobileView ? "100vw" : "",
        paddingLeft:  mobileView ? "0rem" : "2rem",
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
