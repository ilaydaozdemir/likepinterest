import ReactDom from 'react-dom';
import React from 'react';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
//const App=require("./App").default;

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
