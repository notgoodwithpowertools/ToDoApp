var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

//Compnenents
var TodoApp = require('../../src/components/TodoApp.jsx');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();

  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'banana';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('should toggle completed item when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'Test feature',
      completed: false
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos: [todoData]});

    //check that first itemm has completed = false
    expect(todoApp.state.todos[0].completed).toBe(false);
    //call handleToggle with 11
    todoApp.handleToggle(11);
    //Verfy value has changed
    expect(todoApp.state.todos[0].completed).toBe(true);

  });

});
