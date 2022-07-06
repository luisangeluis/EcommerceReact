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
      dispatch(setProducts(res.data.data));
    })
    .catch((error) => console.log(error));
};

export const getProductsByName = (name) => (dispatch) => {
  return axios
    .get(
      `https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${name}`
    )
    .then((res) => {
      console.log(res);
      dispatch(setProducts(res.data.data));
    })
    .catch((error) => console.log(error));
};

export const getProductsByCategory = (categoryId) => (dispatch) => {
  return axios
    .get(
      `https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${categoryId}`
    )
    .then((res) => {
      console.log(res);
      dispatch(setProducts(res.data.data));
    })
    .catch((error) => console.log(error));
};

export default productsSlice.reducer;
