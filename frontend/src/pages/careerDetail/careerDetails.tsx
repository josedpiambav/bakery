import React from "react";
import { Typography, Button } from "@mui/material";
import useStyles from "./styles";

const CareerDetails = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.header}>
        <div className={classes.tag}>
          <div className={classes.smallDiv}>Fulltime</div>
          <div className={classes.smallDiv}>1 opening</div>
          <div className={classes.smallDiv}>Salary</div>
        </div>
        <Typography variant="h3" className={classes.mainTitle}>
          Bakery Production Manager
        </Typography>
      </div>
      <div className={classes.mainBody}>
        <div className={classes.body}>
          <div className={classes.contentText}>
            <Typography className={classes.text}>
              Backerschluter is looking for an experienced Bakery Production
              Manager to join our growing team. As the Bakery Production
              Manager, you will oversee the daily operations of our bakery
              production floor to ensure smooth workflow and high-quality
              products.
            </Typography>
          </div>
          <Typography variant="h4" className={classes.titleText}>
            Responsibilities
          </Typography>
          <div className={classes.contentText}>
            <Typography className={classes.text}>
              1. Plan and manage the schedule for bakery production activities
              based on sales forecasts and inventory levels.
            </Typography>
            <Typography className={classes.text}>
              2. Oversee the bakery production team, providing training and
              guidance to maximize efficiency.
            </Typography>
            <Typography className={classes.text}>
              3. Coordinate with various departments (sales, logistics,
              purchasing) to align production planning.
            </Typography>
            <Typography className={classes.text}>
              4. Ensure food safety, sanitation, and compliance with regulations
              in the bakery production area.
            </Typography>
            <Typography className={classes.text}>
              5. Monitor inventory of raw ingredients and packaging supplies to
              avoid shortages.
            </Typography>
            <Typography className={classes.text}>
              6. Identify opportunities for process improvements and automation
              to enhance productivity.
            </Typography>
            <Typography className={classes.text}>
              7. Track key production metrics regarding output, waste, labor
              costs to identify issues
            </Typography>
            <Typography className={classes.text}>
              8. Stay current on trends and innovations in commercial bakery
              operations and technology
            </Typography>
            <Typography className={classes.text}>
              9. Maintain equipment and oversee maintenance schedules to
              minimize downtime.
            </Typography>
            <Typography className={classes.text}>
              10. Manage and develop team members, including hiring and
              performance evaluations.
            </Typography>
          </div>
          <Typography variant="h4" className={classes.titleText}>
            Requirements
          </Typography>
          <div className={classes.contentText}>
            <Typography className={classes.text}>
              1. Years experience as a bakery production manager or similar
              role.
            </Typography>
            <Typography className={classes.text}>
              2. Knowledge of commercial bakery equipment and food
              safety/sanitation procedures.
            </Typography>
            <Typography className={classes.text}>
              3. Strong planning, organization and problem-solving abilities.
            </Typography>
            <Typography className={classes.text}>
              4. Excellent communication and leadership skills.
            </Typography>
            <Typography className={classes.text}>
              5. Ability to analyze production data and find cost-saving
              solutions.
            </Typography>
            <Typography className={classes.text}>
              6. Flexibility to work in a fast-paced production environment.
            </Typography>
            <Typography className={classes.text}>
              7. Passion for baking and food production.
            </Typography>
          </div>
          <Typography variant="h4" className={classes.footerText}>
            As our Bakery Production Manager, you will have the opportunity to
            grow your career in an exciting industry while delivering quality
            baked goods that our community loves and trusts.
          </Typography>
          <div className={classes.contentButton}>
            <Button color="inherit" className={classes.button}>
              apply now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetails;
