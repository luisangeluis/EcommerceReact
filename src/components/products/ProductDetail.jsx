import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SimilarItems from './SimilarItems';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [counter, setCounter] = useState(1);

  const plusOne = () => {
    setCounter(counter + 1);
  };

  const minusOne = () => {
    if (counter - 1 == 0) {
      setCounter(1);
    } else {
      setCounter(counter - 1);
    }
  };

  useEffect(() => {
    if (id) getProduct();
  }, [id]);

  const getProduct = () => {
    axios
      .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
      .then((res) => {
        console.log(res.data.data.product);
        setProduct(res.data.data.product);
      })
      .catch((error) => console.log(error));
  };

  console.log(counter);

  return (
    <section className="row flex-grow-1 product-detail">
      <div className="col-12">
        <div className="row my-3 my-md-4">
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
                        key={img}
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
                        <div
                          className={`carousel-item ${i == 0 ? 'active' : ''}`}
                          key={img}
                        >
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
          <div className="col-md-6">
            <div className="row">
              <div className="col-12">
                <div className="card card-detail-product p-2 p-md-3">
                  <div className="card-body">
                    <h3 className="card-title">{product?.title}</h3>
                    <p className="card-text">{product?.description}</p>
                    <div className="info-details d-flex justify-content-around">
                      <div className="">
                        <p>Price</p>
                        <p>{product?.price}</p>
                      </div>
                      <div className="text-center p-2 p-md-3">
                        <p>Quantity</p>
                        <div className="d-flex justify-content-between details-counter">
                          <button
                            onClick={minusOne}
                            className="d-flex justify-content-center align-items-center"
                          >
                            -
                          </button>
                          <p className="d-flex justify-content-center align-items-center">
                            {counter}
                          </p>
                          <button
                            onClick={plusOne}
                            className="d-flex justify-content-center align-items-center"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <button className="d-block mx-auto p-2 p-md-3 w-100">
                      Add to car
                      <i className="fa-solid fa-cart-shopping  px-1 px-md-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SimilarItems product={product} />
        <div className="row my-3 my-md-4">
          <div className="col-12">
            <p>hola</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
