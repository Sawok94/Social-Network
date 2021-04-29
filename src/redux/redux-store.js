import { applyMiddleware, combineReducers, createStore } from 'redux';
import profiles from './profiles-reducer';
import messages from './messages-reducer';
import users from './users-reducer';
import auth from './auth-reducer';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
  profiles: profiles,
  messages: messages,
  users: users,
  auth: auth,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
