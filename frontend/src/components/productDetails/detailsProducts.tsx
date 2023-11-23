/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import {
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  SelectChangeEvent,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import useStyles from "./styles";
import product from "assets/img/products/product.png";
import plus from "assets/img/products/plus.png";
import { dataProd } from "data/homeLanding";

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

const Presentation: React.FC<MyComponentProps> = ({ items }) => {
  const classes = useStyles();
  const [dropdown1Value, setDropdown1Value] = useState("");
  const [dropdown2Value, setDropdown2Value] = useState("");
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);

  const handleDropdown1Change = (event: SelectChangeEvent) => {
    setDropdown1Value(event.target.value as string);
  };

  const handleDropdown2Change = (event: SelectChangeEvent) => {
    setDropdown2Value(event.target.value as string);
  };

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.imgContent}>
          <img src={product} alt="img" className={classes.image} />
        </div>
        <div className={classes.content}>
          <Typography className={classes.titleMedium}>
            {items.titleMedium}
          </Typography>
          <Typography variant="h4" className={classes.titleLarge}>
            {items.titleLarge}
          </Typography>
          <Typography variant="h6" className={classes.price}>
            {items.price}
          </Typography>
          <Typography variant="body1" className={classes.description}>
            {items.description}
          </Typography>
          <div className={classes.contentButton}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Go to Store
            </Button>
          </div>
          <Accordion>
            <AccordionSummary expandIcon={<img src={plus} alt="plus" />}>
              <Typography className={classes.dropDownMenu}>
                {"INGREDIENTS"}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {items &&
                items.dropdown1 &&
                items.dropdown1.map((option, index) => (
                  <Typography key={index}>{option}</Typography>
                ))}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<img src={plus} alt="plus" />}>
              <Typography className={classes.dropDownMenu}>
                {`MORE ABOUT ${items.titleLarge}`}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {items &&
                items.dropdown2 &&
                items.dropdown2.map((option, index) => (
                  <Typography key={index}>{option}</Typography>
                ))}
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <Typography component="div" className={classes.categoryTitle}>
        Category name
      </Typography>
      <div className={classes.contentCardProducts}>
        {dataProd.map((item, i) => (
          <div key={i} className={classes.componentCard}>
          <Card className={classes.card} style={{ boxShadow: 'none' }}>
            <CardActionArea>
              <div style={{ textAlign: '-webkit-center' as any }}>
              <CardMedia
                component="img"
                height="340"
                width="auto"
                image={item.img}
                alt={item.title}
                style={{ width: 'auto' }}
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
            <a style={{ color: '#292929' }} href="/#">View Details</a>
          </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Presentation;
