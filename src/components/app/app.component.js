import React from 'react'
import GlobalStyle from '../globalStyle'
import TaskListHeading from '../taskListHeading'
import AddTask from '../addTask'
import Tasks from '../tasks'

const App = () => {
  return (
    <>
      <GlobalStyle />

      <TaskListHeading />

      <AddTask />

      <Tasks />
    </>
  )
}

export default App
