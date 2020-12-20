import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import './assets/css/style.css';
import Header from './components/Header';
import routes from './utils/routes/index';
import firebase from './config/firebase';
import AppContext from './store/AppContext';
import AuthRoute from './utils/routes/AuthRoute';
import GuestRoute from './utils/routes/GuestRoute';

function App() {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
      } else {
        setUser({});
        setIsLoggedIn(false);
      }
    });
  }, []);
  return (
    <Router>
      <AppContext.Provider value={[isLoggedIn, user]}>
        <Header />
        <Switch>
          {routes.map((route, index) => {
            //protect route
            if (route.protected === 'guest') {
              return (
                <GuestRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            }

            if (route.protected === 'auth') {
              return (
                <AuthRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            }
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
        </Switch>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
