import { authAPI } from '../api/api';

const AUTH_ME = 'AUTH_ME';
const LOGOUT_ME = 'LOGOUT_ME';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: null,
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
        ...action.auth,
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

export const logoutMe = (id, email, login) => ({
  type: LOGOUT_ME,
  auth: { id, email, login },
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
  authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(logoutMe(null, null, null));
    }
  });
};

export default authReducer;
