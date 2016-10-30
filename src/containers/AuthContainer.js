import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions/authActions'

class AuthContainer extends Component {
	constructor(props) {
		super(props);

		this.props.signIn(true);
	}

	render() {
		return (
			<div className="jumbotron main__jumbotron">
				<h1 className="display-5">Вас приветствует timeTracker</h1>
				<p className="lead">Приложение для учета времени <small className="lead-mini">и пример работы выполненной на React && Redux</small></p>

			  <hr className="m-y-2" />

			  <p>Вы можете авторизоваться с помощью Google аккаунта</p>

				{this.props.signedIn
					? <span>Вы уже авторизованы</span>
					: <span className="btn btn-primary"
							onClick={ () => this.props.signIn() }
						>
						Авторизоваться через Google
						</span>
				}
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
		signIn: (immediate) => {
			dispatch(signIn(immediate));
		},
		signOut: () => {
			dispatch(signOut());
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);