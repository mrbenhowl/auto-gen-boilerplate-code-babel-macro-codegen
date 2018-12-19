import React, { useState } from 'react'

const AddTask = ({ addTaskToList }) => {
  const [descriptionFieldValue, setDescriptionFieldValue] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    if (descriptionFieldValue !== '') {
      addTaskToList(descriptionFieldValue)
      setDescriptionFieldValue('')
    }
  }

  return (
    <form>
      <label>Task</label>
      <input
        type='text'
        name='addTask'
        value={descriptionFieldValue}
        onChange={event => setDescriptionFieldValue(event.target.value)}
      />
      <button type='submit' onClick={handleSubmit}>
        Add
      </button>
    </form>
  )
}

export default AddTask
