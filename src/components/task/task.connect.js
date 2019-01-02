import { connect } from 'react-redux'
import { actions } from '../../reducers/taskList.reducer'

const mapDispatchToProps = dispatch => ({
  updateDescription: (description, id) => dispatch(actions.updateTask(description, id)),
  deleteTask: id => dispatch(actions.deleteTask(id))
})

export default connect(
  null,
  mapDispatchToProps
)
