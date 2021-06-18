import { applyMiddleware, combineReducers, createStore } from 'redux';
import profiles from './profiles-reducer';
import messages from './messages-reducer';
import users from './users-reducer';
import auth from './auth-reducer';
import { reducer as form } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import app from './app-reducer';

const reducers = combineReducers({
  profiles,
  messages,
  users,
  auth,
  form,
  app,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
