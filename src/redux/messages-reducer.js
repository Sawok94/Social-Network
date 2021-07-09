const ADD_MESSAGE = 'ADD_MESSAGE';

const initialState = {
  messages: [
    {
      id: 0,
      textMessage:
        'Привет! Ты случайно не знаешь, когда Путин и Ко уйдут в отставку?',
      dateMessage: '22:30',
    },
    {
      id: 1,
      textMessage:
        'Недавно он заявил, в ответ на вопрос, чем планирует заняться после отставки и где продолжит свою работу: "А зачем после отставки работать?! Буду на печке сидеть!". Может ему еще печку не построили?!',
      dateMessage: '10:22',
    },
  ],
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: [
          {
            id: state.messages.length,
            textMessage: action.textMessage,
            dateMessage: action.dateMessage,
          },
          ...state.messages,
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
