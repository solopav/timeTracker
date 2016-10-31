import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { Loader } from '../components/Loader'
import classNames from 'classnames'
import { checkLocalStorage, createTable, setCurrentTable } from '../actions/tablesActions'
import { closestByClass } from '../utils/utils'


class TablesContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
		 	btnState: false
		}
		this.props.checkLocalStorage();
	}
	toggleBtn() {
	  this.setState({btnState: !this.state.btnState});
	}
	render() {
		var btnGroupClass = classNames('btn-group', 'btn-group--self', { open: this.state.btnState });

		var btnGroup = <div className={ btnGroupClass }>
			<button type="button"
							className="btn btn-primary btn-group__btn"
							onClick={ () => this.props.setCurrentTable(this.props.currentTable) }
							>
				Последняя созданная
			</button>
			<button type="button" className="btn btn-primary btn-group__dt dropdown-toggle dropdown-toggle-split"
							onClick={ () => this.toggleBtn() }>
				<span className="sr-only">Toggle Dropdown</span>
			</button>
			<div className="dropdown-menu">
				{
					this.props.list.map(item => {
						return <a className="dropdown-item" 
											key={ item.id }
											onClick={ () => this.props.setCurrentTable(item.id) }
											>{ item.date } { item.id }</a>
					})
				}
			</div>
		</div>

		var content = <div>
			{ this.props.list.length
				? btnGroup
				: null
			}
			<button onClick={ () => this.props.createTable() }
							className="btn btn-block btn-secondary"
							>
							Создать новую
			</button>
		</div>

		return (
			<div className="content">
				<h4>Таблицы</h4>

				<p className="lead">
					На этом этапе вам нужно создать <nobr>таблицу-хранилище</nobr> на&nbsp;Google&nbsp;Drive или выбрать уже ранее&nbsp;созданную. <br />
					<small>Данные о&nbsp;последних используемых таблицах хранятся в&nbsp;localStorage.</small>
				</p>

				<Loader loading={ this.props.loading } />

				{
					!this.props.loading
						? content
						: null
				}

			</div>
		)
	}
}



const mapStateToProps = (state) => {
	return {
		loading: state.Tables.loading,
		currentTable: state.Tables.currentTable,
		list: state.Tables.list
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		checkLocalStorage: () => {
			dispatch(checkLocalStorage());
		},
		createTable: () => {
			dispatch(createTable());
		},
		setCurrentTable:(id) => {
			dispatch(setCurrentTable(id));
		}
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(TablesContainer);
