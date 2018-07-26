import { combineReducers } from 'redux'
import tasks from './tasks'
import task from './task'

const reducers = combineReducers({
  tasks,
  selectedTask: task,
})

export default reducers