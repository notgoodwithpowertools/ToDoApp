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
  },

  setShowCompleted: function (showCompleted) {

      localStorage.setItem('showCompleted', showCompleted);

  },

  getShowCompleted: function () {

    //var get = localStorage.getItem('showCompleted') == 'true' ? true : false;
    //console.log("Fetching showCompleted from localStorage. Value:", get);
    return localStorage.getItem('showCompleted') == 'true' ? true : false;

    //return get;
      //return localStorage.getItem('showCompleted');
  },

  filterTodos: function (todos, showCompleted, searchText) {

    console.log("Filtered todos - showCompleted:", showCompleted);

    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;

    });

    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      console.log("message:" + text);

      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });
    // Sort todos with non completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;

  }

};
