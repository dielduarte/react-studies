var Card = React.createClass({
    getInitialState: function() {
      return {};
    },
    componentDidMount: function(){
      var component = this;


        fetch('https://api.github.com/users/' + this.props.login).then(function(response) {
            return response.json();
        }).then(function(data) {
            component.setState(data);
        }).catch(function() {
            console.log("Booo");
        });
    },
    render: function() {
        return (
            <div>
                <img src={this.state.avatar_url} alt="" width="80"/>
                <h3>{this.state.name}</h3>
                <hr/>
            </div>
        )
    }
});


var Form = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var loginInput = React.findDOMNode(this.refs.login);
        this.props.addCard(loginInput.value);
        loginInput.value = '';
    },
    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="github login" ref="login"/>
                <button> add</button>
            </form>
        )
    }
});

var Main = React.createClass({
    getInitialState: function() {
      return {
          logins: ['dielduarte']
      };
    },
    addCard: function(loginToAdd) {
        this.setState({ logins: this.state.logins.concat(loginToAdd) });
    },
    render: function() {

        var cards = this.state.logins.map(function(login){
            return (<Card login={login} />)
        });

        return (
            <div>
                <Form addCard={this.addCard}/>
                {cards}
            </div>
        )
    }
});


React.render(<Main />, document.getElementById('root'));
