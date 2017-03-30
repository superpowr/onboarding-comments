import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div>
        <div className='comment-line-wrap'>
          <div className='comment-line'></div>
        </div>
        <div className='comment-wrap'>
          <p>
            <span>{this.props.comment.authorName} replied: </span>
            {this.props.comment.body}
          </p>
        </div>
      </div>
    )
  }
}

export default Comment;
