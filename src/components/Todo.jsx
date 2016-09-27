var React = require('react');

var Todo = React.createClass({

  render: function(){

    var {id, text, completed, onToggle} = this.props;

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
       {text}
      </div>

    )
  }
});

module.exports = Todo;
