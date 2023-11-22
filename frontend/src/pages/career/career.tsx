import React from "react";
import { Link } from "react-router-dom";
//mui
import { Button, Typography, Box, Card, CardContent } from "@mui/material";
// component
import HeroImgAndText from "components/onlyImageHeroHead/heroImgAndtext";
import ImageCollage from "components/collageImage/collageImage";
// img
import RectangleCareer from "assets/img/career/RectangleCareer.png";
import img1 from "assets/img/career/img1.png";
import logoCareer1 from "assets/img/career/logoCareer1.png";
import logoCareer2 from "assets/img/career/logoCareer2.png";
import bigImg from "assets/img/career/bigImg.png";
import smallImg from "assets/img/career/smallImg.png";
import careerCollage1 from "assets/img/career/careerCollage1.png";
import careerCollage2 from "assets/img/career/careerCollage2.png";
import careerCollage3 from "assets/img/career/careerCollage3.png";
import careerCollage4 from "assets/img/career/careerCollage4.png";
import careerCollage5 from "assets/img/career/careerCollage5.png";
// styles
import useStyles from "./styles";
// data
import { cards } from "data/cards";

const Career = () => {
  const classes = useStyles();

  const text1 = "Looking for a job you can loaf?";
  const text2 = "Then become part of";
  const text3 = "the Schlüti family!";

  const itemImg = {
    img1: careerCollage1,
    img2: careerCollage2,
    img3: careerCollage3,
    img4: careerCollage4,
    img5: careerCollage5,
    text1: "Echte Qualität.",
    text2: "Nach Eigenen Rezepturen.",
  };

  return (
    <div>
      <HeroImgAndText
        key={RectangleCareer}
        images={RectangleCareer}
        text1={text1}
        text2={text2}
        text3={text3}
      />
      <Box className={classes.root}>
        <Box className={classes.left}>
          <img className={classes.image} src={img1} alt={img1} />
          <div className={classes.contentText}>
            <Typography variant="h5" className={classes.title}>
              join our passionate team
            </Typography>
            <Typography variant="body1" className={classes.description}>
              At Backerchluter Bakery, we're always looking for talented,
              passionate individuals to join our team. As a close-knit family
              business, we value reliability, positivity and hard work. If you
              love baking, have an eye for detail and want to create exceptional
              products, this could be the perfect opportunity. Browse our
              current openings for positions like bakers, cashiers, customer
              service roles and more. We can't wait for you to be a part of
              crafting delicious moments from scratch!
            </Typography>
            <div className={classes.contentbutton}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                component={Link}
                to="/careerDetail"
              >
                apply now
              </Button>
            </div>
          </div>
        </Box>
        <Box className={classes.right}>
          <img
            className={classes.backgroundImage}
            src={logoCareer1}
            alt={logoCareer1}
          />
          <img
            className={classes.backgroundImage2}
            src={logoCareer2}
            alt={logoCareer2}
          />
          <Box className={classes.overlay}>
            <img className={classes.image2} src={bigImg} alt={bigImg} />
            <div
              style={{
                backgroundImage: `url(${smallImg})`,
                position: "absolute",
                top: "62%",
                width: "300px",
                height: "334px",
                zIndex: "2",
                borderTop: "19px solid white",
                borderRight: "19px solid white",
                left: "66px",
                maxWidth: '100%'
              }}
            ></div>
          </Box>
        </Box>
      </Box>
      <ImageCollage item={itemImg} />
      <div className={classes.rootCards}>
        <div>
          <Typography className={classes.titleCareer}>
            Let’s find a job
          </Typography>
          <Button
            variant="outlined"
            className={classes.buttonCareerSelect}
            style={{
              marginRight: "10px",
              border: "1px solid rgb(0 0 0 / 50%)",
            }}
          >
            All
          </Button>
          <Button
            variant="outlined"
            className={classes.buttonCareer}
            style={{
              marginRight: "10px",
              border: "1px solid rgb(0 0 0 / 50%)",
            }}
          >
            Büroartikel
          </Button>
          <Button
            variant="outlined"
            className={classes.buttonCareer}
            style={{
              marginRight: "10px",
              border: "1px solid rgb(0 0 0 / 50%)",
            }}
          >
            Corona Ambulanz
          </Button>
        </div>
        <div className={classes.contentCards}>
          {cards.map((item, i) => (
            <Card key={i} className={classes.card}>
              <CardContent style={{ padding: 0 }}>
                <div className={classes.times}>
                  {item.times.map((itemCard, i) => (
                    <div key={i} className={classes.smallDiv}>
                      {itemCard}
                    </div>
                  ))}
                </div>
                <Typography className={classes.titleCard}>
                  {item.title}
                </Typography>
                <Typography className={classes.descriptionCard}>
                  {item.description}
                </Typography>
                <div className={classes.priceAndButton}>
                  <Typography className={classes.priceCard}>
                    {item.price}
                  </Typography>
                  <Button color="inherit" className={classes.buttonCard}>apply</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
