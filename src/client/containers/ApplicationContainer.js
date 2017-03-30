import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Navbar from '../components/Navbar';
import Message from '../components/Message';
import Messages from '../components/Messages';
import styles from '../styles/index.styl';

export class ApplicationContainer extends React.PureComponent {
  componentWillMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div className='app-wrap'>
        
        <Navbar 
          isLogin={this.props.isLogin} 
          user={this.props.user}
          errMessage={this.props.errMessage}
        />
        <Messages 
          user={this.props.user}
          messages={this.props.messages}  
        />
        
        {/* Only show the message component is the user is logged in*/}
        {this.props.user &&
          <Message />
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(actions.isAuthenticated())
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...state.Application
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationContainer);