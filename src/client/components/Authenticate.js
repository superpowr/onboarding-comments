import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Authenticate extends Component {
  render() {
    return (
      <div className='authenticate-wrap'>
        { <h1>Please login or signup to join the discussion.</h1> }
        <form className='auth-form' 
              onSubmit={this.props.isLogin ? this.props.onLogin : this.props.onSignup}>
          <input onChange={this.props.onChangeUsername} type='text' placeholder='username' />
          <input onChange={this.props.onChangePassword} type='password' placeholder='password' />
          { this.props.isLogin ? <button>LOGIN</button> : <button>SIGNUP</button> }
        </form>
        { <p className='auth-toggle' onClick={this.props.onToggleAuth}>
          { this.props.isLogin ? 'Need an Account?' : 'Have an Account?' }
        </p>
      }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleAuth: () => dispatch(actions.toggleAuth()),
    onChangeUsername: (evt) => dispatch(actions.changeUsername(evt.target.value)),
    onChangePassword: (evt) => dispatch(actions.changePassword(evt.target.value)),    
    onLogin: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(actions.login());
    },
    onSignup: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(actions.signup());
    }
  };
};

export default connect(null, mapDispatchToProps)(Authenticate);