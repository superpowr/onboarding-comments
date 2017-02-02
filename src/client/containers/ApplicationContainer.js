import React, { Component } from 'react';
import { connect,applyMiddleware } from 'react-redux'
import ApplicationComponent from 'Components/ApplicationComponent'
import Form from 'Components/Form'

export class ApplicationContainer extends Component {
  render() {
    return ( 
      <div>
        <Form />
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