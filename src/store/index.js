import { configureStore } from '@reduxjs/toolkit';
import products from './slices/products.slice';
import userName from './slices/userName.slice';
import cart from './slices/cart.slice';

export default configureStore({
  reducer: {
    products,
    userName,
    cart,
  },
});
