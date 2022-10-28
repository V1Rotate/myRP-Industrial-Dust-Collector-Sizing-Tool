import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [, setError] = useState<string>('');
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate('/menu');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        console.log(error.message);
      }
    }
  };

  return (
    <div className='signIn'>
      <h1 className='signIn__header1'>Donaldson myRP Tool</h1>
      <div>
        <h1 className='signIn__header2'>Sign into your Account</h1>
        <p className='signIn__question'>
          Not signed up yet?{' '}
          <Link to='/register' className='signIn__link'>
            Sign Up
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit} className='signIn-submit signForm'>
        <div className='signIn-submit__email'>
          <label className='signLabel'>Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Enter your e-mail address...'
          />
        </div>
        <div className='signIn-submit__password'>
          <label className='signLabel'>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Enter your password...'
          />
        </div>
        <button className='signIn-submit__button btn'>Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
