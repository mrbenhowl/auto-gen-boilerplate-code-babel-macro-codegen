import React from 'react'
import Task from '../task'
import { Wrapper } from './tasks.styles'

const Tasks = (props) => (
  <Wrapper>
    {props.tasks.map(task => (
      <Task key={task.id}>{task.description}</Task>
    ))}
  </Wrapper>
)

export default Tasks
