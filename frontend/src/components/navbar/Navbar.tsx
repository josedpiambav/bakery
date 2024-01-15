// react
import React, { useMemo } from "react";
// mui
import { AppBar, Toolbar, Typography, Button} from "@mui/material";
//router
import { Link, useLocation } from "react-router-dom";
// styles
import logo from "assets/img/ladingPage/logo.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();

  const textButton = useMemo(() => {
    const routeToButtonText: Record<string, string> = {
      '/': 'Job-Angebote',
      '/impressum': 'Job-Angebote',
    };
  
    return routeToButtonText[location.pathname] || 'Contact Us';
  }, [location.pathname]);
  

  return (
    <>
      <div className={classes.preNavbar} />
      <AppBar
        position="static"
        color="default"
        className={classes.containerNavbar}
      >
        <Toolbar className={classes.itemsNavbar}>
          <div className={classes.containerNavAndLogo}>
            <Typography variant="h6" component={Link} to="/">
              <img src={logo} alt="Logo" className={classes.logo} />
            </Typography>
            <Typography variant="h6" component={Link} to="/" className={classes.textNavbar}>
              HomePage
            </Typography>
            <Typography variant="h6" component={Link} to="/locations" className={classes.textNavbar}>
              Locations
            </Typography>
            <Typography variant="h6" component={Link} to="/products" className={classes.textNavbar}>
              Products
            </Typography>
            <Typography variant="h6" component={Link} to="/aboutus" className={classes.textNavbar}>
              About Us
            </Typography>
            <Typography variant="h6" component={Link} to="/jobs" className={classes.textNavbar}>
              Jobs
            </Typography>
            <Typography variant="h6" component={Link} to="/news" className={classes.textNavbar}>
              News
            </Typography>
          </div>
          <div>
            <Button color="inherit" component={Link} to="/contactus" className={classes.button}>
              {textButton}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
