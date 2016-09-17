var React = require('react');

var Todo = React.createClass({

  render: function(){

    var {id, text} = this.props;

    return (
      <div>
       <p>Todo {id}. {text}</p>
      </div>

    )
  }
});

module.exports = Todo;
