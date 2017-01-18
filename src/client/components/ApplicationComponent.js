import React, { Component } from 'react';
import Header from './Header';
import MessageList from './MessageList'
import MessageBar from './MessageBar'

export default class ApplicationComponent extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MessageList/>
        <MessageBar/>
      </div>
    )
  }
}