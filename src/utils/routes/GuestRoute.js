import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AppContext from '../../store/AppContext';
import Loading from '../../components/Loading';

export default function GuestRoute(props) {
  const [isLoggedIn] = useContext(AppContext);

  if (isLoggedIn === null) return <Loading />;

  if (!isLoggedIn) return <Route {...props} />;

  return <Redirect to='/' />;
}
