import { connect } from 'react-redux'
import { fetchCurrentUser } from '../actions'
import App from '../components/app'

const mapStateToProps = state => ({
  user: state.currentUser,
})

const mapDispatchToProps = {
  fetchCurrentUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)