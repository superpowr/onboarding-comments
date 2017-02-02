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
    var components = [];

    for (var i = 0; i < comments.length; i++) {
      components.push(<Comment key={i} data={comments[i]}/>)
    }

    return <div>{components}</div>
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