import React, {Component} from 'react'
import styles from '../App.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTask, removeTask } from '../actions/tasks'

export default class TaskCreator extends Component {
  onSubmit = e => {
    e.preventDefault()
    this.props.addTask(this.newTask.value)
    this.newTask.value = '';
  }

  handleChange = (tasktext) => {
    this.setState({ tasktext })
  }

  handleTaskText = (task) => {
    this.setState({task})
    console.log(this.state.task);
    this.props.onCreateTask(task)
  }

  render() {
    return(
      <div className={styles.creator}>
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.tasktext}
            className={styles.tasktext}
            placeholder = "Enter Task"
            onChange={e => this.handleChange(e.target.value)}
          />
          <button
            className={styles.buttonSuccess}
            ref={node => this.newTask = node}>Create Task</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedTask: state.selectedTask
  }
}

const mapDispatchToProps = (dispatch) => {
  return (
    bindActionCreators({ 
      addTask,
      removeTask,
    }, dispatch)
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
