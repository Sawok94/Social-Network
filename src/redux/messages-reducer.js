const ADD_MESSAGE = 'ADD_MESSAGE';
const ADD_CHAR = 'ADD_CHAR';

const initialState = {
  messages: [
    { id: 0, textMessage: 'One' },
    { id: 1, textMessage: 'Two' },
  ],
  textMessage: '',
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: state.messages.length,
            textMessage: action.textMessage,
          },
        ],
        textMessage: '',
      };
    }
    case ADD_CHAR: {
      return {
        ...state,
        textMessage: action.addChar,
      };
    }
    default:
      return state;
  }
};

export const addMessage = (textMessage) => ({
  type: ADD_MESSAGE,
  textMessage,
});

export const addChar = (addChar) => ({
  type: ADD_CHAR,
  addChar,
});

export default messageReducer;
