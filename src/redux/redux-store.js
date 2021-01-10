import { applyMiddleware, combineReducers, createStore } from 'redux';
import posts from './posts-reducer';
import messages from './messages-reducer';
import profiles from './profile-reducer';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
  posts: posts,
  messages: messages,
  profiles: profiles,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
