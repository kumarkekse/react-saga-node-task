import { connect } from 'react-redux'
import { fetchRegisterUser } from '../actions'
import Register from '../components/register'

const mapStateToProps = state => ({
  user: state.currentUser,
})

const mapDispatchToProps = {
  fetchRegisterUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)