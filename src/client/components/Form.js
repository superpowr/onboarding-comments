import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Form extends Component {
  constructor(props) {
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
  }    

  render() {
    return ( 
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input type='text' ref='content' />
          <input type='submit' /> 
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

export default connect(null, mapDispatchToProps)(Form);
