const ADD_POST = 'ADD_POST';
const ADD_CHAR = 'ADD_CHAR';
// const DELETE_POST = 'DELETE_POST';

const initialState = {
  posts: [
    { id: 1, textPost: 'One' },
    { id: 2, textPost: 'Two' },
  ],
  textPost: 'qwewqrm',
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let i = 3;
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: i++,
            textPost: action.textPost,
          },
        ],
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

export const addPostAC = (textPost) => ({
  type: ADD_POST,
  textPost,
});

export const addCharAC = (addChar) => ({
  type: ADD_CHAR,
  addChar,
});

export default postReducer;
