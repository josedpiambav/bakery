import React from "react";
// mui
import { Typography, Button, Paper } from "@mui/material";
// style
import useStyles from "./styles";

interface Item {
  url: string;
  title?: string;
  description?: string;
  buttonLink?: string;
  text?: string;
}

interface ImgProps {
  item: Item[];
}

const CollageAbout: React.FC<ImgProps> = ({ item }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.miniCollage}>
        <div
          style={{
            backgroundImage: `url(${item[0].url})`,
            objectFit: "cover",
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            alignItems: "flex-start",
            justifyContent: "center",
            flex: "0 0 47%",
          }}
        >
          <Typography className={classes.title}>{item[0].title}</Typography>
          <Typography className={classes.description}>
            {item[0].description}
          </Typography>
          <div className={classes.containerButton}>
            <Button variant="contained" className={classes.button}>
              {item[0].buttonLink}
            </Button>
          </div>
        </div>
        <div className={classes.miniCollageImgTop}>
          <img src={item[1].url} alt="image2" className={classes.imageTop} />
        </div>
      </div>
      <div className={classes.root}>
        <Paper
          square
          className={classes.leftDiv}
          style={{
            backgroundImage: `url(${item[2].url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className={classes.rightDiv}>
          <div className={classes.topRightDiv}>
            <Paper
              square
              className={classes.smallImage1}
              style={{
                backgroundImage: `url(${item[3].url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Paper
              sx={{
                color: "rgb(255 208 32)",
                fontWeight: "700",
                textAlign: "center",
              }}
              square
              className={classes.textDiv}
            >
              {item[5].text}
            </Paper>
          </div>
          <div className={classes.topRightDiv}>
            <Paper
              square
              className={classes.smallImage2}
              style={{
                backgroundImage: `url(${item[4].url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Paper
              square
              className={classes.smallImage3}
              style={{
                backgroundImage: `url(${item[6].url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CollageAbout;
