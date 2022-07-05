//Hook form
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const getLogin = (data) => {
    console.log(data);
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
          type="text"
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
