const ADD_MESSAGE = 'ADD_MESSAGE';

const initialState = {
  messages: [
    { id: 0, textMessage: 'One', dateMessage: '22:30' },
    { id: 1, textMessage: 'Two', dateMessage: '10:22' },
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
            dateMessage: action.dateMessage,
          },
        ],
      };
    }
    default:
      return state;
  }
};

export const addMessage = (textMessage, dateMessage) => ({
  type: ADD_MESSAGE,
  textMessage,
  dateMessage,
});

export default messageReducer;
