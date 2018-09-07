import { connect } from 'react-redux'
import { fetchLoginUser } from '../actions'
import Login from '../components/login'

const mapStateToProps = state => ({
  user: state.currentUser,
})

const mapDispatchToProps = {
  fetchLoginUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)