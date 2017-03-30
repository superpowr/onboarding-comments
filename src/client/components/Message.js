import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Message extends Component {
  render() {
    return (
      <div className='message-wrap'>
        <p>Leave a message...</p>
        <form className='message-form' 
          onSubmit={() => this.props.dispatch(actions.createMsg())}>
          <Textarea 
            onChange={() => this.props.dispatch(actions.changeMsg(this.input.value))} 
            ref={(input) => this.input = input}>
          </Textarea>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(Message);