import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
