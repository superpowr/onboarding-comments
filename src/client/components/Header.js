import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import LoginForm from 'Components/LoginForm.js'

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

    // Change this to render sign in form
    var text = (this.props.user === null ? 'No one logged in.' : this.props.user)

    return ( 
      <div style={style}>
        {text}
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
