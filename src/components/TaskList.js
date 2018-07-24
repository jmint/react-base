import React, {Component} from 'react'
import styles from '../App.css'

const TaskList = ({tasks}) => {
  return(
    <div className={styles.list}>
      {tasks.map(task =>(
        <div className={styles.taskdiv}>{task}</div>
      ))
    }

    </div>
  )
}

export default TaskList
