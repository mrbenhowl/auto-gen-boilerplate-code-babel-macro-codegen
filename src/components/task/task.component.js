import React from 'react'
import { Wrapper, Content } from './task.styles'

const Task = ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
)

export default Task
