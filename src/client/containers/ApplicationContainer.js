import React, { Component } from 'react';
import { connect,applyMiddleware } from 'react-redux'
import ApplicationComponent from 'Components/ApplicationComponent'

export class ApplicationContainer extends Component {
  render() {
    return ( <div>
      <ApplicationComponent comments={this.props.comments} />
    </div> );
  }
}

const mapStateToProps = ( state, props ) => {
    return {
      ...state.Application
    }
}

export default connect(mapStateToProps, null)(ApplicationContainer);