import React, {useState, useEffect } from "react";
// component
import Hero from "components/heroSection/heroSection";
import Carousel from "components/carousel/carousel";
import CollageAbout from "components/collageAbout/collageAbaout";
// img
import imgHeroAbout from "assets/img/aboutUs/imgHeroAbout.png";
import RectangleBottom from "assets/img/aboutUs/RectangleBottom.png";
import RectangleRight from "assets/img/aboutUs/RectangleRight.png";
// mui
import { Typography, Button } from "@mui/material";
// style
import useStyles from "./styles";
//router
import { Link } from "react-router-dom";
// data
import { cardInfo, images } from "data/aboutus";

const AboutUs: React.FC = () => {
  const classes = useStyles();
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

  const text =
    "Bäcker Schlüter: 130 Years of Artisan Excellence - Taste Our Legacy!";

    const workfooter = {
      title: `We are bakers with all our heart and that's how we work.`,
      description: `The traditional baker's craft is always in the foreground for us: we work with real ingredients of the best quality, we make doughs according to our own recipes, we shape, loop and braid by hand.`,
      button1: 'Our products',
      button2: 'Our Store',
     };

  /* const textButtons = {
    button1: "Our Store",
    button2: "Our Products",
  }; */

  return (
    <div>
      <Hero
        key={imgHeroAbout}
        images={imgHeroAbout}
        text={text}
        /* textButtons={textButtons} */
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
      <CollageAbout item={images} />
      {/* <div className={classes.collage}>
        <div className={classes.miniCollage}>
          <div
            style={{
              backgroundImage: `url(${images[0].url})`,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Typography className={classes.title}>{images[0].title}</Typography>
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
          <img src={images[1].url} alt="image2" className={classes.image} />
        </div>
        <div className={classes.miniCollage}>
          <img src={images[2].url} alt="image3" className={classes.image} />
        </div>
        <div className={classes.childrenDownCollage}>
          <div className={classes.miniCollage1}>
            <img src={images[3].url} alt="image5" className={classes.image} />
          </div>
          <div className={classes.miniCollage1}>
            <img src={images[4].url} alt="image6" className={classes.image} />
          </div>
        </div>
        <div className={classes.childrenDownCollage2}>
          <div className={classes.miniCollage2}>
            <img src={images[5].url} alt="image5" className={classes.image} />
          </div>
          <div className={classes.miniCollage2}>
            <img src={images[6].url} alt="image6" className={classes.image} />
          </div>
        </div>
      </div> */}

      <div className={classes.lastDiv}>
        <div className={classes.secondDiv}>
          <div>
            <Typography className={classes.titleFooter}>{workfooter.title}</Typography>
            <Typography className={classes.descriptionFooter}>
              {workfooter.description}
            </Typography>
            <div>
              <Button className={classes.button1} color="inherit" component={Link} to="/products">
                {workfooter.button1}
              </Button>
              <Button
                className={classes.button2}
                color="inherit"
                variant="outlined"
                component={Link}
                to="/locations"
              >
                {workfooter.button2}
              </Button>
            </div>
          </div>
          <div className={classes.imgLeft}>
            <div
              style={{
                backgroundImage: `url(${RectangleBottom})`,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "flex",
                flexDirection: "column",
                flexWrap: "nowrap",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            />
          </div>
        </div>
        <div className={classes.imgRight}>
          <div
            style={{
              backgroundImage: `url(${RectangleRight})`,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              alignItems: "flex-start",
              justifyContent: "center",
              backgroundSize: mobileView ? 'contain' : undefined,
              backgroundRepeat: mobileView ? 'no-repeat' : undefined,
              backgroundPositionX: mobileView ? 'center' : undefined,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
