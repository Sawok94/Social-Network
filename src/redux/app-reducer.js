import { profileAPI, userAPI } from '../api/api';
import { getAuthMe } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const ADD_MY_FRIENDS = 'ADD_MY_FRIENDS';
const ADD_MY_PROFILE = 'ADD_MY_PROFILE';

const initialState = {
  initialized: false,
  myFriendsProfile: [],
  myProfile: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }
    case ADD_MY_FRIENDS: {
      return {
        ...state,
        myFriendsProfile: [...action.myFriends],
      };
    }
    case ADD_MY_PROFILE: {
      return {
        ...state,
        myProfile: action.myProfile,
      };
    }
    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const setMyFriends = (myFriends) => ({
  type: ADD_MY_FRIENDS,
  myFriends,
});

export const setMyProfile = (myProfile) => ({
  type: ADD_MY_PROFILE,
  myProfile,
});

export const getMyFriends =
  (currentPage, sizePage, searchName, searchFriends) => async (dispatch) => {
    let response = await userAPI.getUsers(
      currentPage,
      sizePage,
      searchName,
      searchFriends
    );
    dispatch(setMyFriends(response.data.items));
  };

export const getMyProfile = () => async (dispatch, getState) => {
  let userId = getState().auth.id;
  let response = await profileAPI.getProfile(userId);
  dispatch(setMyProfile(response.data));
};

export const initializeApp = () => (dispatch) => {
  Promise.all([
    dispatch(getAuthMe()),
    dispatch(getMyFriends(1, 100, '', true)),
  ]).then(() => {
    dispatch(getMyProfile());
    dispatch(initializedSuccess());
  });
};

export default appReducer;
