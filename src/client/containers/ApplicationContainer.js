import React, { Component } from 'react';
import { connect,applyMiddleware } from 'react-redux'
import ApplicationComponent from 'Components/ApplicationComponent'
import CommentForm from 'Components/CommentForm'

export class ApplicationContainer extends Component {
  render() {
    return ( 
      <div>
        <CommentForm />
        <ApplicationComponent comments={this.props.comments} />
      </div> 
    );
  }
}

const mapStateToProps = function(state, props) {
    return {
      ...state.Application
    }
}

export default connect(mapStateToProps, null)(ApplicationContainer);