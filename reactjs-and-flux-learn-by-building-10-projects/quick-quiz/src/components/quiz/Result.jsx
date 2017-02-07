import React, { Component } from 'react';

class Results extends Component {
  render() {
    var percent = (this.props.score / this.props.questions.length * 100);
    if(percent > 80) {
      var message = "awesome job!";
    } else if(percent < 80 && percent > 60) {
      var message = "you did ok";
    } else {
      var message = "you did horrible";
    }

    return (
      <div className="well">
        <h4>You got {this.props.score} of out {this.props.questions.length} correct</h4>
        <h1>{percent}% - {message}</h1>
        <hr/>
        <a href="/app">Take Again</a>
      </div>
    );
  }
}

export default Results;
