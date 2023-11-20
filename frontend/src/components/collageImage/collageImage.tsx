import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import useStyles from "./style";

interface ImgProps {
  item: {
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    img5: string;
    text1: string;
    text2: string;
  };
}

const ImageCollage: React.FC<ImgProps> = ({ item }) => {
  const classes = useStyles();
  const images = [
    { url: item.img1, className: classes.mainImage },
    {
      url: item.img2,
      className: classes.sideImage1,
      text1: item.text1,
      text2: item.text2,
    },
    { url: item.img3, className: classes.sideImage2 },
    { url: item.img4, className: classes.bottomImage },
    { url: item.img5, className: classes.bottomImage },
  ];

  return (
    <Grid container>
      <Grid item xs={12} md={7}>
        <Paper
          style={{ backgroundImage: `url(${images[0].url})`, borderRadius: 0 }}
          className={images[0].className}
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <Paper
          style={{
            backgroundImage: `url(${images[1].url})`,
            borderRadius: 0,
            display: "flex",
            flexFlow: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "wrap",
            alignContent: "center",
          }}
          className={images[1].className}
        >
          <Typography style={{ padding: 0 }} className={classes.title}>
            {images[1].text1}
          </Typography>
          <Typography style={{ padding: 0 }} className={classes.title}>
            {images[1].text2}
          </Typography>
        </Paper>
        <Paper
          style={{ backgroundImage: `url(${images[2].url})`, borderRadius: 0 }}
          className={images[2].className}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper
          style={{ backgroundImage: `url(${images[3].url})`, borderRadius: 0 }}
          className={images[3].className}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper
          style={{ backgroundImage: `url(${images[4].url})`, borderRadius: 0 }}
          className={images[4].className}
        />
      </Grid>
    </Grid>
  );
};

export default ImageCollage;
