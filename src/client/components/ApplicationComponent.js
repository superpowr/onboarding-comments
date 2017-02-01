import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ApplicationComponent extends Component {
  componentDidMount() {
    this.props.getComments();
  }  
  render() {

    // Should replace with loop...
    // Iterate over comments array, spit out individual comment components
    return <div><Comment comment={this.props.comments[0]}/></div>
  }
}

class Comment extends Component {
  render() {

    // This is necessary because the initial state has no comments
    // Could probably remove it if I were to iterate in the ApplicationComponent.render method...
    // ... and not render any Comments if there are none in state
    if (this.props.comment) {
      return <div>{this.props.comment.text}</div>
    } else {
      return <div></div>
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getComments: function() {
      dispatch(actions.getComments()); 
    }
  };
};

export default connect(null, mapDispatchToProps)(ApplicationComponent);