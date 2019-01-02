import findIndex from 'lodash.findIndex'

const initialState = { count: 0, tasks: [] }

export default function taskListReducer (state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD_TASK: {
      const newState = { ...state }
      newState.count++
      newState.tasks = newState.tasks.concat({
        id: newState.count,
        description: action.description
      })
      return newState
    }
    case types.UPDATE_TASK: {
      const newState = { ...state, tasks: [...state.tasks] }
      const indexOfTaskToUpdate = findIndex(newState.tasks, task => task.id === action.id)
      newState.tasks[indexOfTaskToUpdate].description = action.description
      return newState
    }
    case types.DELETE_TASK: {
      const newState = { ...state, tasks: [...state.tasks] }
      const indexOfTaskToDelete = findIndex(newState.tasks, task => task.id === action.id)
      newState.tasks.splice(indexOfTaskToDelete, 1)
      return newState
    }
    default: {
      return state
    }
  }
}

const types = {
  ADD_TASK: 'taskList/ADD_TASK',
  DELETE_TASK: 'taskList/DELETE_TASK',
  UPDATE_TASK: 'taskList/UPDATE_TASK'
}

export const actions = {
  addTaskToList: description => ({
    type: types.ADD_TASK,
    description
  }),
  updateTask: (description, id) => ({
    type: types.UPDATE_TASK,
    description,
    id
  }),
  deleteTask: id => ({
    type: types.DELETE_TASK,
    id
  })
}

export const selectors = {
  getTasks: state => {
    return state.taskListReducer.tasks
  }
}
