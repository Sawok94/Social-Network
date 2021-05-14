import { authAPI } from '../api/api';

const AUTH_ME = 'AUTH_ME';
const LOGOUT_ME = 'LOGOUT_ME';

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
        isAuth: true,
      };
    }
    case LOGOUT_ME: {
      return {
        ...state,
        auth: null,
        isAuth: false,
      };
    }
    default:
      return state;
  }
};

export const setAuthMe = (id, email, login) => ({
  type: AUTH_ME,
  auth: { id, email, login },
});

export const logoutMe = () => ({
  type: LOGOUT_ME,
});

export const addAuthMe = () => (dispatch) => {
  authAPI.authMe().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setAuthMe(id, email, login));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(addAuthMe());
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout();
  dispatch(logoutMe());
};

export default authReducer;
