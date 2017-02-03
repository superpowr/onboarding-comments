import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LogoutForm extends Component {
  constructor(props) {
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
  }    

  render() {
    return ( 
      <form onSubmit={ this.handleSubmit }>
        <input type='submit' value='Logout' /> 
      </form>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    logout: function(email) {
      dispatch(actions.logout(email)); 
    }
  };
};

export default connect(null, mapDispatchToProps)(LogoutForm);
