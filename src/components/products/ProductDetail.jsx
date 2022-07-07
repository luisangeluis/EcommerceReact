import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

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

  console.log(product);

  return (
    <section className="row flex-grow-1">
      <div className="col-md-6">
        <div className="row">
          <div className="col-12">
            <div
              id="carouselExampleCaptions"
              className="carousel slide p-2 p-md-3"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                {product?.productImgs.map((img, i) => (
                  <button
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={i}
                    className={`bg-orange btn ${i == 0 ? 'active' : ''}`}
                    aria-current={i == 0 ? 'true' : ''}
                    aria-label={`Slide ${i + 1}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner w-100">
                {product?.productImgs.map((img, i) => {
                  return (
                    <div className={`carousel-item ${i == 0 ? 'active' : ''}`}>
                      <img
                        src={img}
                        className="d-block carousel-img"
                        alt="..."
                      />
                    </div>
                  );
                })}
              </div>
              <button
                className="carousel-control-prev bg-orange"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next bg-orange"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">hola</div>
    </section>
  );
};

export default ProductDetail;
