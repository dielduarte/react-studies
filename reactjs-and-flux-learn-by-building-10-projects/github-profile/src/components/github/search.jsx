import React, { Component }  from 'react';

class Search extends Component {
  onSubmit(e) {
    e.preventDefault();
    let username = this.refs.username.value.trim();
    if(!username) {
      alert('please enter a username');
      return;
    }
    this.props.onFormSubmit(username);
    this.refs.username.value =  '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-group">
            <label>Search github Users</label>
            <input type="text" ref="username" className="form-control" />
          </div>
        </form>
      </div>
    );
  }
}


export default Search;
