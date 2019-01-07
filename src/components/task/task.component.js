import React, { useState, useEffect } from 'react'
import EditPencil from '../editPencil'
import DeleteBin from '../deleteBin'
import {
  Wrapper,
  TextArea,
  Content,
  TaskDescription,
  Options
} from './task.styles'

const Task = ({
  description,
  id,
  updateTask,
  deleteTask,
  setCurrentTask,
  currentTaskId
}) => {
  const [showOptions, setShowOptions] = useState(false)
  const [allowEdit, setAllowEdit] = useState(false)

  useEffect(
    () => {
      if (currentTaskId !== id) {
        if (showOptions) {
          setShowOptions(false)
        }
        if (allowEdit) {
          setAllowEdit(false)
        }
      }
    },
    [currentTaskId]
  )

  return (
    <Wrapper
      showOptions={showOptions}
      onClick={() => {
        setShowOptions(true)
        setCurrentTask(id)
      }}
    >
      {!allowEdit && (
        <Content showOptions={showOptions}>
          {!showOptions && <TaskDescription>{description}</TaskDescription>}
          {showOptions && (
            <Options>
              <EditPencil onClick={setAllowEdit} />
              <DeleteBin
                onClick={() => {
                  deleteTask(id)
                }}
              />
            </Options>
          )}
        </Content>
      )}

      {allowEdit && (
        <TextArea
          value={description}
          onChange={e => {
            updateTask(e.target.value, id)
          }}
        />
      )}
    </Wrapper>
  )
}

export default Task
