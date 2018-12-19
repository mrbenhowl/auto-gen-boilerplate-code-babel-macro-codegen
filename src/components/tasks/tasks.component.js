import React from 'react'

const Tasks = ({ taskList }) => (
  <>
    <div>test</div>
    {taskList.map(task => (
      <div key={task.id}>{task.description}</div>
    ))}
  </>
)

export default Tasks
