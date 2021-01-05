const ADD_POST = 'ADD_POST';
const ADD_CHAR = 'ADD_CHAR';
// const DELETE_POST = 'DELETE_POST';

const initialState = {
  posts: [
    { id: 0, textPost: 'One' },
    { id: 1, textPost: 'Two' },
  ],
  textPost: '',
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
        textPost: ''
      };
    }
    case ADD_CHAR: {
      return {
        ...state,
        textPost: action.addChar,
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

export const addChar = (addChar) => ({
  type: ADD_CHAR,
  addChar,
});

export default postReducer;
