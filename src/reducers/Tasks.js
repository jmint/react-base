const ADD_TASK = 'ADD_TASK'
const REMOVE_TASK = 'REMOVE_TASK'


const initialState = [
    { task: 'prueba', id: 1, status:''},
]

const tasks = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        return [...state, action.task]
      case REMOVE_TASK:
        return state.filter(task => task.id !== action.id)
      default:
        return state
    }
  }

  export default tasks
