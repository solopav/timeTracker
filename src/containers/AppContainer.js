import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Header } from '../components/Header'
import AutherisationContainer from './AutherisationContainer'
import { signOut } from '../actions/AutherisationActions'

class AppContainer extends Component {
    render() {
        return (
            <div className="app">
                <Header signedIn={ this.props.signedIn } signOut={ this.props.signOut } />

              <div className="main">
                    { this.props.children }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    signedIn: state.Autherisation.signedIn
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => {
            dispatch(signOut());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
