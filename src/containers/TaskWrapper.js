import React, {Component} from 'react'
import TaskList from '../components/TaskList'
import TaskCreator from '../components/TaskCreator'
import TaskStatus from '../components/TaskStatus'
import _ from 'lodash'

export default class TaskWrapper extends Component {
  state ={
    tasks: [],
  }

  render() {
    const {tasks} = this.state;
    const debounceCreateTask = _.debounce(task => {
          const q = task.length ? task : 'señora K'
          const tasks1 = this.state.tasks.concat(q)
          this.setState({
            tasks : tasks1,
          })
    }, 300);
    return(
      <div>
        <h1>Contenedor</h1>
        <TaskCreator onCreateTask={debounceCreateTask}/>
        <TaskStatus />
        <TaskList tasks={tasks}/>
      </div>
    )
  }
}
