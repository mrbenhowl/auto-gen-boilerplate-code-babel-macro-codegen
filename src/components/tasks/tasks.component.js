import React from 'react'
import Task from '../task'
import { Wrapper, Grid } from './tasks.styles'

const Tasks = props => (
  <Wrapper>
    <Grid>
      {props.tasks.map(task => (
        <Task key={task.id}>{task.description}</Task>
      ))}
    </Grid>
  </Wrapper>
)

export default Tasks
