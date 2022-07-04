import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userNameSlice = createSlice({
  name: 'userName',
  initialState: null,
  reducers: {
    setUserName: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUserName } = userNameSlice.actions;

export const loginUser = () => (dispatch) => {
  return axios
    .post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', {
      email: 'mason@gmail.com',
      password: 'mason1234',
    })
    .then((res) => {
      console.log(res.data.data);
      dispatch(setUserName(res.data.data));
    })
    .catch((error) => console.log(error));
};

export default userNameSlice.reducer;
