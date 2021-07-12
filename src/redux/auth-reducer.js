import { stopSubmit } from 'redux-form';
import { authAPI, captchaAPI } from '../api/api';
import { initializeApp } from './app-reducer';

const AUTH_ME = 'AUTH_ME';
const GET_CAPTCHA = 'GET_CAPTCHA';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ME: {
      return {
        ...state,
        ...action.auth,
      };
    }
    case GET_CAPTCHA: {
      return {
        ...state,
        captcha: action.captcha,
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

export const getCaptcha = (captcha) => ({
  type: GET_CAPTCHA,
  captcha,
});

export const getAuthMe = () => async (dispatch) => {
  const response = await authAPI.authMe();

  if (response.data.resultCode === 0) {
    const { id, email, login } = response.data.data;
    dispatch(setAuthMe(id, email, login, true));
  }
};

export const login =
  (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
      dispatch(initializeApp());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      const errorMesages =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : 'Ошибка...';
      dispatch(stopSubmit('loginForm', { _error: errorMesages }));
    }
  };

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthMe(null, null, null, false));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await captchaAPI.getCaptchaUrl();
  dispatch(getCaptcha(response.data.url));
};

export default authReducer;
