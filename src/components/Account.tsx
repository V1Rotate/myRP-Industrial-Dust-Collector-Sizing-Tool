import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async (error: any) => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div className='account'>
      <h1 className='account-header'>Account</h1>
      <p>User Email: {user && user.email}</p>

      <button onClick={handleLogout} className='account-button'>
        Logout
      </button>
    </div>
  );
};

export default Account;
