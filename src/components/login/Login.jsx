import React, { useEffect } from 'react';
import LoginForm from './LoginForm';
import LoginUser from './LoginUser';

const Login = () => {
  useEffect(() => {}, []);

  return (
    <section className="login row justify-content-center align-items-center">
      <div className="col-12 col-md-6">
        {localStorage.getItem('name') && localStorage.getItem('token') ? (
          <LoginUser />
        ) : (
          <LoginForm />
        )}
      </div>
    </section>
  );
};

export default Login;
