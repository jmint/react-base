const UPDATE_FILTER_TASK = 'UPDATE_FILTER_TASK'

const updateFilterTask = (tasks) => {
  
  return {
    type: UPDATE_FILTER_TASK,
    tasks: tasks,
  }
}

export {updateFilterTask}