import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Comment from 'Components/Comment'

class ApplicationComponent extends Component {
  
  componentDidMount() {
    this.props.getComments();
  } 

  render() {

    var comments = this.props.comments;

    console.log(comments);

    var components = comments.map(function(comment, i) {
      return ( 
        <Comment key={i} data={comment}/>
        // <div key={i}>
            // {comment.id}
            // {comment.text}
        // </div>
        );
    });

    return <div>{components}</div>;
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