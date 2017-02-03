import React, { Component } from 'react';

class Comment extends Component {
  formatTimestamp() {
    var timestamp = this.props.data.createdAt;

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

    // Replace "Sherwood" with author name/email from props

    return ( 
      <div style={commentStyle}>
        <div>
          <span style={authorStyle}>Sherwood </span> 
          <span style={textStyle}>{this.props.data.text}</span>
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