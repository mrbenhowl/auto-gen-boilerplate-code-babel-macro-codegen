let count = 0

export default function taskListReducer (state = [], action = {}) {
  switch (action.type) {
    case types.ADD_TASK:
      const id = count++
      return state.concat([
        {
          id,
          description: action.description
        }
      ])
  }

  return state
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
  getTasks: state => state.taskListReducer
}
