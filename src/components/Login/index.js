import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './presenter';
import { actionCreators as authActions } from '../../store/modules/auth';

function mapStateToProps(state) {
  const {
    isModalOpen,
    email,
    password,
    isLoadinge,
    isLoggedIn,
    message
  } = state.auth;

  return {
    isModalOpen,
    email,
    password,
    isLoadinge,
    isLoggedIn,
    message
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cancelLogin: bindActionCreators(authActions.cancelLogin, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
