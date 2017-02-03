import React, { Component } from 'react';

class Comment extends Component {
  formatTimestamp() {
    var timestamp = this.props.comment.createdAt;

    // Change this later, to format the timestamp into human-readable

    return timestamp;
  }

  render() {

    var commentStyle = {
      padding: '10px',
      fontFamily: "Helvetica Neue"
    };

    var textStyle = {
      fontWeight: 'light'
    };

    var timestampStyle = {
      marginTop: '10px',
    };

    var authorStyle = {
      fontWeight: 'bold',
      color: 'blue'
    };

    return ( 
      <div style={commentStyle}>
        <div>
          <span style={authorStyle}>{this.props.comment.User.email_address}</span> 
          <span style={textStyle}>{this.props.comment.text}</span>
        </div>
        <div style={timestampStyle}>
          <div>
            {this.formatTimestamp()}
          </div>
        </div>
      </div>
    )
  }
}

export default Comment;