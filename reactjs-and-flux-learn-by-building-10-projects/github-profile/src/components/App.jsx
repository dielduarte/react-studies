import React, { Component }  from 'react';
import Profile  from './github/profile.jsx';
import Search  from './github/search.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'dielduarte',
      userData: [],
      userRepos: [],
      perPage: 5
    }

    this.getUserData = this.getUserData.bind(this);
  }

  getUserData() {
    fetch(`https://api.github.com/users/${this.state.username}?client_id=${this.props.clientId}$client_secret=${this.props.clientSecret}`, {
        dataType: 'json'
      })
      .then(response => response.json()) // retorna uma promise
      .then(result => {
        this.setState({userData: result});
        console.log(result);
      })
      .catch(() =>   this.setState({username: null}));
  }

  getUserRepos() {
    fetch(`https://api.github.com/users/${this.state.username}/repos?per_page=${this.state.perPage}&client_id=${this.props.clientId}$client_secret=${this.props.clientSecret}&sort=created`, {
        dataType: 'json'
      })
      .then(response => response.json()) // retorna uma promise
      .then(result => {
        this.setState({userRepos: result});
      })
      .catch(() =>   this.setState({username: null}));
  }

  componentDidMount(){
      this.getUserData();
      this.getUserRepos();
  }

  handleFormSubmit(username) {
    this.setState({username}, function(){
      this.getUserData();
      this.getUserRepos();
    });
  }

  render() {
    return (
      <div>
        <Search onFormSubmit = {this.handleFormSubmit.bind(this)}/>
        <Profile {...this.state} />
      </div>
    );
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};

App.defaultProps = {
  clientId: 'c7f54eec1d2e150e4732',
  clientSecret: '067e0c1907171dcdcc6c4b62e84cd284f30c12da'
};

export default App;
