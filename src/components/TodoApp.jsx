//var React = require('react');
import React from 'react';
import * as Redux from 'react-redux';

//var TodoList = require('./TodoList.jsx');
import TodoList from './TodoList.jsx';

// var Nav = require('./Nav.jsx')

//var AddTodo = require('./AddTodo.jsx');
import AddTodo from './AddTodo.jsx';

//var TodoSearch = require('./TodoSearch.jsx');
import TodoSearch from './TodoSearch.jsx';

import * as actions from '../actions/actions.jsx';


//var TodoAPI = require('../api/TodoAPI.jsx');

// No longer used
//var uuid = require('node-uuid');
// var moment = require('moment');

// Use createClass as it is the top component to maintain state
export var TodoApp = React.createClass({

  onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },

  /* State Handled in Redux store
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',

      /*todos: [
        {
          id: 1,
          text: 'walk the dog',
          completed: false
        },
        {
          id: 2,
          text: 'clean yard',
          completed: true
        },
        {
          id: 3,
          text: 'eat milo',
          completed: true
        }
      ] //
      //Get the data from the API call
      todos: TodoAPI.getTodos()
    };
  },
  */
  /* Handled by Redux
  componentDidUpdate: function(){
    TodoAPI.setTodos(this.state.todos);
  },
  */

  /* Handled with Actions
  handleAddTodo: function(text) {
    //alert('New to do' + text);

    this.setState({
      todos: [
        ...this.state.todos, {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  */
  /*
  // refactored to use Redux dispatch direct from todo
  handleToggle: function(id){

    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });
    //alert(id);
    this.setState({todos: updatedTodos});
  },
  */
  /* Handled by Redux
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
    console.log("Handling search...");


  },
  */
  //render: function(){
  // as ES^ this looks like
  render () {
    //var {todos, showCompleted, searchText} = this.state;
    //var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    /* Refactor for react-redux
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch} />
              <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
              <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
          </div>
        </div>
      </div>
    );
    */
    /*
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch} />
              <TodoList/>
              <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
          </div>
        </div>
      </div>
    );
    */
    //Removed methods passed down to components
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch />
              <TodoList/>
              <AddTodo />
            </div>
          </div>
        </div>
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
//module.exports = TodoApp;
export default Redux.connect()(TodoApp);
