var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');

var configureStore = require('../../src/store/configureStore.jsx');
//var TodoList = require('../../src/components/TodoList.jsx');
import TodoList from '../../src/components/TodoList.jsx'

//Compnenents
var TodoApp = require('../../src/components/TodoApp.jsx');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();

  });

  it('should render TodoList', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store} >
        <TodoApp />
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);

  });



  // With Redux the function is not passed down. An action is called from the
  // components so we can remove the handleToggle function
  /*
  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'banana';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    //Expect CreatedAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });


  it('should toggle completed item when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'Test feature',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos: [todoData]});

    //check that first itemm has completed = false
    expect(todoApp.state.todos[0].completed).toBe(false);
    //call handleToggle with 11
    todoApp.handleToggle(11);
    //Verfy value has changed
    expect(todoApp.state.todos[0].completed).toBe(true);
    //Expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number');

  });


  //Test that when toggled completedAt gets removed
  it('should toggle completedAt item when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'Test feature',
      completed: true,
      createdAt: 0,
      completedAt: 123
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos: [todoData]});

    //check that first itemm has completed = true
    expect(todoApp.state.todos[0].completed).toBe(true);
    //call handleToggle with 11
    todoApp.handleToggle(11);
    //Verfy value has changed
    expect(todoApp.state.todos[0].completed).toBe(false);
    //Expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toNotExist();

  });
*/
});
