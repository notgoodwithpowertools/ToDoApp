var React = require('react');
var moment = require('moment');

var Todo = React.createClass({

  render: function(){

    var {id, text, completed, createdAt, completedAt, onToggle} = this.props;

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


      <div onClick={oggle}>
      <input type="checkbox" checked={completed} readOnly></input>
       <p>{text}</p>
       <p>{renderDate()}</p>


      </div>

    )
  }
});

module.exports = Todo;
