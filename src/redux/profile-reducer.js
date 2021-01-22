import { userAPI } from '../api/api';

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_SEARCH_NAME = 'SET_SEARCH_NAME';
const SET_SEARCH_FRIENDS = 'SET_SEARCH_FRIENDS';

const initialState = {
  profiles: null,
  currentPage: 1,
  sizePage: 10,
  totalCount: null,
  searchName: '',
  searchFriends: true,
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
    case SET_SEARCH_NAME: {
      return {
        ...state,
        searchName: action.searchName,
      };
    }
    case SET_SEARCH_FRIENDS: {
      return {
        ...state,
        searchFriends: action.searchFriends,
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

export const setSearchName = (searchName) => ({
  type: SET_SEARCH_NAME,
  searchName,
});

export const setSearchFriends = (searchFriends) => ({
  type: SET_SEARCH_FRIENDS,
  searchFriends,
});

export const getUserProfile = (
  currentPage,
  sizePage,
  searchName,
  searchFriends
) => (dispatch) => {
  userAPI
    .getUsers(currentPage, sizePage, searchName, searchFriends)
    .then((response) => {
      dispatch(setUserProfile(response.data.items));
      dispatch(setTotalCount(response.data.totalCount));
    });
  dispatch(setCurrentPage(currentPage));
  dispatch(setSearchName(searchName));
  dispatch(setSearchFriends(searchFriends));
};

export default profilesReducer;
