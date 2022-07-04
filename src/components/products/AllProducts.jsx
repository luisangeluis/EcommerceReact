import React from 'react';
import { useSelector } from 'react-redux';

const AllProducts = () => {
  const products = useSelector((state) => state.products);

  return <div className="row"></div>;
};

export default AllProducts;
