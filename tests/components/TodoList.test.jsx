var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

//Compnenents
var TodoList = require('../../src/components/TodoList.jsx');
var Todo = require('../../src/components/Todo.jsx');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();

  });

  it('should render one Todo component for each todo item...', () => {
    var todos = [
      {
        id: 1,
        text: "Item 1"
      },
      {
        id: 2,
        text: "Item 2"
      }
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });


    it('should render empty message if no todos...', () => {
      var todos = [];
      var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
      var $element = $(ReactDOM.findDOMNode(todoList));

      expect($element.find('.container__message').length).toBe(1);
    });

});
