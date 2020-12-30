import { combineReducers, createStore } from 'redux';
import posts from './posts-reducer';

const reducers = combineReducers({
  posts: posts,
  // messages: messages,
});

const store = createStore(reducers);

export default store;
