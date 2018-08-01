const ADD_FILTER_TASK = 'ADD_FILTER_TASK'
const REMOVE_FILTER_TASK = 'REMOVE_FILTER_TASK'
const UPDATE_FILTER_TASK = 'UPDATE_FILTER_TASK'
const TOGGLE_SELECTED_TASK = 'TOGGLE_SELECTED_TASK'
const RESET_TASK = 'RESET_TASK'

const addFilterTask = (task) => {
  return { 
    type: ADD_FILTER_TASK, 
    task: { 
      task, 
      id: Date.now() 
    }
  }
}

const updateFilterTask = (tasks) => {
  return {
    type: UPDATE_FILTER_TASK,
    tasks: tasks,
  }
}

const removeFilterTask = (id) => {
  return [
    { 
      type: REMOVE_FILTER_TASK, 
      id,
    },
    {
      type: TOGGLE_SELECTED_TASK,
      task: {},
    }
  ]
}

export {addFilterTask, removeFilterTask, updateFilterTask}