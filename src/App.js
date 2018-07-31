import React, { Component } from 'react'
import styles from './App.css'
import TaskCreator from './components/TaskCreator'
import TaskStatus from './components/TaskStatus'
import TaskList from './components/TaskList'


export default class App extends Component {
  state = {
    message: 'Message'
  }

  handleToggleMessage = (message) => {
    this.setState({ message })
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.container}>
          <TaskList />
          <TaskCreator />
          <TaskStatus />
          
        </div>
      </div>
    )
  }
}
