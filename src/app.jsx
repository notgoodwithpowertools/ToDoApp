var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App CSS
require('style!css!sass!./styles/app.scss');


//Test experimental JS

//Import Router
var Routes = require('./routes');
//var Main = require('./components/Main.jsx');
var TodoApp = require('./components/TodoApp.jsx');

var ObjOne = {
  name: 'Andrew',
  location: 'Melbourne'
};
var ObjTwo = {
  age: 49,
  ...ObjOne
};
console.log("Object Two:", ObjTwo);

// Destructuring
var {name} = ObjOne;
console.log("Destructured name:", name);
/*
var {name2} = ObjTwo;
console.log("Destructured Object 2 name:", name2);
*/



var message = 'Boilerplate';

/*
ReactDOM.render(
  <Router history={hashHistory}>
     <Route path="/" component={Main}/>
  </Router>,
  document.getElementById('app')
);
*/

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
