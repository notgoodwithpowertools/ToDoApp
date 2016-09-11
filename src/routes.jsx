var React = require('react');
var ReactRouter = require('react-router');

//var Router = ReactRouter.Router;
//var Route = ReactRouter.Route;

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('./components/Main.jsx');
var Component1 = require('./components/Component1.jsx')
var Component2 = require('./components/Component2.jsx')

var Routes = (
  <Router history={hashHistory}>
     <Route path="/" component={Main}>
       <Route path="component2" component={Component2}></Route>
       <IndexRoute component={Component1}></IndexRoute>

     </Route>
  </Router>
);

module.exports = Routes;
