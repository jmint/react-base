import React, { Component } from 'react'
import styles from './App.css'
import TaskWrapper from './containers/TaskWrapper'

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
          <TaskWrapper />
        </div>
      </div>
    )
  }
}
