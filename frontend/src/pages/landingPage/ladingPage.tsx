import React from "react";
// components
import Hero from "components/heroSection/heroSection";
import ImageCollage from "components/collageImage/collageImage";
import Presentation from "components/presentation/presentation";
import Rrss from "components/RRSSS/rrss";
import GalleryFooter from "components/galleryFooterImg/galleryFooter";
// mui
import Carousel from "react-multi-carousel";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Button,
  Grid,
  Paper,
  Box,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
// style
import useStyles from "./styles";
import "react-multi-carousel/lib/styles.css";
// img
import backgroundLanding from "assets/img/ladingPage/backgroundLanding.png";
import Rectangle1 from "assets/img/ladingPage/Rectangle1.png";
import Rectangle2 from "assets/img/ladingPage/Rectangle2.png";
import Rectangle3 from "assets/img/ladingPage/Rectangle3.png";
import Rectangle4 from "assets/img/ladingPage/Rectangle4.png";
import Rectangle5 from "assets/img/ladingPage/Rectangle5.png";
import VectorImg from "assets/img/ladingPage/Vector.png";
import Frame from "assets/img/ladingPage/Frame.png";
import leftImg1 from "assets/img/ladingPage/leftImg1.png";
import leftImg2 from "assets/img/ladingPage/leftImg2.png";
import Rectangle from "assets/img/ladingPage/Rectangle.png";
import arrowRightCircle from "assets/img/ladingPage/arrowRightCircle.png";
// data
import { dataCarousel } from "data/homeLanding";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    customTransition: "transform 500ms ease-in-out",
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    customTransition: "transform 500ms ease-in-out",
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    customTransition: "transform 500ms ease-in-out",
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    customTransition: "transform 500ms ease-in-out",
  },
};

const itemImg = {
  img1: Rectangle1,
  img2: Rectangle2,
  img3: Rectangle3,
  img4: Rectangle4,
  img5: Rectangle5,
  text1: 'Echte Qualität.',
  text2: 'Nach Eigenen Rezepturen.',
};

interface CardProps {
  item: {
    type: string;
    title: string;
    price: number;
    description: string;
    img: string;
  };
}

const Item: React.FC<CardProps> = ({ item }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} style={{ boxShadow: 'none' }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          width="1340"
          image={item.img}
          alt={item.title}
        />
        <CardContent>
          <Typography component="div" className={classes.type}>
            {item.type}
          </Typography>
          <div className={classes.contentTittlePrice}>
            <Typography variant="h5" component="div" className={classes.title}>
              {item.title}
            </Typography>
            <Typography variant="h5" component="div" className={classes.title}>
              €{item.price}
            </Typography>
          </div>
          <Typography
            variant="body2"
            color="text.secondary"
            className={classes.description}
          >
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const LandingPage: React.FC = () => {
  const classes = useStyles();

  const text =
    "Since 1888 in halstenbek, today at 13 locations between schenefeld and elmshorn.";
  const text2 =
    "Looking for a job you can loaf? Then become part of the Schlüti family!";
  const title1 = "Welcome to";
  const title2 = "Bäcker Schlüter!";
  const description =
    "For 135 years,Bäcker Schlüter has stood for the best baked goods, handmade and really delicious. Fancy a crisp Meisterling or a warm Franzbrötchen? Come by - we are there for you in 13 branches between Schenefeld and Elmshorn!";
  const buttonText = "Our Store";

  const textButtons = {
    button1: 'our products',
    button2: 'our store',
  }

  const leftImages = [
    {
      url: leftImg1,
      text: "Vegan bread in the summer",
      icon: (
        <IconButton color="primary">
          <FavoriteIcon />
        </IconButton>
      ),
    },
    {
      url: leftImg2,
      text: "Explore Our Delicious Creations!",
      icon: (
        <IconButton color="primary">
          <FavoriteIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <div>
      <Hero key={backgroundLanding} images={backgroundLanding} text={text} textButtons={textButtons} />
      <div className={classes.contentTextTitle}>
        <p className={classes.tileText}>Our products</p>
        <div className={classes.paragraphContainer}>
          <p className={classes.paragraph}>
            On our shelves you will find over 500 delicious products, sweet and
            savory, for morning, noon and night, always of the highest quality
            and made with the best ingredients.
          </p>
        </div>
      </div>
      <div>
        <Carousel responsive={responsive} className={classes.mainCarousel}>
          {dataCarousel.map((item, i) => (
            <Item key={item.key} item={item} />
          ))}
        </Carousel>
      </div>
      <div className={classes.buttonShop}>
        <Button className={classes.customButton} variant="contained">
          shop all
        </Button>
      </div>
      <ImageCollage item={itemImg} />
      <div className={classes.vector}>
  <Grid container spacing={2} className={classes.content} alignItems='center' justifyContent='center'>
    <Grid item xs={12} md={7} className={classes.contentVector}>
      <Typography className={classes.textVector}>{text2}</Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.customButton}
      >
        Apply Now
      </Button>
    </Grid>
    <Grid item xs={12} md={5}>
      <Paper
        elevation={0}
        style={{
          backgroundImage: `url(${VectorImg})`,
          backgroundSize: "contain",
          height: "584px",
          width: "100%",
          maxWidth: "592px",
          border: "none",
          backgroundRepeat: 'no-repeat'
        }}
      />
    </Grid>
  </Grid>
</div>
      <Presentation
        imageUrl={Frame}
        title1={title1}
        title2={title2}
        description={description}
        buttonText={buttonText}
      />
      <div className={classes.root}>
        <Grid container spacing={2} className={classes.classesMainGrid}>
          <Grid item xs={12} md={6}>
            {leftImages.map((image, index) => (
              <Box
                key={index}
                style={{
                  backgroundImage: `url(${image.url})`,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
                className={classes.imageContainer}
              >
                <Box className={classes.textIcon}>
                  <Typography variant="body1" className={classes.textRoot}>
                    {image.text}
                  </Typography>
                  <IconButton>
                    <img src={arrowRightCircle} alt="icon" />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={6} className={classes.alterGrid}>
            <Box className={classes.containerTextRoot}>
              <Typography variant="h4" className={classes.textTitleRoot}>
                Backerschluter's Bakery News
              </Typography>
              {description && (
                <Typography variant="body1" className={classes.descriptionRoot}>
                  Stay in the loop with the latest updates, promotions, and
                  mouthwatering treats from our bakery. Discover what's baking!
                </Typography>
              )}
              {buttonText && (
                <Button color="inherit" className={classes.buttonRoot}>
                  View all news
                </Button>
              )}
            </Box>
            <div>
              <Box
                style={{ backgroundImage: `url(${Rectangle})` }}
                className={classes.largeImage}
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <Rrss />
      <GalleryFooter />
    </div>
  );
};

export default LandingPage;
