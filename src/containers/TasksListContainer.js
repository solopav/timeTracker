import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { getTasks, setCurrent } from '../actions/TasksListActions'
import { Loader } from '../components/Loader'
import classNames from 'classnames'

class TasksListContainer extends Component {
    constructor(props) {
        super(props);

        this.getAllTasks(this.props.currentTable);
    }
    getAllTasks(id) {
        this.props.getTasks(id);
    }
    render() {
        var tasks = this.props.tasks.map((item) => {
            return (
                <Link to={`/list/${item[0]}` }
                      key={ item[0] }
                      onClick={ () => this.props.setCurrent(this.props.tasks[`${item[0] - 1}`]) }
                      className="list-group-item">
                    { item[3] }
                </Link>
            )
        });
        var taskListClasses = classNames({
            'list-group': true,
            'loading': this.props.loading
        });
        return (
            <div className="tasksList content">
                <h4 onClick={ () => this.getAllTasks(this.props.currentTable) }>
                  Список выполненых задач
                </h4>

                <div className={ taskListClasses }>
                    <Loader loading={ this.props.loading } />

                  { this.props.tasks.length
                        ? tasks
                        : !this.props.loading
                          ? <div className="alert alert-success">
                              <strong>Welcome!</strong> Чтобы начать учет времени, нажмите "Cоздать задачу" &darr;
                            </div>
                          : null
                  }
                </div>
                <br/>
                <Link to="new"
                      onClick={ () => this.props.setCurrent([]) }
                      className="btn btn-primary btn-block">Создать задачу</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        table: state.Tables.currentTable,
        tasks: state.TasksList.tasks,
        loading: state.TasksList.loading,
        currentTable: state.Tables.currentTable
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTasks: (id) => {
            dispatch(getTasks(id));
        },
        setCurrent: (arr) => {
            dispatch(setCurrent(arr));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksListContainer);
