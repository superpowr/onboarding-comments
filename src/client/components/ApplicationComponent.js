import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Comment from 'Components/Comment'
import CommentForm from 'Components/CommentForm'

class ApplicationComponent extends Component {
  
  componentDidMount() {
    this.props.getComments();
  } 

  render() {
    var comments = this.props.comments;
    var components = comments.map(function(comment, i) {
      return <Comment key={i} comment={comment}/>;
    });

    return ( 
      <div>
        <CommentForm />
        <div>{components}</div> 
      </div>
      );
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    getComments: function() {
      dispatch(actions.getComments()); 
    }
  };
};

export default connect(null, mapDispatchToProps)(ApplicationComponent);