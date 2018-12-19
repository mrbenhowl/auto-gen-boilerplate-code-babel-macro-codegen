import { connect } from 'react-redux'
import { actions as taskListActions } from '../../reducers/taskList.reducer'

const mapDispatchToProps = dispatch => ({
  addTaskToList: description =>
    dispatch(taskListActions.addTaskToList(description))
})

export default connect(
  null,
  mapDispatchToProps
)
