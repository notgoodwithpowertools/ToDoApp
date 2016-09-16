var React = require('react');

var TodoList = require('./TodoList.jsx');
// var Nav = require('./Nav.jsx');

// Use createClass as it is the top component to maintain state
var TodoApp = React.createClass({

  getInitialState: function(){
    return {
      todos: [
        {
          id: 1,
          text: 'walk the dog'
        },
        {
          id: 2,
          text: 'clean yard'
        },
        {
          id: 3,
          text: 'eat milo'
        }
      ]
    };
  },
  render: function(){

    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  }
});
/*
// Refactor to stateless functional Component
var Main = (props) => {
  return (
    <div>

      <Nav/>

      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          <h2>React Main Component</h2>
          {props.children}
        </div>
      </div>

    </div>
  )
};
*/
module.exports = TodoApp;
