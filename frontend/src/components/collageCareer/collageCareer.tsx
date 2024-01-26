import React, { useState, useEffect } from "react";
// mui
import { Typography, Button, Paper } from "@mui/material";
// style
import useStyles from "./styles";

interface Item {
  subCollage?: boolean;
  url?: string;
  title?: string;
  description?: string;
  buttonLink?: string;
  text?: string;
}

interface ImgProps {
  item: Item[];
}

const CollageCareer: React.FC<ImgProps> = ({ item }) => {
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
    <>
      <div className={classes.miniCollage}>
        <div className={classes.miniCollageImgTop}>
          <img src={item[0].url} alt="image2" className={classes.imageTop} />
        </div>
        <div
          style={{
            objectFit: "cover",
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            alignItems: "flex-start",
            justifyContent: "center",
            backgroundColor: "#FFD020",
          }}
        >
          <Typography className={classes.title}>{item[1].title}</Typography>
          <Typography className={classes.description}>
            {item[1].description}
          </Typography>
          <div className={classes.containerButton}>
            {/* <Button variant="contained" className={classes.button}>
              {item[1].buttonLink}
            </Button> */}
          </div>
        </div>
      </div>
      <div className={classes.miniCollage}>
        <div
          style={{
            objectFit: "cover",
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            alignItems: "flex-start",
            justifyContent: "center",
            flex: "0 0 50",
            backgroundColor: "#3F3939",
          }}
        >
          <Typography className={classes.title}>{item[2].title}</Typography>
          <Typography className={classes.description2}>
            {item[2].description}
          </Typography>
          <div className={classes.containerButton2}>
            <Button variant="contained" className={classes.button2}>
              {item[2].buttonLink}
            </Button>
          </div>
        </div>
        <div className={classes.miniCollageImgTop}>
          <img src={item[3].url} alt="image2" className={classes.imageTop} />
        </div>
      </div>
      <div className={classes.root}>
        <Paper
          square
          className={classes.leftDiv}
          style={{
            backgroundImage: `url(${item[4].url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className={classes.rightDiv}>
          <div className={classes.topRightDiv}>
            <Paper
              sx={{
                color: "#292929",
                fontWeight: "700",
                textAlign: "center",
              }}
              square
              className={classes.textDiv}
            >
              <Typography className={classes.title2}>{item[5].title}</Typography>
              <Typography className={classes.description3}>
                {item[5].description}
              </Typography>
            </Paper>
            <Paper
              square
              className={classes.smallImage1}
              style={{
                backgroundImage: `url(${item[6].url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
          <div className={classes.topRightDiv}>
            <Paper
              square
              className={classes.smallImage2}
              style={{
                backgroundImage: `url(${item[7].url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Paper
              square
              className={classes.smallImage3}
              style={{
                backgroundImage: `url(${item[8].url})`,
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

export default CollageCareer;
