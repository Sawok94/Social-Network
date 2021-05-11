import { authAPI } from '../api/api';

const AUTH_ME = 'AUTH_ME';
const DE_AUTH_ME = 'DE_AUTH_ME';

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

export const setAuthMe = (id, email, login) => ({
  type: AUTH_ME,
  auth: { id, email, login },
});

export const deleteAuthMe = () => ({
  type: DE_AUTH_ME,
});

export const addAuthMe = () => (dispatch) => {
  authAPI.authMe().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setAuthMe(id, email, login));
    }
  });
};

export const deAuthMe = () => (dispatch) => {
  authAPI.deAuthMe();
  dispatch(deleteAuthMe());
};

export default authReducer;
