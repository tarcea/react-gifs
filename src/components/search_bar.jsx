import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunc(event.target.value);
  }
  render() {
    return(
      <input type="text" className="form-control" onChange={this.handleUpdate} />
     );
  }
}

export default SearchBar;
