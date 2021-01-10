const ADD_MESSAGE = 'ADD_MESSAGE';

const initialState = {
  messages: [
    { id: 0, textMessage: 'One' },
    { id: 1, textMessage: 'Two' },
  ],
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
    default:
      return state;
  }
};

export const addMessage = (textMessage) => ({
  type: ADD_MESSAGE,
  textMessage,
});

export default messageReducer;
