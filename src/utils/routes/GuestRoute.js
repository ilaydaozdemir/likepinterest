import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AppContext from '../../store/AppContext';
import Loading from '../../components/Loading';
import { motion } from 'framer-motion';

export default function GuestRoute({ children, ...rest }) {
  const [isLoggedIn] = useContext(AppContext);

  if (isLoggedIn === null) return <Loading />;

  if (!isLoggedIn)
    return (
      <Route {...rest}>
        <motion.div initial={{ x: 200 }} animate={{ x: 0 }}>
          {children}
        </motion.div>
      </Route>
    );

  return <Redirect to='/' />;
}
