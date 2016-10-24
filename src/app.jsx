var React = require('react');
var ReactDOM = require('react-dom');

var {Provider} = require('react-redux');
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


var actions = require('./actions/actions.jsx');
var store = require('./store/configureStore.jsx').configure();

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



store.subscribe(() => {
  console.log('New state', store.getState());
});

console.log('++++++++++++++++');
store.dispatch(actions.addTodo('walk the rabbits'));


console.log('****************');
store.dispatch(actions.setSearchText('rabbits'));
console.log('================');
store.dispatch(actions.toggleShowCompleted());


/*
ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
*/
// refactor using Provider - all children can access store
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,

  document.getElementById('app')
);
