import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return <div>{this.props.data.text}</div>
  }
}

export default Comment;