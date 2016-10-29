import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { Loader } from '../components/Loader'
import classNames from 'classnames'
import { checkLocalStorage, createTable, setCurrentTable } from '../actions/tablesActions'

class TablesContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
          btnState: false
        }
        this.checkLocalStorage();
    }
    checkLocalStorage() {
        this.props.checkLocalStorage();
    }
    toggleBtn() {
      this.setState({btnState: !this.state.btnState});
    }
    render() {
        var content = <div>
            { this.props.currentTable
              ? <button onClick={ () => this.props.setCurrentTable(this.props.currentTable) }
                    className="btn btn-block btn-primary">Использовать ранее созданную</button>
              : null
            }
            <button onClick={ () => this.props.createTable() }
                    className="btn btn-block btn-secondary">Создать новую</button>
        </div>

        var btnGroupClasses = classNames('btn-group', { open: this.state.btnState });
        return (
            <div className="content">
                <h4>Таблицы</h4>

                <p className="lead">
                  На этом этапе вам нужно создать <nobr>таблицу-хранилище</nobr> на&nbsp;Google&nbsp;Drive или выбрать уже ранее&nbsp;созданную. <br />
                  <small>Данные о&nbsp;последней используемой таблице хранятся в&nbsp;localStorage.</small>
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
        currentTable: state.Tables.currentTable
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
        setCurrentTable:  (id) => {
            dispatch(setCurrentTable(id));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(TablesContainer);
