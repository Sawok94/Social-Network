import { userAPI } from '../api/api';

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
  profiles: null,
  currentPage: 1,
  sizePage: 10,
  totalCount: null,
};

const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE: {
      return {
        ...state,
        profiles: action.profiles,
      };
    }
    case SET_TOTAL_COUNT: {
      return {
        ...state,
        totalCount: action.totalCount,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
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

export const setTotalCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const getUserProfile = (currentPage, sizePage) => (dispatch) => {
  userAPI.getUsers(currentPage, sizePage).then((response) => {
    dispatch(setUserProfile(response.data.items));
  });
};

export const getTotalCount = () => (dispatch) => {
  userAPI.getUsers().then((response) => {
    dispatch(setTotalCount(response.data.totalCount));
  });
};

export default profilesReducer;
