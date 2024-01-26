import React, { useState } from 'react';
import { Box, IconButton, Container, Typography } from '@mui/material';
import { motion, AnimatePresence, Variants, Transition, MotionProps } from 'framer-motion';
import { dataImpressum, dataPrivacy } from 'data/pagesImpressum';
import { useStyles } from './styles';
import ArrowBackIcon from 'assets/img/impressum/arrow-left-circle.png';
import ArrowForwardIcon from 'assets/img/impressum/arrow-right-circle.png';

const variants: Variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const transition: Transition = {
  x: { type: 'spring', stiffness: 300, damping: 30 },
  opacity: { duration: 0.2 }
};

const PageTurning: React.FC = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const classes = useStyles();

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h1" align="center" gutterBottom className={classes.title}>
        Impressum
      </Typography>
      <Box className={classes.container}>
      <IconButton onClick={() => paginate(-1)} disabled={page === 0}>
  <img src={ArrowBackIcon} alt="Anterior" />
</IconButton>
        <Box className={classes.textContainer}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
            >
              {page === 0 ? (
                dataImpressum.map((item, index) => (
                  Object.values(item).map((text, i) => (
                    <Typography key={`${index}-${i}`} variant="body1" paragraph className={classes.text}>
                      {text}
                    </Typography>
                  ))
                ))
              ) : (
                dataPrivacy.map((item, index) => (
                  Object.values(item).map((text, i) => (
                    <Typography key={`${index}-${i}`} variant="body1" paragraph className={classes.text}>
                      {text}
                    </Typography>
                  ))
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </Box>
        <IconButton onClick={() => paginate(1)} disabled={page === 1}>
  <img src={ArrowForwardIcon} alt="Siguiente" />
</IconButton>
      </Box>
    </Container>
  );
};

export default PageTurning;
