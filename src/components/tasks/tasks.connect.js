import { connect } from 'react-redux'
import { selectors } from '../../reducers/taskList.reducer'

const mapStateToProps = state => ({
  tasks: selectors.getTasks(state)
})

export default connect(
  mapStateToProps,
  null
)
