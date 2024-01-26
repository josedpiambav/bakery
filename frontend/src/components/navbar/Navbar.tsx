// react
import React, {
  useMemo,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
// mui
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
//router
import { Link, useLocation } from "react-router-dom";
// styles
import logo from "assets/img/ladingPage/logo.png";
import useStyles from "./styles";

interface NavbarProps {
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ drawerOpen, setDrawerOpen }: NavbarProps) => {
  const classes = useStyles();
  const location = useLocation();
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const textButton = useMemo(() => {
    const routeToButtonText: Record<string, string> = {
      "/": "Job-Angebote",
      "/impressum": "Job-Angebote",
    };

    return routeToButtonText[location.pathname] || "Contact Us";
  }, [location.pathname]);

  const handleResize = () => {
    return window.innerWidth <= 1043
      ? setMobileView(true)
      : setMobileView(false);
  };

  const displayDesktop = () => {
    return (
      <>
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
              <Typography
                variant="h6"
                component={Link}
                to="/"
                className={classes.textNavbar}
              >
                HomePage
              </Typography>
              <Typography
                variant="h6"
                component={Link}
                to="/locations"
                className={classes.textNavbar}
              >
                Locations
              </Typography>
              <Typography
                variant="h6"
                component={Link}
                to="/products"
                className={classes.textNavbar}
              >
                Products
              </Typography>
              <Typography
                variant="h6"
                component={Link}
                to="/aboutus"
                className={classes.textNavbar}
              >
                About Us
              </Typography>
              <Typography
                variant="h6"
                component={Link}
                to="/jobs"
                className={classes.textNavbar}
              >
                Jobs
              </Typography>
              <Typography
                variant="h6"
                component={Link}
                to="/news"
                className={classes.textNavbar}
              >
                News
              </Typography>
            </div>
            <div>
              <Button
                color="inherit"
                component={Link}
                to="/contactus"
                className={classes.button}
              >
                {textButton}
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () => setDrawerOpen(true);
    const handleDrawerClose = () => setDrawerOpen(false);

    return (
      <Toolbar
        style={{
          width: "65% !important",
          alignItems: "center",
          textAlignLast: "center",
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerClose}
          style={{
            width: '300px',
            alignItems: "center",
            textAlignLast: "center",
          }}
          PaperProps={{ style: { width: '65%' } }}
        >
          <List >
            <ListItem style={{ justifyContent: "center" }}>
              <ListItemAvatar style={{ minWidth: "0px" }}>
                <Avatar alt="img logo" src={logo} />
              </ListItemAvatar>
            </ListItem>
            {[
              { text: "HomePage", path: "/" },
              { text: "Locations", path: "/locations" },
              { text: "Products", path: "/products" },
              { text: "About Us", path: "/aboutus" },
              { text: "Jobs", path: "/jobs" },
              { text: "News", path: "/news" },
            ].map((item, index) => (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                onClick={handleDrawerClose}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
            <ListItem>
              <Button
                color="inherit"
                component={Link}
                to="/contactus"
                className={classes.button}
              >
                {textButton}
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    );
  };

  return (
    <>
      <Box width="100%">{mobileView ? displayMobile() : displayDesktop()}</Box>
    </>
  );
};

export default Navbar;
