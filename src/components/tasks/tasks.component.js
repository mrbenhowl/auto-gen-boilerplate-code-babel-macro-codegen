import React from 'react'
import Task from '../task'
import { Wrapper, Grid } from './tasks.styles'

const Tasks = ({ tasks }) => (
  <Wrapper>
    <Grid>
      {tasks.map(task => (
        <Task key={task.id} id={task.id} description={task.description} />
      ))}
    </Grid>
  </Wrapper>
)

export default Tasks
