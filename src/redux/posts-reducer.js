const ADD_POST = 'ADD_POST';
// const DELETE_POST = 'DELETE_POST';

const initialState = {
  posts: [
    { id: 0, textPost: 'One' },
    { id: 1, textPost: 'Two' },
  ],
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
    default:
      return state;
  }
};

export const addPost = (textPost) => ({
  type: ADD_POST,
  textPost,
});

export default postReducer;
