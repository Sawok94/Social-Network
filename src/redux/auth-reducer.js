import { stopSubmit } from 'redux-form';
import { authAPI } from '../api/api';

const AUTH_ME = 'AUTH_ME';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
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

export const getAuthMe = () => async (dispatch) => {
  let response = await authAPI.authMe();

  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthMe(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);

  if (response.data.resultCode === 0) {
    dispatch(getAuthMe());
  } else {
    let errorMesages =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : 'Ошибка...';
    dispatch(stopSubmit('loginForm', { _error: errorMesages }));
  }
};

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthMe(null, null, null, false));
  }
};

export default authReducer;
