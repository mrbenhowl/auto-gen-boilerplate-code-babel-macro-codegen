import React, { lazy, Suspense } from 'react'
import GlobalStyle from '../globalStyle'

import {
  TaskListHeadingLoadingFallbackWrapper,
  TaskListHeadingLoadingFallbackContent,
  AddTaskLoadingFallbackWrapper,
  AddTaskLoadingFallbackContent,
  Wrapper,
  FooterWrapper,
  TasksWrapper
} from './app.styles'

const TaskListHeading = lazy(() => import('../taskListHeading'))
const AddTask = lazy(() => import('../addTask'))
const Tasks = lazy(() => import('../tasks'))
const Footer = lazy(() => import('../footer'))

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Suspense fallback={<TaskListHeadingLoadingFallback />}>
          <TaskListHeading />
        </Suspense>

        <Suspense fallback={<AddTaskLoadingFallback />}>
          <AddTask />
        </Suspense>

        <Suspense fallback={<div />}>
          <TasksWrapper>
            <Tasks />
          </TasksWrapper>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </Suspense>
      </Wrapper>
    </>
  )
}

export default App

const TaskListHeadingLoadingFallback = () => (
  <TaskListHeadingLoadingFallbackWrapper>
    <TaskListHeadingLoadingFallbackContent />
  </TaskListHeadingLoadingFallbackWrapper>
)

const AddTaskLoadingFallback = () => (
  <AddTaskLoadingFallbackWrapper>
    <AddTaskLoadingFallbackContent />
  </AddTaskLoadingFallbackWrapper>
)
