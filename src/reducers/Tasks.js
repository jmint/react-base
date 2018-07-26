const ADD_TASK = 'ADD_TASK'
const REMOVE_TASK = 'REMOVE_TASK'

const initialState = [
    { task: '', id: 1, status:''},
]

const tasks = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        return [...state, action.book]
      case REMOVE_TASK:
        return state.filter(book => book.id !== action.id)
      default:
        return state
    }
  }

  export default task
