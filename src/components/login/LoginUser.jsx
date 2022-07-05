import { useNavigate } from 'react-router-dom';

const LoginUser = () => {
  const navigate = useNavigate();

  const LogOutUser = () => {
    if (localStorage.getItem('name')) {
      localStorage.removeItem('name');
    }
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }

    navigate('/');
  };

  return (
    <div>
      <p>Hello {localStorage.getItem('name')}</p>
      <button onClick={LogOutUser}>Log Out</button>
    </div>
  );
};

export default LoginUser;
