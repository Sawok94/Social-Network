import { authAPI } from '../api/api';

const AUTH_ME = 'AUTH_ME';
const DE_AUTH_ME = 'DE_AUTH_ME';

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ME: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }
    case DE_AUTH_ME: {
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

export const setAuthMe = (id, login, email) => ({
  type: AUTH_ME,
  data: (id, login, email),
});

export const deleteAuthMe = () => ({
  type: DE_AUTH_ME,
});

export const addAuthMe = () => (dispatch) => {
  authAPI.authMe().then((response) => {
    if (response.data.resultCode === 0) {
      let(id, login, email) = response.data.data;
      dispatch(setAuthMe(id, login, email));
    }
  });
};

export const deAuthMe = () => (dispatch) => {
  authAPI.deAuthMe();
  dispatch(deleteAuthMe());
};

export default authReducer;
