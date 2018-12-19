import { connect } from 'react-redux'
import { selectors } from '../../reducers/taskList.reducer'

const mapStateToProps = state => ({
  taskList: selectors.getTasks(state)
})

export default connect(
  mapStateToProps,
  null
)
