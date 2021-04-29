import { authAPI } from '../api/api';

const AUTH_ME = 'AUTH_ME';
const DE_AUTH_ME = 'DE_AUTH_ME';

const initialState = {
  auth: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ME: {
      return {
        ...state,
        auth: action.myProfile,
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

export const setAuthMe = (myProfile) => ({
  type: AUTH_ME,
  myProfile,
});

export const deleteAuthMe = () => ({
  type: DE_AUTH_ME,
});

export const addAuthMe = () => (dispatch) => {
  authAPI.authMe().then((response) => {
    dispatch(setAuthMe(response.data.data));
  });
};

export const deAuthMe = () => (dispatch) => {
  authAPI.deAuthMe();
  dispatch(deleteAuthMe());
};

export default authReducer;
