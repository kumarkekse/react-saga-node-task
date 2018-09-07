import { connect } from 'react-redux'
import { fetchFilteredUsers, 
         fetchUsers, 
         fetchNewUser, 
         fetchLogoutUser,
         fetchDeleteUser, 
         fetchUpdateUser} from '../actions'
import AdminPanel from '../components/AdminPanel'

const mapStateToProps = state => ({
  users: state.users,
})

const mapDispatchToProps = {
  fetchFilteredUsers,
  fetchUsers,
  fetchLogoutUser,
  fetchDeleteUser,
  fetchNewUser,
  fetchUpdateUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPanel)