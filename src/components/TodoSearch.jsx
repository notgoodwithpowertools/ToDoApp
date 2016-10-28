var React = require('react');
var {connect} = require('react-redux');
var actions = require('../actions/actions.jsx');

export var TodoSearch = React.createClass({

// not needed with redux as action is passed
/*
  handleSearch: function() {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
*/
  render: function() {
    var {dispatch, showCompleted, searchText} = this.props;

    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search Todos..." value={searchText} onChange={() => {
              var searchText = this.refs.searchText.value;
              //console.log("searchText:", searchText);
              dispatch(actions.setSearchText(searchText));

            }}>

          </input>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                console.log("Toggling...");
                dispatch(actions.toggleShowCompleted());
              }}>

            </input>
            Show Completed Todos
          </label>

        </div>
      </div>

    )
  }
});


//module.exports = TodoSearch;
export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
