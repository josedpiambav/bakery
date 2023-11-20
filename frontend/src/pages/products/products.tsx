import React from 'react';
import Presentation from 'components/productDetails/detailsProducts';
import { productData } from 'data/product';
import useStyles from './styles';

const Products = () => {
    const classes = useStyles();
  return (
    <div className={classes.contained}>
        <Presentation items={productData} />
    </div>
  );
};

export default Products;