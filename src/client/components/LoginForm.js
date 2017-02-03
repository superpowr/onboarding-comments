import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LoginForm extends Component {
  constructor(props) {
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
  }    

  render() {
    return ( 
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input type='text' ref='content' />
          <input type='submit' value='Login' /> 
        </form>
      </div> 
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    var value = this.refs.content.value;
    this.props.setUser(value);
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    setUser: function(email) {
      dispatch(actions.setUser(email)); 
    }
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
