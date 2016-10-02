var React = require('react');
var moment = require('moment');

var Todo = React.createClass({

  render: function(){

    var {id, text, completed, createdAt, completedAt, onToggle} = this.props;
    var todoClassname = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {

      var message = 'Created ';
      var timeStamp = createdAt;

      if (completed) {
        message = 'Completed '
        timeStamp = completedAt;
      }

      return message + moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a');

    }

    var oggle = function (){

      console.log("Toggled..." + id);
      //this.props.onToggle(id);
      onToggle(id);
      //return 'wally';

    };

    var oggle2 = () => {
      console.log("Toggled..." + id + " OID:");
    };
    /*var oggle = function(id){
    console.log("Toggled..." + id);
    //this.props.onToggle(id);

    };*/
    //<div onClick={() => {this.props.onToggle(id)}}>
    //<div onClick={this.props.onToggle(id)}>
    //<div onClick={oggle2}>

    //<div onClick={ () => {this.props.onToggle(id)}} >
    return (


      <div className={todoClassname} onClick={oggle}>
        <div>
          <input type="checkbox" checked={completed} readOnly></input>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>

    )
  }
});

module.exports = Todo;
