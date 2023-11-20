import React from "react";
// mui
import { Typography, IconButton } from "@mui/material";
// styles
import useStyles from "./styles";
// img
import instagram from "assets/img/ladingPage/instagram.png";
import facebook from "assets/img/ladingPage/facebook.png";
import linker from "assets/img/ladingPage/linker.png";

const Rrss = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        follow us on social Media
      </Typography>
      <Typography variant="h4" className={classes.hastag}>
        #BäckerSchlüter
      </Typography>
      <div>
        <IconButton>
          <img src={instagram} alt="" />
        </IconButton>
        <IconButton>
          <img src={facebook} alt="" />
        </IconButton>
        <IconButton>
          <img src={linker} alt="" />
        </IconButton>
      </div>
    </div>
  );
};

export default Rrss;
