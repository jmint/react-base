import { combineReducers } from 'redux'
import tasks from './Tasks'
import filteredtasks from './filteredTasks'

const reducers = combineReducers({
  tasks,
  filteredtasks,
})

export default reducers