
var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state ='', action) => {

  switch (action.type) {

    case 'SET_SEARCH_TEXT':
    console.log('Setting searchText...');
    return action.searchText;

    default:
    return state;

  }
};

//showCompletedReducer
export var showCompletedReducer = (state = false, action) => {


  switch (action.type) {

    case 'TOGGLE_SHOW_COMPLETED':
      console.log('Toggling show completed...');
    return !state;

    case 'SET_SHOW_COMPLETED':
      console.log('Setting showCompleted:', action.showCompleted);
      state = action.showCompleted;
    return state;
    /*
    case 'GET_SHOW_COMPLETED':
      console.log('Getting showCompleted:', action.showCompleted);
    return state;
    */
    default:
    return state;
  }
};

//todosReducer
//var nextTodoId = 1;
export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
    console.log("Adding Todo...");
    return [
      ...state,
      {
        id: uuid(),
        text: action.text,
        completed: false,
        createdAt: moment().unix(),
        completedAt: undefined
      }
    ];

    case 'ADD_TODOS':
    return [
      ...state,
      ...action.todos
    ];

    case 'TOGGLE_TODO':

    console.log("Toggling Todo...");
    return state.map((todo) => {
      if (todo.id === action.id) {
        var completedStatus = !todo.completed;
        return {
          ...todo,
          completed: completedStatus,
          completedAt: completedStatus ? moment().unix() : undefined
        };
      } else {
        return todo;
      }
    });

    case 'REMOVE_TODO':
    console.log("Removing Todo...");
    return state.filter((todo) => todo.id !== action.id);
    default:
    return state;
  }
};
