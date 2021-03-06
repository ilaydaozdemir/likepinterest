import React from 'react';
import Home from '../../page/Home';
import Login from '../../page/Login';
import Gallery from '../../page/Gallery';
import SignUp from '../../page/SignUp';
import Tensorflow from '../../page/tensorflow';

export default [
  {
    path: '/',
    exact: true,
    component: () => <Home />,
    protected: 'none',
  },
  {
    path: '/gallery',
    component: () => <Gallery />,
    protected: 'auth',
  },
  {
    path: '/login',
    component: () => <Login />,
    protected: 'guest',
  },
  {
    path: '/signup',
    component: () => <SignUp />,
    protected: 'guest',
  },
  {
    path: '/tensorflow',
    component: () => <Tensorflow />,
    protected: null,
  },
];
