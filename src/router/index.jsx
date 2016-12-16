import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from '../components/TodoApp.jsx';
import Login from '../components/Login.jsx';
import firebase from '../api/firebase/index.js';


// Make some middleware to evaluate login to redirect
var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) { //If nobody logged in
    replace('/');
  }
  next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) { //If already logged in
    replace('/todos');
  }
  next();
};

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
    </Route>
  </Router>

)
