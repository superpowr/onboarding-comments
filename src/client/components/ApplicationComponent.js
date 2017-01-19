import React, { Component } from 'react';
import Header from './Header';
import MessageList from './MessageList';
import MessageBar from './MessageBar';
import AuthenticationModal from './AuthenticationModal';

export default class ApplicationComponent extends Component {
  render() {
    return (
      <div>
        <Header/>
        <AuthenticationModal/>
        <MessageList/>
        <MessageBar/>
      </div>
    )
  }
}