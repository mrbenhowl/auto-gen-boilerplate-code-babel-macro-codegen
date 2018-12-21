import React, { lazy, Suspense } from 'react'
import GlobalStyle from '../globalStyle'

import { TaskListLoading, TaskListHeadingWrapperLoading } from './app.styles'

const TaskListHeading = lazy(() => import('../taskListHeading')) 
const AddTask = lazy(() => import('../addTask')) 
const Tasks = lazy(() => import('../tasks'))

const TaskListHeadingLoading = () => (
  <TaskListHeadingWrapperLoading>
    <TaskListLoading/>
  </TaskListHeadingWrapperLoading>
)

const App = () => {
  return (
    <>
      <GlobalStyle />

      <Suspense fallback={<TaskListHeadingLoading/>}>
        <TaskListHeading />
      </Suspense>

      <Suspense fallback={<div />}>
        <AddTask />
        <Tasks />
      </Suspense>
    </>
  )
}

export default App
