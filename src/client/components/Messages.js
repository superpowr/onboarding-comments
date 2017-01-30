import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import Reply from './Reply';
import Comment from './Comment';
import * as actions from '../actions';

class Messages extends Component {
  byCreatedAt(x, y) {
    if (new Date(x.createdAt) > new Date(y.createdAt)) return 1;
    if (new Date(x.createdAt) < new Date(y.createdAt)) return -1;
    return 0;    
  }  
  render() {
    return (
      <div>
        <div className='messages-wrap'>
          { this.props.messages.sort(this.byCreatedAt).map((message, i) => 
            { return <div key={i}>
                <div className='message-container'>
                   <div className='message-header'>
                     <p>{message.user.username}</p>
                   </div>
                   <p className='message-body'>
                     {message.body}
                   </p>
                  {this.props.user &&
                    <Reply message={message} />
                  }
              </div> 
               {Array.isArray(message.comments) && message.comments.map((comment, i) => {
                  return <Comment key={i} comment={comment} />
                 })
               }
            </div> 
          }) }
        </div>
      </div>
    )
  }
}

export default Messages;
