import React from 'react';
import Presentation from 'components/productDetails/detailsProducts';
import { productData } from 'data/product';
import useStyles from './styles';

const ProductsDetails = () => {
    const classes = useStyles();
  return (
    <div className={classes.contained}>
        <Presentation items={productData} />
    </div>
  );
};

export default ProductsDetails;