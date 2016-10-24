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
        text: 'walk the rabbit'
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });
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


  });



});
