import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productsSlice = createSlice({
  name: 'products',
  initialState: null,
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export const getProducts = () => (dispatch) => {
  return axios
    .get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
    .then((res) => {
      // console.log(res.data.data);
      dispatch(setProducts(res.data.data.products));
    })
    .catch((error) => console.log(error));
};

export const getProductsByName = (name) => (dispatch) => {
  return axios
    .get(
      `https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${name}`
    )
    .then((res) => {
      console.log(res.data.data.products);
      dispatch(setProducts(res.data.data.products));
    })
    .catch((error) => console.log(error));
};

export const getProductsByCategory = (categoryId) => (dispatch) => {
  return axios
    .get(
      `https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${categoryId}`
    )
    .then((res) => {
      // console.log(res.data.data.products);
      dispatch(setProducts(res.data.data.products));
    })
    .catch((error) => console.log(error));
};

export const getProductsByPrice =
  (minPrice = 0, maxPrice = 500000) =>
  (dispatch) => {
    // console.log(minPrice);
    // console.log(maxPrice);
    return axios
      .get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
      .then((res) => {
        // console.log(res.data.data.products);
        let allProducts = res.data.data.products;
        // console.log(allProducts);
        let productsByPrice = allProducts.filter((product) => {
          let price = Number(product.price);
          return price >= minPrice && price <= maxPrice;
        });
        // console.log(productsByPrice);
        dispatch(setProducts(productsByPrice));
      })
      .catch((error) => console.log(error));
  };

export default productsSlice.reducer;
