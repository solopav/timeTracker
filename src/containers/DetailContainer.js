import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { Loader } from '../components/Loader'
import classNames from 'classnames'
import { convertDateToSheetsDateString, toDateInputStr } from '../utils/untils'
import { saveTask } from '../actions/detailActions'


class DetailContainer extends Component {
    constructor(props) {
        super(props);

        var current = this.props.current.length
                        ? this.props.current
                        : [
                            this.props.tasks.length + 1,
                            new Date(),
                            new Date(),
                            ''
                        ];

        this.state = {
            id      : current[0],
            start   : current[1],
            end     : current[2],
            what    : current[3],
            newTask : !!this.props.current.length
        }
    }
    saveTask(event) {
        event.preventDefault();

        var result = {
            id: this.state.id,
            start : convertDateToSheetsDateString(this.refs.start.value),
            end: convertDateToSheetsDateString(this.refs.end.value),
            what: this.refs.what.value
        };

        var action = this.props.current.length ? 'update' : 'append';

        this.props.saveTask(action, this.props.currentTable, result);
    }
    render() {
        return (
            <div className="detail content">
                <Link to="/list" className="detail__back">&#8249; Назад <small>к списку</small></Link>

                <Loader loading={ this.props.loading } />

                <form onSubmit={ ::this.saveTask } noValidate>
                    <div className="form-group">
                        <label htmlFor="start">Время начала</label>
                        <input type="datetime-local"
                               ref="start"
                               defaultValue={ toDateInputStr(this.state.start) }
                               className="form-control"
                               id="start"
                               formNoValidate
                               placeholder="Start" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="end">Время завершения</label>
                        <input type="datetime-local"
                               ref="end"
                               defaultValue={ toDateInputStr(this.state.end) }
                               onChange={ (event) => console.log(event.target.value) }
                               className="form-control"
                               id="end"
                               formNoValidate
                               placeholder="End" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="desc">Чем занимались?</label>
                        <textarea name="desc"
                                  ref="what"
                                  defaultValue={ this.state.what }
                                  className="form-control"
                                  id="desc"
                                  autoFocus
                                  placeholder="Опишите задачу" />
                    </div>
                    <button type="submit"
                            className="btn btn-primary btn-block">
                            {
                              this.state.newTask
                                ? <span>Сохранить</span>
                                : <span>Создать</span>
                            }
                    </button>
                </form>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        tasks: state.TasksList.tasks,
        loading: state.Detail.loading,
        current: state.TasksList.current,
        currentTable: state.Tables.currentTable
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveTask: (action, tableId, obj) => {
      dispatch(saveTask(action, tableId, obj));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailContainer);
