//Hook form
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const getLogin = (data) => {
    console.log(data);
    getUser(data);
  };

  const getUser = (data) => {
    axios
      .post(
        'https://ecommerce-api-react.herokuapp.com/api/v1/users/login',
        data
      )
      .then((res) => {
        let user = res.data.data;
        setLoginLocalStorage(user);
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  const setLoginLocalStorage = (data) => {
    let token = data.token;
    let name = `${data.user.firstName} ${data.user.lastName}`;

    localStorage.clear();

    localStorage.setItem('name', name);
    localStorage.setItem('token', token);
  };

  return (
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
          type="password"
          className="form-control"
          id="password"
          aria-describedby="password"
          {...register('password', { required: true })}
        />
      </div>
      <button className="btn btn-danger">Log in</button>
    </form>
  );
};

export default LoginForm;
