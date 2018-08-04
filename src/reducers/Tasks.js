const ADD_TASK = 'ADD_TASK'
const REMOVE_TASK = 'REMOVE_TASK'
const UPDATASK = 'UPDATASK'

const initialState = [
    { task: 'prueba', id: 1, stat:'TODO'},
]

const tasks = (state = initialState, action) => {

    switch (action.type) {
      case ADD_TASK:
        return [...state, action.task]
      case REMOVE_TASK:
        return state.filter(task => task.id !== action.id)
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

  export default tasks
