const ADD_TASK = 'ADD_TASK'
const REMOVE_TASK = 'REMOVE_TASK'
const TOGGLE_SELECTED_TASK = 'TOGGLE_SELECTED_TASK'
const UPDATASK = 'UPDATASK'

const addTask = (task) => {
  return {
    type: ADD_TASK,
    task: {
      task,
      id: Date.now(),
      stat: "TODO",
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

const updaTask = (id, stat) => {
  return{
      type: UPDATASK,
      id,
      stat,
    }
  
}


export {addTask, removeTask, updaTask}