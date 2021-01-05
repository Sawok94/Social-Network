import { combineReducers, createStore } from 'redux';
import posts from './posts-reducer';
import messages from './messages-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  posts: posts,
  messages: messages,
  form: formReducer,
});

const store = createStore(reducers);

export default store;
