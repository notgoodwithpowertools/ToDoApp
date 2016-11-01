import firebase, {firebaseRef} from '../api/firebase/index.js';
import moment from 'moment';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText: searchText
  };
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo: todo
  }
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos: todos
  }
};

// asynch actions
export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      //id: uuid(), generated in the db call
      text: text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    console.log("todo:", todo);
    var todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then( () => {
      console.log("todoRef.key:", todoRef.key);
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });

  };
};


export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
};

export var setShowCompleted = (showCompletedState) => {
  return {
    type: 'SET_SHOW_COMPLETED',
    showCompleted: showCompletedState
  }
};
/*
export var getShowCompleted = () => {
  return {
    type: 'GET_SHOW_COMPLETED',
    showCompleted: showCompletedState
  }
};
*/

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id: id,
    updates: updates
  }
};

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    //var todoRef = firebaseRef.child('todos/' + id);
    // Using ES6 template strings
    var todoRef = firebaseRef.child(`todos/${id}`);
    var updates = {
      completed: completed,
      completedAt: completed ? moment().unix() : null
    };
    return todoRef.update(updates).then( () => {
      dispatch(updateTodo(id, updates));
    });

  };
};
