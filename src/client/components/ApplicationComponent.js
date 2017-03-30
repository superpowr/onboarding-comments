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

    var comment_form = (this.props.user === null ? null : <CommentForm />)

    return ( 
      <div>
        {comment_form}
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