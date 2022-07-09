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
      <h3 className='py-2 py-md-3'><b>Hello! {localStorage.getItem('name')}</b></h3>
      <button onClick={LogOutUser} className="btn bg-one">Log Out</button>
    </div>
  );
};

export default LoginUser;
