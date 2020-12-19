import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from '../config/firebase';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleForm(e) {
    if (isLoading) return;
    setIsLoading(true);
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        setIsLoggedIn(true);
        setError(''); //error is remove
        setIsLoading(false);
      })
      .catch(e => {
        setError(e.message);
        setIsLoading(false);
      });
  }

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  if (isLoggedIn) return <Redirect to='/' />;

  return (
    <div className='flex h-screen bg-red-900'>
      <div className='m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-red-600 to-red-800'>
        <form className='m-5 w-10/12' onSubmit={handleForm}>
          {error !== ' ' && <p>{error}</p>}
          <h1 className='w-full text-4xl tracking-widest text-center my-6'>
            Login
          </h1>
          <div className='w-full my-6'>
            <input
              type='email'
              className='p-2 rounded shadow w-full text-black'
              placeholder='Email or Username'
              name='email'
              value={form.email}
              onChange={handleInput}
            />
          </div>
          <div className='w-full my-6'>
            <input
              type='password'
              className='p-2 rounded shadow w-full text-black'
              name='password'
              placeholder='Password'
              value={form.password}
              onChange={handleInput}
            />
          </div>
          <div className='w-full my-10'>
            <button
              type='submit'
              className='p-2 rounded shadow w-full bg-gray-900 text-white'
            >
              {isLoading ? (
                <i className='fas fa-circle-notch fa-spin'></i>
              ) : (
                '  Login'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
