var React = require('react');

var {Link, IndexLink} = require('react-router');

//Refactor for Foundation
var Nav = React.createClass({

  onSearch: function(e){
    e.preventDefault();

    var location = this.refs.search.value;
    //alert(location);
    var encodedLocation = encodeURIComponent(location);
    if (location.length > 0) {
      this.refs.search.value = '';
      window.location.hash ='#/?location=' + encodedLocation;
    }
  },

  render: function(){
    return (

      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">

            <li className="menu-text">
              React Boiler 3
            </li>
            <li>
              <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight:'bold'}}>Component1</IndexLink>
            </li>
            <li>
              <Link to="/component2" activeClassName="active-link" activeStyle={{fontWeight:'bold'}}>Component2</Link>
            </li>

          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li className="menu-text">
                By <span><a href="https://github.com/notgoodwithpowertools" target="_blank">AA</a></span>
              </li>
            </ul>

          </form>
        </div>

      </div>

    );

  }

});



module.exports = Nav;

//Build component using React.createClass
/*
var Nav = React.createClass({
  render: function(){
    return(
    <div>
      <h2>Nav Component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
    </div>
  );
  }
});
*/
//Refactor as a stateless functional component
/*
var Nav = () => {
    return(
    <div>
      <h2>Nav Component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
    </div>
  )
};
*/
