import React, { useState, useRef } from "react";
// component
import Slider from "react-slick";
// mui
import {
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
  Typography,
  IconButton
} from "@mui/material";
// styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useStyles from "./styles";
// img
import afterButton from "assets/img/aboutUs/afterButton.png";
import beforeButton from "assets/img/aboutUs/beforeButton.png";

interface CardInfo {
  cards: {
    title: string;
    description: string;
    image: string;
  }[];
}

const CardCarousel: React.FC<CardInfo> = ({ cards }) => {
  const classes = useStyles();
  const [currentCard, setCurrentCard] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const visibleCards = 3.5; // Ajusta este valor según tus necesidades
  const totalScrollableCards = cards.length - visibleCards;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setCurrentCard(next / totalScrollableCards * 100),
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Slider {...settings} ref={sliderRef}>
        {cards.map((card, index) => (
          <div key={index}>
            <Card className={classes.cards}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.tile}>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                  {card.description}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                alt={card.title}
                height="243"
                image={card.image}
              />
            </Card>
          </div>
        ))}
      </Slider>
      <div className={classes.progressBar}>
        <div className={classes.progressNumber}>
          {/* <Typography variant="caption" display="block" gutterBottom className={classes.number}>
            {currentCard + 1}/{cards.length}
          </Typography> */}
        </div>
        <div className={classes.linearProgress}>
          <LinearProgress
            variant="determinate"
            value={currentCard}
            style={{ backgroundColor: 'rgb(241 241 241)' }}
          />
        </div>
        <div className={classes.buttonsProgress}>
          <IconButton onClick={goToPrev}>
            <img src={beforeButton} alt="" />
          </IconButton>
          <IconButton onClick={goToNext}>
            <img src={afterButton} alt="" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
