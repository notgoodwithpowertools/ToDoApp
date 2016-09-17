var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

//Compnenents
var Todo = require('../../src/components/Todo.jsx');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();

  });
});
