import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardProduct from './CardProduct';

const SimilarItems = ({ product }) => {
  const [productsByCategory, setProductsByCategory] = useState();

  useEffect(() => {
    getSimilarProducts();
  }, [product]);

  const getSimilarProducts = () => {
    axios
      .get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
      .then((res) => {
        // console.log(res);
        let ProductsList = res.data.data.products;
        // console.log(ProductsList);
        let filteredProducts = ProductsList?.filter(
          (element) =>
            element?.category.name == product?.category &&
            element.id != product.id
        );
        // console.log(filteredProducts);
        setProductsByCategory(filteredProducts);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="row my-3 my-md-4">
      {productsByCategory &&
        productsByCategory.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
    </div>
  );
};

export default SimilarItems;
