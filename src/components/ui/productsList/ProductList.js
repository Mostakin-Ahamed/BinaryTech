import React from 'react';
import { getAllProducts } from '../../../utils/getAllProducts';

const ProductList = async () => {

    const data = await getAllProducts()
};

export default ProductList;