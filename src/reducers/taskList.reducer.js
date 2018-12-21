const initialState = { count: 0, tasks: [] }

export default function taskListReducer (state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD_TASK:
      const newState = { ...state }
      newState.count++
      newState.tasks = newState.tasks.concat({
        id: newState.count,
        description: action.description
      })
      return newState
    default:
      return state
  }
}

const types = {
  ADD_TASK: 'taskList/ADD_TASK',
  DELETE_TASK: 'taskList/DELETE_TASK'
}

export const actions = {
  addTaskToList: description => ({
    type: types.ADD_TASK,
    description
  })
}

export const selectors = {
  getTasks: state => {
    return state.taskListReducer.tasks
  }
}
