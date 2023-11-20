import React from "react";
// material
import { Grid } from "@mui/material";
// styles
import useStyles from "./styles";
// img
import gallery1 from "assets/img/ladingPage/gallery1.png";
import gallery2 from "assets/img/ladingPage/gallery2.png";
import gallery3 from "assets/img/ladingPage/gallery3.png";
import gallery4 from "assets/img/ladingPage/gallery4.png";
import gallery5 from "assets/img/ladingPage/gallery5.png";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

const GalleryFooter = () => {
  const classes = useStyles();
  const columns = images.length;
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
      {images.map((photo, index) => (
        <Grid item xs={12} sm={6} md={4} lg={12 / columns} xl={12 / columns} key={index}>
          <img src={photo} alt={photo} className={classes.img} />
        </Grid>
      ))}
    </Grid>
    </div>
  );
};

export default GalleryFooter;
