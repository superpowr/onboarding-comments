import React, { Component } from 'react';
import Authenticate from './Authenticate';
import Authenticated from './Authenticated';

class Navbar extends Component {
  render() {
    return (
      <nav>
        {this.props.errMessage && 
          <p className='err-message'>{this.props.errMessage}</p>
        }
        {this.props.user ?
          <Authenticated user={this.props.user} /> :
          <Authenticate isLogin={this.props.isLogin} />
        }
      </nav>
    )
  }
}

export default Navbar;
