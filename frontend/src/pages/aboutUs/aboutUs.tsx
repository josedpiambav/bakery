import React from "react";
// component
import Hero from "components/heroSection/heroSection";
import Carousel from "components/carousel/carousel";
// img
import imgHeroAbout from "assets/img/aboutUs/imgHeroAbout.png";
// mui
import { Typography, Button } from "@mui/material";
// style
import useStyles from "./styles";
// data
import { cardInfo, images } from "data/aboutus";

const AboutUs: React.FC = () => {
  const classes = useStyles();
  const text =
    "Bäcker Schlüter: 130 Years of Artisan Excellence - Taste Our Legacy!";

  const textButtons = {
    button1: "Our Store",
    button2: "Our Products",
  };

  return (
    <div>
      <Hero
        key={imgHeroAbout}
        images={imgHeroAbout}
        text={text}
        textButtons={textButtons}
      />
      <div className={classes.contentTextTitle}>
        <p className={classes.tileText}>
          The <span className={classes.highlight}>Bäcker Schlüter</span> Story
        </p>
        <div className={classes.paragraphContainer}>
          <p className={classes.paragraph}>
            Backerschluter's journey from 1888 to today. This interactive
            timeline highlights our growth from a small neighborhood bakery into
            a beloved local chain known for quality baked goods.
          </p>
        </div>
      </div>
      <div className={classes.root}>
        <Carousel cards={cardInfo} />
      </div>
      <div className={classes.collage}>
        <div className={classes.mainDivCollage}>
          <div className={classes.miniCollageText}>
            <div
              style={{
                backgroundImage: `url(${images[0].url})`,
                width: "689px",
                height: "511px",
                objectFit: "cover",
                display: "flex",
                flexDirection: "column",
                flexWrap: "nowrap",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Typography className={classes.title}>
                {images[0].title}
              </Typography>
              <Typography className={classes.description}>
                {images[0].description}
              </Typography>
              <div className={classes.containerButton}>
                <Button variant="contained" className={classes.button}>
                  {images[0].buttonLink}
                </Button>
              </div>
            </div>
          </div>
          <div className={classes.miniCollage}>
            <img
              src={images[1].url}
              alt="image2"
              className={classes.imageTop2}
            />
          </div>
        </div>
        <div className={classes.mainDivCollage}>
          <div className={classes.miniCollage}>
            <img
              src={images[2].url}
              alt="image3"
              className={classes.imageDownCollage}
            />
          </div>
          <div className={classes.downCollage}>
            <div className={classes.childrenDownCollage}>
              <div className={classes.miniCollage}>
                <img
                  src={images[3].url}
                  alt="image5"
                  className={classes.image3}
                />
              </div>
              <div className={classes.miniCollage}>
                <img
                  src={images[4].url}
                  alt="image6"
                  className={classes.image4}
                />
              </div>
            </div>
            <div className={classes.childrenDownCollage}>
              <div className={classes.miniCollage}>
                <img
                  src={images[5].url}
                  alt="image5"
                  className={classes.image5}
                />
              </div>
              <div className={classes.miniCollage}>
                <img
                  src={images[6].url}
                  alt="image6"
                  className={classes.image6}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
