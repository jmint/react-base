import React, {Component} from 'react'
import styles from '../App.css'

export default class TaskCreator extends Component {
  state = {
    tasktext: '',
    task:'',
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
        <input
          value={this.state.tasktext}
          className={styles.tasktext}
          placeholder = "Enter Task"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className={styles.buttonSuccess}
          onClick={() => this.handleTaskText(this.state.tasktext)}>Create Task</button>
      </div>
    )
  }
}
