import { profileAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_PROFILE = 'SET_PROFILE';

const initialState = {
  posts: [
    { id: 0, textPost: 'One' },
    { id: 1, textPost: 'Two' },
  ],
  profile: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length,
            textPost: action.textPost,
          },
        ],
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.idPost),
      };
    }
    case SET_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default:
      return state;
  }
};

export const addPost = (textPost) => ({
  type: ADD_POST,
  textPost,
});

export const deletePost = (idPost) => ({
  type: DELETE_POST,
  idPost,
});

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile, 
});

export const getProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((response) => {
    dispatch(setProfile(response.data));
  });
};

export default postReducer;
