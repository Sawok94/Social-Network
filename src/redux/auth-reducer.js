import { stopSubmit } from 'redux-form';
import { authAPI } from '../api/api';

const AUTH_ME = 'AUTH_ME';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ME: {
      return {
        ...state,
        ...action.auth,
      };
    }
    default:
      return state;
  }
};

export const setAuthMe = (id, email, login, isAuth) => ({
  type: AUTH_ME,
  auth: { id, email, login, isAuth },
});

export const addAuthMe = () => (dispatch) => {
  authAPI.authMe().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setAuthMe(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(addAuthMe());
    } else {
      dispatch(stopSubmit('loginForm'));
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout();
  dispatch(setAuthMe(null, null, null, false));
};

export default authReducer;
