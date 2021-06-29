import { userAPI } from '../api/api';
import { getAuthMe } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const ADD_MY_FRIENDS = 'ADD_MY_FRIENDS';

const initialState = {
  initialized: false,
  myFriendsProfile: [],
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

export const initializeApp = () => (dispatch) => {
  Promise.all([
    dispatch(getAuthMe()),
    dispatch(getMyFriends(1, 100, '', true)),
  ]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
