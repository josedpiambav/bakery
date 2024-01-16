/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
// route
import { Link } from 'react-router-dom';
// MUI
import {
  Button,
  Typography,
  TextField,
  SelectChangeEvent,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// styles
import useStyles from "./styles";
// data
import { dataProd } from "data/homeLanding";
// icon
import iconButton from "assets/img/jobs/icon.png";
import iconButtonSelect from "assets/img/jobs/iconSelect.png";

interface MyComponentProps {
  items: {
    img?: string;
    titleMedium: string;
    titleLarge: string;
    price: string;
    description: string;
    dropdown1?: string[];
    dropdown2?: string[];
  };
}

const Products: React.FC<MyComponentProps> = ({ items }) => {
  const classes = useStyles();
  const [dropdown1Value, setDropdown1Value] = useState("");
  const [dropdown2Value, setDropdown2Value] = useState("");
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleDropdown1Change = (event: SelectChangeEvent) => {
    setDropdown1Value(event.target.value as string);
  };

  const handleDropdown2Change = (event: SelectChangeEvent) => {
    setDropdown2Value(event.target.value as string);
  };

  return (
    <div>
      <div className={classes.headContent}>
        <Typography component="div" className={classes.titleHead}>
          Entdecke unsere Backwaren
        </Typography>
        <Typography component="div" className={classes.descriptionHead}>
          Our wide selection of baked goods is waiting for you to explore! Use
          the filters to easily find sweet desserts, savory breads, pastries and
          more to satisfy your cravings.
        </Typography>
      <div className={classes.buttonsHead}>
        <Button
          variant="outlined"
          className={classes.buttonCareer}
          style={{
            marginRight: "10px",
            border: "1px solid rgb(0 0 0 / 50%)",
          }}
          startIcon={
            <img
              src={iconButton}
              alt="icon"
              style={{ width: "24px", height: "24px" }}
            />
          }
        >
          Signature
        </Button>
        <Button
          variant="outlined"
          className={classes.buttonCareerSelect}
          style={{
            marginRight: "10px",
            border: "1px solid rgb(0 0 0 / 50%)",
          }}
          startIcon={
            <img
              src={iconButtonSelect}
              alt="icon"
              style={{ width: "24px", height: "24px" }}
            />
          }
        >
          Signature
        </Button>
        <Button
          variant="outlined"
          className={classes.buttonCareer}
          style={{
            marginRight: "10px",
            border: "1px solid rgb(0 0 0 / 50%)",
          }}
          startIcon={
            <img
              src={iconButton}
              alt="icon"
              style={{ width: "24px", height: "24px" }}
            />
          }
        >
          Signature
        </Button>
      </div>
      <TextField
        className={classes.search}
        variant="outlined"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="z.B. Brot mit Weizenmehl und Roggenmehl"
        InputProps={{
          startAdornment: <SearchIcon color="inherit" />,
        }}
      />
      </div>
      <Typography component="div" className={classes.categoryTitle}>
        Unsere Produkte
      </Typography>
      <div className={classes.contentCardProducts}>
        {dataProd.map((item, i) => (
          <div key={i} className={classes.componentCard}>
            <Card className={classes.card} style={{ boxShadow: "none" }}>
              <CardActionArea component={Link} to="/details-products" style={{ width: "min-content" }}>
                <div style={{ textAlign: "-webkit-center" as any }}>
                  <CardMedia
                    component="img"
                    height="340"
                    width="auto"
                    image={item.img}
                    alt={item.title}
                    style={{ width: "auto" }}
                  />
                </div>
                <CardContent>
                  <Typography component="div" className={classes.type}>
                    {item.type}
                  </Typography>
                  <div className={classes.contentTittlePrice}>
                    <Typography
                      variant="h5"
                      component="div"
                      className={classes.title}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      component="div"
                      className={classes.title}
                    >
                      €{item.price}
                    </Typography>
                  </div>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className={classes.description}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Typography component="div" className={classes.viewMore}>
              <a style={{ color: "#292929" }} href="/#">
                View Details
              </a>
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
