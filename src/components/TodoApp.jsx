var React = require('react');

// var Nav = require('./Nav.jsx');

// Use createClass as it is the top component to maintain state
var TodoApp = React.createClass({
  render: function(){
    return (
      <div>
        <h2>TodoApp.jsx</h2>
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
