import React, { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setError] = useState('');

  const { createUser } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/menu');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        console.log(error.message);
      }
    }
  };

  return (
    <div className='signUp'>
      <h1 className='signUp__header1'>Donaldson myRP Tool</h1>
      <div>
        <h1 className='signUp__header2'>Sign Up your Account</h1>
        <p className='signUp__question'>
          Already have an Account?{' '}
          <Link to='/login' className='signUp__link'>
            Sign In
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit} className='signUp-submit'>
        <div className='signUp-submit__email'>
          <label className='signLabel'>Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Enter your e-mail address...'
          />
        </div>
        <div className='signUp-submit__password'>
          <label className='signLabel'>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Enter your password...'
          />
        </div>
        <button className='signUp-submit__button btn'>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
