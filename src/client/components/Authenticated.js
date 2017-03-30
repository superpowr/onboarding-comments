import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Authenticated extends Component {
  render() {
    return (
      <div className='authenticated-wrap'>
        <p>Welcome {this.props.user.username}!</p>
        <button onClick={() => this.props.dispatch(actions.logout())}>Logout</button>
      </div>
    )
  }
}

export default connect()(Authenticated);