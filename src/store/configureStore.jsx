var redux = require('redux');

var {searchTextReducer, showCompletedReducer, todosReducer} = require('../reducers/reducers.jsx');

export var configure = (initialState={}) => {
  var reducers = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  var store = redux.createStore(reducers, initialState, redux.compose(
    //redux.applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

  return store;
};
