import React from "react";
// mui
import { Box, Container, Grid, Typography } from "@mui/material";
// img
import logoFooter from "assets/img/ladingPage/logoFooter.png";
// style
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{ bgcolor: "#3F3939", color: "white", p: 6 }}
      className={classes.footer}
    >
      <img src={logoFooter} alt="Logo" className={classes.img} />
      <Container
        className={classes.overlay}
        style={{ position: "relative", zIndex: 2, maxWidth: "100%" }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              EXPERIENCE THE ART OF TRADITIONAL GERMAN BAKING AT{" "}
              <span className={classes.highlight}>BÄCKER SCHÜTZER</span>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            className={classes.firstColumn}
            style={{
              flexDirection: "column",
              paddingLeft: "12%",
            }}
          >
            <div className={classes.mainOffice}>
              <Typography
                variant="subtitle1"
                gutterBottom
                className={classes.textTitle}
              >
                MAIN OFFICE
              </Typography>
              <Typography className={classes.textLinks}>
                Dockenhudener Chaussee 48
              </Typography>
              <Typography className={classes.textLinks}>
                25469 Halstenbek
              </Typography>
              <Typography className={classes.textLinks}>
                04101 / 41206
              </Typography>
              <Typography className={classes.textLinks}>
                info@baeckerschlueter.de
              </Typography>
            </div>
            <div>
              <Typography
                variant="subtitle1"
                gutterBottom
                className={classes.textTitle}
              >
                Social Media
              </Typography>
              <Typography className={classes.textLinks}>Facebook</Typography>
              <Typography className={classes.textLinks}>Instagram</Typography>
              <Typography className={classes.textLinks}>LinkedIn</Typography>
            </div>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle1"
              gutterBottom
              className={classes.textTitle}
            >
              Legal & Policies
            </Typography>
            <Typography className={classes.textLinks}>
              Certifications
            </Typography>
            <Typography className={classes.textLinks}>Impressum</Typography>
            <Typography className={classes.textLinks}>Privacy</Typography>
            <Typography className={classes.textLinks}>
              Term & conditions
            </Typography>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle1"
              gutterBottom
              className={classes.textTitle}
            >
              Navigation
            </Typography>
            <Typography className={classes.textLinks}>Homepage</Typography>
            <Typography className={classes.textLinks}>Location</Typography>
            <Typography className={classes.textLinks}>Products</Typography>
            <Typography className={classes.textLinks}>About us</Typography>
            <Typography className={classes.textLinks}>Jobs</Typography>
            <Typography className={classes.textLinks}>News</Typography>
          </Grid>
        </Grid>
      </Container>
      <Typography variant="body2" className={classes.footerText}>
        © 2023 Bäcker Schlüter. All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
