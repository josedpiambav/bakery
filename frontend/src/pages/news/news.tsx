import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  ButtonBase,
} from "@mui/material";
import Masonry from "react-masonry-css";
import Hero from "components/heroSection/heroSection";
import Rrss from "components/RRSSS/rrss";
import newsImg from "assets/img/news/news.png";
import useStyles from "./styles";
import { newsData } from "data/news";

const News = () => {
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
    "Exceptional delights crafted daily. Experience joy in every handmade bite.";

  const textButtons = {
    button1: "our products",
    button2: "our store",
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div>
      <Hero
        key={newsImg}
        images={newsImg}
        text={text}
        textButtons={textButtons}
      />
      <div>
        <div className={classes.contentText}>
          <div className={classes.dividerDiv}>
            <Typography className={classes.title}>
              Bäcker Schlüter <span style={{ color: "#292929" }}>News</span>
            </Typography>
            <Typography className={classes.description}>
              Backerschluter's journey from 1888 to today. This interactive
              timeline highlights our growth from a small neighborhood bakery
              into a beloved local chain known for quality baked goods.
            </Typography>
          </div>
        </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          style={{
            display: "flex",
            textAlign: "-webkit-center" as any,
            flexDirection: mobileView ? "column" : undefined,
          }}
        >
          {newsData.map((item, i) => (
            <ButtonBase key={i} component={Link} to="/newDetail">
              <Card
                className={classes.card}
                style={{
                  boxShadow: "none",
                  width: mobileView ? "100%" : undefined,
                }}
              >
                <CardMedia
                  component="img"
                  className={classes.media}
                  image={item.img}
                  title={item.img}
                />
                <CardContent className={classes.contentTextCard}>
                  <Typography className={classes.titleCard}>
                    {item.title}
                  </Typography>
                  <Typography className={classes.descriptionCard}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </ButtonBase>
          ))}
        </Masonry>
      </div>
      <div className={classes.contentButton}>
        <Button color="inherit" className={classes.button}>
          Mehr Beiträge laden
        </Button>
      </div>
      <Rrss />
    </div>
  );
};

export default News;
