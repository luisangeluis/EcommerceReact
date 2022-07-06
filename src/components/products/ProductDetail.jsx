import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  console.log(id);

  useEffect(() => {
    if (id) getProduct();
  }, []);

  const getProduct = () => {
    axios
      .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
      .then((res) => {
        console.log(res.data.data.product);
        setProduct(res.data.data.product);
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="row flex-grow-1">
      <div className="col-md-6">hola</div>
      <div className="col-md-6">hola</div>
    </section>
  );
};

export default ProductDetail;
