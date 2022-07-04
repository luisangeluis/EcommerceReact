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
      console.log(res.data);
      dispatch(setProducts(res.data));
    })
    .catch((error) => console.log(error));
};

export default productsSlice.reducer;
