import axios from 'axios';
import React, { useEffect } from 'react';
//Redux
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/slices/userName.slice';

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginUser());
    // axios
    //   .post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', {
    //     email: 'mason@gmail.com',
    //     password: 'mason1234',
    //   })
    //   .then((res) => {
    //     console.log(res.data.data);
    //     // setUserName(res.data);
    //   })
    //   .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <p>Login</p>
    </div>
  );
};

export default Login;
