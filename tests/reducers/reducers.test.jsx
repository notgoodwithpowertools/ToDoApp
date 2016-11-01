var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('../../src/reducers/reducers.jsx');

describe('Reducers', () => {
  describe('searchTextReducer', () => {

    it('should set search text', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'cat'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });
  describe('showCompletedReducer', () => {
    //test showCompleted status gets flipped
    it('should toggle showCompleted status', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });
  describe('todosReducer', () => {
    //test showCompleted status gets flipped
    it('should add new Todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'walk the rabbit',
          completed: false,
          createdAt: 123456
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });
    // Update for Firebase changes
    /*
    it('should toggle Todo', () => {

      var todos = [{

        id: 1,
        text: 'walk the rabbit',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];

      var action = {
        type: 'TOGGLE_TODO',
        id: 1
      };

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
    */
    it('should update Todo', () => {

      var todos = [{

        id: 1,
        text: 'walk the rabbit',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];
      var updates = {
        completed: false,
        completedAt: null
      };

      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates: updates
      };

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });


    it('should add existing todos', () => {

      var todos = [{

        id: 111,
        text: 'walk the rabbit',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];

      var action = {
        type: 'ADD_TODOS',
        todos: todos
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
      //expect(res[0].completedAt).toEqual(undefined);
    });


  });



});
