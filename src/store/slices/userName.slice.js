import { createSlice } from '@reduxjs/toolkit';

export const userNameSlice = createSlice({
  name: 'userName',
  initialState: null,
  reducers: {
    setUserName: (state, action) => action.payload,
  },
});

export const getLogin = () => (dispatch) => {
  return axios
    .get('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', {
      email: 'mason@gmail.com',
      password: 'mason1234',
    })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};

export const { setUserName } = userNameSlice.actions;
export default userNameSlice.reducer;
