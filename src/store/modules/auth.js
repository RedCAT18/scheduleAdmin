//types
const ATTEMPT_LOGIN = 'ATTEMPT_LOGIN';
const CANCEL_LOGIN = 'CANCEL_LOGIN';
const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

//actions

function attemptLogin() {
  return {
    type: ATTEMPT_LOGIN
  };
}

function cancelLogin() {
  return {
    type: CANCEL_LOGIN
  };
}

function submitLogin(data) {
  //args: {email, password}
  console.log(data);
}

//action functions

//initial state

const INITIAL_STATE = {
  isModalOpen: false,
  email: '',
  password: '',
  isLoading: false,
  isLoggedIn: false,
  message: null,
  user: {}
};
//reducers

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ATTEMPT_LOGIN:
      return applyAttemptLogin(state);
    default:
      return state;
  }
}

//helper

function applyAttemptLogin(state) {
  return { ...state, isModalOpen: true };
}

//export

export const actionCreators = {
  attemptLogin,
  cancelLogin,
  submitLogin
};

export default reducer;
