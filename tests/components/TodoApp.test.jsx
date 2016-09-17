var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

//Compnenents
var TodoApp = require('../../src/components/TodoApp.jsx');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();

  });
});
