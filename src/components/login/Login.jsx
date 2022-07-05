import React, { useEffect } from 'react';
import LoginForm from './LoginForm';

const Login = () => {
  useEffect(() => {}, []);

  return (
    <section className="login row justify-content-center">
      <div className="col-12 col-md-6">
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
