import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './assets/css/style.css';
import Gallery from './page/Gallery';
import Home from './page/Home';
import Login from './page/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true}>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/gallery'>
          <Gallery />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
