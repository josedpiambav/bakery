import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  ButtonBase,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import newsDetail1 from "assets/img/newsDetails/newsDetail1.png";
import newsDetail2 from "assets/img/newsDetails/newsDetail2.png";
import useStyles from "./styles";
import { newsDetails } from "data/news";

const NewDetail = () => {
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

  return (
    <div>
      <div className={classes.mainBody}>
        <div className={classes.body}>
          <div className={classes.head}>
            <Typography variant="h4" className={classes.titleText}>
              Celebrating 130 Years of Baking Traditions
            </Typography>
          </div>
          <div>
            <div className={classes.contentText}>
              <Typography className={classes.text}>
                This April marks a special milestone for Backerschluter Bakery
                as we celebrate the 130th birthday of our founder, Wilhelm
                Backerschluter. Herr Backerschluter began our beloved
                neighborhood bakery in 1892, bringing the tastes of his hometown
                in Germany to our city.
              </Typography>
            </div>
            <div className={classes.contentText}>
              <Typography className={classes.text}>
                To honor our founder's legacy, we are bringing back the very
                first recipe Herr Backerschluter introduced - his Original
                German Chocolate Cake. This was the signature cake that put
                Backerschluter Bakery on the map over a century ago.
              </Typography>
            </div>
            <div className={classes.contentText}>
              <Typography className={classes.text}>
                Made from scratch with rich chocolate imported from Germany,
                fresh dairy, and topped with homemade coconut-pecan frosting,
                the German Chocolate Cake quickly became a local favorite. The
                nostalgic treat reminds us of how Backerschuter Bakery has been
                part of our community's cherished celebrations and traditions
                for generations.
              </Typography>
            </div>
          </div>
          <div className={classes.contentImg}>
            <Typography className={classes.text}>
              <img
                src={newsDetail2}
                alt={newsDetail2}
                style={{
                  width: mobileView ? "100%" : undefined,
                }}
              />
            </Typography>
          </div>
          <div className={classes.contentText}>
            <Typography className={classes.text}>
              We invite all our loyal customers and new friends to come enjoy a
              slice of the original German Chocolate Cake during the month of
              April. Indulge in a timeless classic and appreciate how our tastes
              have stayed consistent over 130 years thanks to the baking passion
              of Herr Backerschluter.
            </Typography>
          </div>
          <div className={classes.contentText}>
            <Typography className={classes.text}>
              Customers can enjoy the founder's cake with an Ice Cream Social on
              April 15th from 2-5pm at our Downtown Bakery on Main Street. Share
              your memories over cake, coffee, and frozen custard. A vintage
              Backerschluter Bakery truck will also be on display!
            </Typography>
          </div>
          <div className={classes.contentText}>
            <Typography className={classes.text}>
              Wilhelm Backerschluter had a vision for sharing his baking craft
              with his new hometown. We are honored to carry on his legacy more
              than a century later and look forward to serving our community for
              many years to come. Join us in celebrating 130 years of delicious
              traditions!
            </Typography>
          </div>
          <div className={classes.contentImg}>
            <Typography className={classes.text}>
              <img
                src={newsDetail1}
                alt={newsDetail1}
                style={{
                  width: mobileView ? "100%" : undefined,
                }}
              />
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.line} />
      <Typography variant="h4" className={classes.titleTextFooter}>
        Lastest news
      </Typography>
      <div className={classes.contentCards}>
        {newsDetails.map((item, i) => (
          <ButtonBase
            key={i}
            component={Link}
            to="/newDetail"
            style={{
              width: mobileView ? "100%" : undefined,
            }}
          >
            <Card className={classes.card} style={{ boxShadow: "none" }}>
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
      </div>
    </div>
  );
};

export default NewDetail;
