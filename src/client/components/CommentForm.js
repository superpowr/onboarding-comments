import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentForm extends Component {
  constructor(props) {
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
  }    

  render() {

    var style = {
      padding: '10px',
      margin: '2px',
      width: '20%'
    };

    var inputStyle = {
      marginRight: '10px'
    }

    return ( 
      <div style={style}>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref='content' placeholder='Comment' style={inputStyle} />
          <input type='submit' value='Post' /> 
        </form>
      </div> 
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    var value = this.refs.content.value;
    this.props.newComment(value);
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    newComment: function(text) {
      dispatch(actions.newComment(text)); 
    }
  };
};

export default connect(null, mapDispatchToProps)(CommentForm);
