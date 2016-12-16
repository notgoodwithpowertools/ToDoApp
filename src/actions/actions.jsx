import firebase, {firebaseRef, githubProvider} from '../api/firebase/index.js';
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


export var startAddTodos = () => {
  console.log('startAddTodos...');
  return (dispatch, getState) => {

    //Updated Firebase schema bu uid
    //var todosRef = firebaseRef.child('todos');
    var uid = getState().auth.uid;
    var todosRef = firebaseRef.child(`users/${uid}/todos`);

    return todosRef.once('value').then((snapshot) => {
      var todos = snapshot.val() || {};
      console.log('snapshot.val() todos', todos);
      var parsedTodos = [];

      //translate to an array
      Object.keys(todos).forEach( (todoId) => {
        parsedTodos.push({
          id: todoId,
          ...todos[todoId]
        });

      });
      console.log('parsedTodos:', parsedTodos);
      dispatch(addTodos(parsedTodos));
    });

  };
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
    //var todoRef = firebaseRef.child('todos').push(todo);
    //Updated Firebase schema bu uid
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

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

    //Updated Firebase schema bu uid
    //var todoRef = firebaseRef.child(`todos/${id}`);
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);

    var updates = {
      completed: completed,
      completedAt: completed ? moment().unix() : null
    };
    return todoRef.update(updates).then( () => {
      dispatch(updateTodo(id, updates));
    });

  };
};

export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid: uid
  };
};

export var logout = () => {
  return {
    type: 'LOGOUT'
  };
};


export var startLogin = () => {
  return (dispatch, getState) => {
    firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log("Auth worked...", result);
    }, (error) => {
      console.log("Unable to auth", error);
    });
  };
};

export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then( () => {
      console.log("Logged out...");
    });
  };
};
