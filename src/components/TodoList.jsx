var React = require('react');
var {connect} = require('react-redux');

//var Todo = require('./Todo.jsx');
import Todo from './Todo.jsx';

export var TodoList = React.createClass({

  render: function(){

    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to do</p>
        )
      }
      return todos.map( (todo) => {
        // refactor for react-redux using Connect
        /*
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        )
        */
        return (
          <Todo key={todo.id} {...todo} />
        )
      });
    }
    return (
      <div>
       {renderTodos()}
      </div>

    )
  }
});

//module.exports = TodoList;
//module.exports = connect(
export default connect(
  (state) => {
    return {
      todos: state.todos
    };
  }

)(TodoList);
