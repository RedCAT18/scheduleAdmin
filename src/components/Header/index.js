import Header from './presenter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators as authAction } from '../../store/modules/auth';

function mapStateToProps(state) {
  const {
    isModalOpen,
    email,
    password,
    isLoading,
    isLoggedIn,
    message
  } = state.auth;
  return { isModalOpen, email, password, isLoading, isLoggedIn, message };
}

function mapDispatchToProps(dispatch) {
  return {
    attemptLogin: bindActionCreators(authAction.attemptLogin, dispatch),
    submitLogin: bindActionCreators(authAction.submitLogin, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
