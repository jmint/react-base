const ADD_TASK = 'ADD_TASK'
const UPDATE_FILTER_TASK = 'UPDATE_FILTER_TASK'
const UPDATASK = 'UPDATASK'

const initialState = [
  { task: 'prueba', id: 1, stat:'TODO'},
]

const filteredtasks = (state = initialState, action) => {
  const acc = action.tasks
  console.log(acc);
    switch (action.type) {
      case ADD_TASK:
        return [...state, action.task]
      case UPDATE_FILTER_TASK:
        console.log("si");
        console.log(acc);
        return acc
      case UPDATASK:
      return state.map(task => {
        return task.id === action.id ?
        Object.assign({}, task, action.stat) : 
        task
      })
      default:
        return state
    }
  }

  export default filteredtasks