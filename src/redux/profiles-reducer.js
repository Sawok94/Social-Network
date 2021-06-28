import { profileAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_AVATAR_PHOTO = 'SET_AVATAR_PHOTO';

const initialState = {
  posts: [
    { id: 0, textPost: 'One' },
    { id: 1, textPost: 'Two' },
  ],
  profile: null,
  status: '',
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
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SET_AVATAR_PHOTO: {
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photoFile,
        },
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

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const setAvatarPhoto = (photoFile) => ({
  type: SET_AVATAR_PHOTO,
  photoFile,
});

export const getProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setProfile(response.data));
};

export const getMyStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateMyStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const uploadAvatarPhoto = (photoFile) => async (dispatch) => {
  let response = await profileAPI.savePhoto(photoFile);
  if (response.data.resultCode == 0) {
    dispatch(setAvatarPhoto(response.data.data.photos));
  }
};

export default postReducer;
