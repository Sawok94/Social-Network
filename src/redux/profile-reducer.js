import { userAPI } from '../api/api';

const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
  profiles: null,
};

const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE: {
      return {
        ...state,
        profiles: action.profiles,
      };
    }
    default:
      return state;
  }
};

export const setUserProfile = (profiles) => ({
  type: SET_USER_PROFILE,
  profiles,
});

export const getUserProfile = () => {
  return (dispatch) => {
    userAPI
      .getUsers()
      .then((response) => {
        dispatch(setUserProfile(response.data));
      });
  };
};

export default profilesReducer;
