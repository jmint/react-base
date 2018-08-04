import React, {Component} from 'react'
import styles from '../App.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTask, removeTask } from '../actions/tasks'
import { updateFilterTask } from '../actions/filteredtasks'

class TaskCreator extends Component {
 
  onClick = e => {
    e.preventDefault()
    this.props.addTask(this.newTask.value)
    this.newTask.value = '';
    
  }

  render() {
    
    return(
      <div className={styles.creator}>
        <form onSubmit={this.onClick}>
          <input
            className="form-control"
            placeholder = "Enter Task"
            ref={node => this.newTask = node}
          />
          <button
            className="btn btn-primary">Create Task</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return (
    bindActionCreators({ 
      addTask,
      removeTask,
      updateFilterTask,
    }, dispatch)
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreator)
