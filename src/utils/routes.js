import React from 'react';
import Home from '../page/Home';
import Login from '../page/Login';
import Gallery from '../page/Gallery';

export default [
  {
    path: '/',
    exact: true,
    component: () => <Home />,
  },
  {
    path: '/gallery',
    component: () => <Gallery />,
  },
  {
    path: '/login',
    component: () => <Login />,
  },
];
