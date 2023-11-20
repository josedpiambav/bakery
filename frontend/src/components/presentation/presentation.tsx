import React from "react";
//router
import { Link } from "react-router-dom";
//mui and styles
import { Box, Typography, Button } from "@mui/material";
import useStyles from "./styles";

interface MyComponentProps {
  imageUrl: string;
  title1: string;
  title2: string;
  description?: string;
  buttonText?: string;
}

const Presentation: React.FC<MyComponentProps> = (props) => {
  const classes = useStyles(props);

  return (
    <Box
      /* className={classes.root} */
      style={{
        backgroundImage: `url(${props.imageUrl})`,
        backgroundSize: "cover",
        height: "938px",
        padding: "1em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <div className={classes.content}>
        <Typography variant="h4">
          <span className={classes.title1}>{props.title1}</span>
          {"   "}
          <span className={classes.title2}>{props.title2}</span>
        </Typography>
        {props.description && (
          <Typography variant="body1" className={classes.description}>
            {props.description}
          </Typography>
        )}
        {props.buttonText && (
          <Button
            color="inherit"
            component={Link}
            to="/contactus"
            className={classes.button}
          >
            {props.buttonText}
          </Button>
        )}
      </div>
    </Box>
  );
};

export default Presentation;
