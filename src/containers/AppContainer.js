import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Header } from '../components/Header'
import AuthContainer from './AuthContainer'
import { signOut } from '../actions/authActions'

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
    signedIn: state.Auth.signedIn
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => {
            dispatch(signOut());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
