import { profileAPI } from '../api/api';
import { getMyProfileApp } from './app-reducer';

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_PROFILE_SETTINGS = 'SET_PROFILE_SETTINGS';
const SET_STATUS = 'SET_STATUS';
const SET_AVATAR_PHOTO = 'SET_AVATAR_PHOTO';
const SET_AVATAR_PHOTO_UPDATE = 'SET_AVATAR_PHOTO_UPDATE';
const SET_INFO_UPDATE = 'SET_INFO_UPDATE';

const initialState = {
  posts: [
    {
      id: 0,
      textPost:
        'Выступая на организованной компанией Google конференции Zeitgeist Conference в 2011 году, Стивен Хокинг высказался следующим образом об отношениях философии и науки применительно к вопросам познания Вселенной: «Большинство из нас не думают об этом всё время, но, время от времени, почти каждый задумывается — зачем мы здесь? Откуда мы появились? Исторически, это считалось вопросами философии. Но философия мертва. Философы не поспевают за современными достижениями науки, в особенности физики. Теперь учёные приняли эстафету открытий в нашем квесте познания».',
      datePost: '4 июля, 18:39',
    },
    {
      id: 1,
      textPost:
        'Несмотря на то, что Хокинг «похоронил» философию, едва ли найдётся хотя бы один философ, который возразит по поводу ценности и нужности научных данных — поэтому спорил великий физик тут не столько с философами, сколько со своим собственным представлением о философии. Это высказывание — хороший повод для серьёзного об отношениях науки и философии, точнее — об отношении философии с научным методом.',
      datePost: '5 июля, 13:29',
    },
  ],
  profile: null,
  profileForSettings: null,
  status: '',
  updateAvatar: false,
  updateInfo: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [
          {
            id: state.posts.length,
            textPost: action.textPost,
            datePost: action.datePost,
          },
          ...state.posts,
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
    case SET_PROFILE_SETTINGS: {
      return {
        ...state,
        profileForSettings: action.profileForSettings,
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
    case SET_AVATAR_PHOTO_UPDATE: {
      return {
        ...state,
        updateAvatar: action.update,
      };
    }
    case SET_INFO_UPDATE: {
      return {
        ...state,
        updateInfo: action.update,
      };
    }
    default:
      return state;
  }
};

export const addPost = (textPost, datePost) => ({
  type: ADD_POST,
  textPost,
  datePost,
});

export const deletePost = (idPost) => ({
  type: DELETE_POST,
  idPost,
});

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile,
});

export const setProfileSettings = (profileForSettings) => ({
  type: SET_PROFILE_SETTINGS,
  profileForSettings,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const setAvatarPhoto = (photoFile) => ({
  type: SET_AVATAR_PHOTO,
  photoFile,
});

export const setAvatarPhotoUpdate = (update) => ({
  type: SET_AVATAR_PHOTO_UPDATE,
  update,
});

export const setInfoUpdate = (update) => ({
  type: SET_INFO_UPDATE,
  update,
});

export const getProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setProfile(response.data));
};

export const getProfileSettings = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setProfileSettings(response.data));
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

export const updateAvatarPhoto = (photoFile) => async (dispatch) => {
  let response = await profileAPI.savePhoto(photoFile);
  if (response.data.resultCode === 0) {
    dispatch(setAvatarPhoto(response.data.data.photos));
    dispatch(getMyProfileApp());
    dispatch(setAvatarPhotoUpdate(true));
    const timer = setTimeout(() => {
      dispatch(setAvatarPhotoUpdate(false));
      clearTimeout(timer);
    }, 1000);
  }
};

export const updateProfileInfo =
  (profileInfo) => async (dispatch, getState) => {
    let userId = getState().auth.id;
    let response = await profileAPI.saveProfileInfo(profileInfo);
    if (response.data.resultCode === 0) {
      dispatch(getProfile(userId));
      dispatch(getProfileSettings(userId));
      dispatch(setInfoUpdate(true));
      const timer = setTimeout(() => {
        dispatch(setInfoUpdate(false));
        clearTimeout(timer);
      }, 1000);
    }
  };

export default postReducer;
