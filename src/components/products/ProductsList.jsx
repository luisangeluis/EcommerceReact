import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CardProduct from './CardProduct';

const ProductsList = () => {
  const products = useSelector((state) => state.products);
  const [productsToShow, setProductsToShow] = useState();

  useEffect(() => {
    if (products) {
      setProductsToShow(products.products);
    }
  }, [products]);

  // console.log(productsToShow);

  return (
    <section className="row products-list">
      {productsToShow &&
        productsToShow.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
    </section>
  );
};

export default ProductsList;
