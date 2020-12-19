import React, { useState } from 'react';
import firebase from '../config/firebase';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  function handleForm(e) {
    if (isLoading) return;
    setIsLoading(true);
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword('il.1995@hotmail.com', 'iayda')
      .then(res => {
        console.log(res);
        setIsLoading(false);
      })
      .catch(e => {
        setError(e.message);
        setIsLoading(false);
      });
  }

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
              className='p-2 rounded shadow w-full'
              placeholder='Email or Username'
            />
          </div>
          <div className='w-full my-6'>
            <input
              type='password'
              className='p-2 rounded shadow w-full'
              placeholder='Password'
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
