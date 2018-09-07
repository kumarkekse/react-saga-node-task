import { connect } from 'react-redux'
import { fetchLogoutUser } from '../actions'
import  User from '../components/user'

const mapDispatchToProps = {
  fetchLogoutUser,
};

export default connect(
  null,
  mapDispatchToProps
)(User)