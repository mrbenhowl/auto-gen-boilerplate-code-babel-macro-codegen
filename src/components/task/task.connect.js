import { connect } from 'react-redux'
import { actions, selectors } from '../../reducers/taskList.reducer'

const mapStateToProps = state => ({
  currentTaskId: selectors.getCurrentTaskId(state)
})

const mapDispatchToProps = dispatch => ({
  updateTask: (description, id) => dispatch(actions.updateTask(description, id)),
  deleteTask: id => dispatch(actions.deleteTask(id)),
  setCurrentTask: id => dispatch(actions.setCurrentTask(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
