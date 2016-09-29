var $ = require('jquery');


module.exports = {

  setTodos: function (todos) {
    if (Array.isArray(todos)) {
      //console.log("Array found ...");
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }
    /*
    if ($.isArray(todos)) {
      return todos;
    } else {
      return [];
    }
    */

    //converted to ternary
    return Array.isArray(todos) ? todos : [];
  }

};
