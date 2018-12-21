import React, { useState } from 'react'
import {
  Wrapper,
  InputWrapper,
  Input,
  ButtonWrapper,
  Button
} from './addTask.styles'

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
      <Wrapper>
        <InputWrapper>
          <Input
            type='text'
            name='addTask'
            value={descriptionFieldValue}
            onChange={event => setDescriptionFieldValue(event.target.value)}
          />
        </InputWrapper>

        <ButtonWrapper>
          <Button type='submit' onClick={handleSubmit}>
            Create
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </form>
  )
}

export default AddTask
