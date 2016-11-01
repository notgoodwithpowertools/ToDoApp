

var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');

//Compnenents
//var TodoList = require('../../src/components/TodoList.jsx');
import {configure} from '../../src/store/configureStore.jsx';
import ConnectedTodoList, {TodoList} from '../../src/components/TodoList.jsx';
import ConnectedTodo, {Todo} from '../../src/components/Todo.jsx';

/*
//var Todo = require('../../src/components/Todo.jsx');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();

  });

  it('should render one Todo component for each todo item...', () => {
    var todos = [
      {
        id: 1,
        text: "Item 1",
        completed: false,
        completedAt: undefined,
        createdAt: 500
      },
      {
        id: 2,
        text: "Item 2",
        completed: false,
        completedAt: undefined,
        createdAt: 500
      }
    ];
    var store = configure({
      todos: todos
    });
    /*
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList />
      </Provider>
    );
    //var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });

/*
    it('should render empty message if no todos...', () => {
      var todos = [];
      var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
      var $element = $(ReactDOM.findDOMNode(todoList));

      expect($element.find('.container__message').length).toBe(1);
    });
*//*
});

*/
//////
/*
var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo'
*/
describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'Do something',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }, {
      id: 2,
      text: 'Check mail',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }];
    var store = configure({
      todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
