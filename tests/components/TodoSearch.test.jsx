var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

//Compnenents
//var TodoSearch = require('../../src/components/TodoSearch.jsx');
import {TodoSearch} from '../../src/components/TodoSearch.jsx';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();

  });

  //it('should call onSearch with entered input text', () => {
  it('should dispatch SET_SEARCH_TEXT on input change', () => {

    var searchText = 'Dog';

    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: searchText
    }
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);
    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);
    //expect(spy).toHaveBeenCalledWith(false, 'Dog');
    expect(spy).toHaveBeenCalledWith(action);

  });


//    it('should call onSearch with proper checked value', () => {
    it('should TOGGLE_SHOW_COMPLETED when checkbox checked', () => {

      //var searchText = 'Dog';
      //var completed = 'false';

      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var spy = expect.createSpy();
      var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);
      todoSearch.refs.showCompleted.checked = true;
      TestUtils.Simulate.change(todoSearch.refs.showCompleted);
      expect(spy).toHaveBeenCalledWith(action);
    });



});
