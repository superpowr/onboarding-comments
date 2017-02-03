import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import LoginForm from 'Components/LoginForm.js'
import LogoutForm from 'Components/LogoutForm.js'

class Header extends Component {
  componentDidMount() {
    this.props.getUser();
  } 

  render() {

    var style = {
      padding: '10px',
      height: '20px',
      width: '100%',
      fontFamily: "Helvetica Neue",
      fontWeight: 'light'
    };

    // Render login form or logout form, depending on if user is logged in
    var form = (this.props.user === null ? <LoginForm /> : <LogoutForm />);

    return ( 
      <div style={style}>
        {this.props.user}
        {form}
      </div> 
    );
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    getUser: function() {
      dispatch(actions.getUser()); 
    }
  };
};

export default connect(null, mapDispatchToProps)(Header);
