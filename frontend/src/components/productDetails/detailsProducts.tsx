/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
// router
import { useNavigate } from "react-router-dom";
// MUI
import {
  Typography,
  SelectChangeEvent,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Divider,
  IconButton,
} from "@mui/material";
// styles
import useStyles from "./styles";
// img and icon
import IconBack from "assets/img/products/arrow-right-circle.png";
import product from "assets/img/products/product.png";
import plus from "assets/img/products/plus.png";
// data
import { details } from "data/homeLanding";

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

interface NutritionRow {
  name: string;
  value: string;
}

const rows: NutritionRow[] = [
  { name: "Energie", value: "1094 kJ/258 kcal" },
  { name: "Fett", value: "2.1 g" },
  { name: "davon gesättigte Fettsäuren", value: "0.2 g" },
  { name: "Kohlenhydrate", value: "48.2 g" },
  { name: "davon Zucker", value: "4.7 g" },
  { name: "Eiweiß", value: "10.1 g" },
  { name: "Salz", value: "1.3 g" },
  { name: "Ballaststoffe", value: "3.2 g" },
];

const Presentation: React.FC<MyComponentProps> = ({ items }) => {
  const classes = useStyles();
  const [dropdown1Value, setDropdown1Value] = useState("");
  const [dropdown2Value, setDropdown2Value] = useState("");
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleDropdown1Change = (event: SelectChangeEvent) => {
    setDropdown1Value(event.target.value as string);
  };

  const handleDropdown2Change = (event: SelectChangeEvent) => {
    setDropdown2Value(event.target.value as string);
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconButton onClick={handleBackClick}>
          <img src={IconBack} alt="Volver atrás" />
        </IconButton>
        <Typography variant="body1">Produktübersicht</Typography>
      </div>
      <div className={classes.container}>
        <div className={classes.imgContent}>
          <Typography variant="h4" className={classes.titleHead}>
            {items.titleLarge}
          </Typography>
          <div className={classes.descriptionHeadContent}>
            <Typography variant="body1" className={classes.descriptionHead}>
              {items.description}
            </Typography>
          </div>
          <img src={product} alt="img" className={classes.image} />
        </div>
        <div className={classes.content}></div>
      </div>
      <div style={{ paddingLeft: "12rem", marginBottom: "92px" }}>
        <div className={classes.containerDes}>
          <div className={classes.imgContent}>
            <Typography variant="h4" className={classes.titleLarge}>
              Inhaltsstoffe
            </Typography>
            <Typography variant="body1" className={classes.description}>
              High in fiber, protein and antioxidants from whole spelt flour.
              Good source of B vitamins and minerals from oats and spelt. Low in
              fat and calories.
            </Typography>
          </div>
          <div className={classes.content}>
            <Typography variant="h4" className={classes.titleLarge}>
              Allergene
            </Typography>
            <Typography variant="body1" className={classes.description}>
              German bread, Spelt bread, Oat bread, Whole grain bread, Breakfast
              bread, Bread for sandwiches.
            </Typography>
          </div>
        </div>
      </div>
      <TableContainer
        component={Paper}
        style={{
          width: "28%",
          marginLeft: "12rem",
          marginBottom: "125px",
          boxShadow: "none",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          style={{ marginBottom: "45px" }}
        >
          NÄHRWERTTABELLE
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            className={classes.initTable}
          >
            DURCHSCHNITTLICHE NÄHRWERTANGABEN je 100g
          </Typography>
          <Typography variant="body2" color="text.secondary">
            je 100g
          </Typography>
        </div>
        <Divider style={{ height: "12px", backgroundColor: "black" }} />
        <Table>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" className={classes.name}>
                  {row.name}
                </TableCell>
                <TableCell align="right" className={classes.value}>
                  {row.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography component="div" className={classes.categoryTitle}>
        Schmeckt DIr auch
      </Typography>
      <div className={classes.contentCardProducts}>
        {details.map((item, i) => (
          <div key={i} className={classes.componentCard}>
            <Card className={classes.card} style={{ boxShadow: "none" }}>
              <CardActionArea>
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

export default Presentation;
