import React, { Component } from 'react';
import { connect } from 'react-redux';
import Textarea from 'react-textarea-autosize';
import * as actions from '../actions';

class Reply extends Component {
  render() {
    return (
      <div className='reply-wrap'>
        <form className='reply-form'
          onSubmit={() => this.props.dispatch(actions.createComment(this.props.message.id, this.input.value))}>
          <Textarea 
            ref={(input) => this.input = input}>
          </Textarea>
          <button>REPLY</button>
        </form>
      </div>
    )
  }
}

export default connect()(Reply);
