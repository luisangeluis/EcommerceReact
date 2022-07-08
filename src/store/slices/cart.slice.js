import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfigPurchases from '../../utils/getConfigPurchases';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: null,
  reducers: {
    setCart: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;

export const getCart = () => (dispatch) => {
  return axios
    .get(
      'https://ecommerce-api-react.herokuapp.com/api/v1/cart',
      getConfigPurchases()
    )
    .then((res) => {
      console.log(res.data.data.cart.products);
      dispatch(setCart(res.data.data.cart.products));
    })
    .catch((error) => console.log(error));
};
