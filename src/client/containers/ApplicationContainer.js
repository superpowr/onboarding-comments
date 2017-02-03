import React, { Component } from 'react';
import { connect,applyMiddleware } from 'react-redux'
import ApplicationComponent from 'Components/ApplicationComponent'
import Header from 'Components/Header'

export class ApplicationContainer extends Component {
  render() {
    return ( 
      <div>
        <Header user={this.props.user}/>
        <ApplicationComponent comments={this.props.comments} user={this.props.user} />
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