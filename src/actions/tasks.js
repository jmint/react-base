const ADD_TASK = 'ADD_TASK'
const REMOVE_TASK = 'REMOVE_TASK'
const TOGGLE_SELECTED_TASK = 'TOGGLE_SELECTED_TASK'

const addTask = (task) => {
  return { 
    type: ADD_TASK, 
    task: { 
      task, 
      id: Date.now() 
    }
  }
}

const removeTask = (id) => {
  return [
    { 
      type: REMOVE_TASK, 
      id,
    },
    {
      type: TOGGLE_SELECTED_TASK,
      task: {},
    }
  ]
}

export {addTask, removeTask}