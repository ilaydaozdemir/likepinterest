import React, { useContext, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import firebase from '../config/firebase';
import AppContext from '../store/AppContext';

export default function Header() {
  const [isLoggedIn, user] = useContext(AppContext);
  const history = useHistory();

  function logout() {
    firebase
      .auth()
      .signOut()
      .then(res => {
        history.replace('/login');
      })
      .catch(e => {
        console.log(e.response.data);
      });
  }

  return (
    <nav className='py-5 bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 text-white flex justify-between'>
      <ul className='flex justify-between px-10'>
        <li className='mr-5'>
          <NavLink
            to='/'
            exact={true}
            activeClassName='underline text-red-300 font-bold'
          >
            Home
          </NavLink>
        </li>
        <li className='mr-5'>
          <NavLink
            to='/gallery'
            activeClassName='underline text-red-300 font-bold'
          >
            Gallery
          </NavLink>
        </li>
      </ul>
      <ul className='flex justify-between px-10'>
        <li>
          {isLoggedIn ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <NavLink
              to='/login'
              activeClassName='underline text-red-300 font-bold'
            >
              Login
            </NavLink>
          )}
        </li>
        {!isLoggedIn && (
          <li className='ml-5'>
            <NavLink
              to='/signup'
              activeClassName='underline text-red-300 font-bold'
            >
              SignUp
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
