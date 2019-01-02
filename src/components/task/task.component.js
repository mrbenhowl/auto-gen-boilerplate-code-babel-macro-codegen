import React, { useState } from 'react'
import { Wrapper, TextArea, Bin } from './task.styles'

const Task = ({ id, description, updateDescription, deleteTask }) => {
  const [showDelete, setShowDelete] = useState(false)

  return (
    <Wrapper
      onMouseOver={() => {
        setShowDelete(true)
      }}
      onMouseLeave={() => {
        setShowDelete(false)
      }}
    >
      <TextArea
        value={description}
        onChange={event => updateDescription(event.target.value, id)}
        onBlur={() => setShowDelete(false)}
        onClick={() => {
          setShowDelete(true)
        }}
      />
      {showDelete && <Bin onClick={() => deleteTask(id)} />}
    </Wrapper>
  )
}

export default Task
