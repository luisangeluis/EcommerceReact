import React, { useEffect } from 'react';
//Redux
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/slices/userName.slice';
//Hook form
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    // dispatch(loginUser());
  }, []);

  const getLogin = (data) => {
    console.log(data);
    dispatch(loginUser(data));
  };

  return (
    <section className="login container">
      <div className="row">
        <div className="col-12 col-md-6">
          <form onSubmit={handleSubmit(getLogin)}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                aria-describedby="email"
                {...register('email', { required: true })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                id="password"
                aria-describedby="password"
                {...register('password', { required: true })}
              />
            </div>
            <button className="btn btn-danger">Log in</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
