const ADD_FILTER_TASK = 'ADD_FILTER_TASK'
const REMOVE_FILTER_TASK = 'REMOVE_FILTER_TASK'
const UPDATE_FILTER_TASK = 'UPDATE_FILTER_TASK'

const initialState = [
    { task: 'prueba', id: 1, status:''},
]

const filteredtasks = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FILTER_TASK:
        return [...state, action.task]
      case REMOVE_FILTER_TASK:
        return state.filter(task => task.id !== action.id)
      case UPDATE_FILTER_TASK:
        return [action.tasks]
      default:
        return state
    }
  }

  export default filteredtasks