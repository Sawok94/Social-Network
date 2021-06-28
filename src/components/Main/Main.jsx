import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { withSuspense } from '../../hoc/withSuspense';
import style from '../Main/Main.module.css';

const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'));
const MessagesContainer = React.lazy(() =>
  import('./Messages/MessagesContainer')
);
const FriendsContainer = React.lazy(() => import('./Friends/FriendsContainer'));
const SettingsContainer = React.lazy(() =>
  import('../Main/Settings/SettingsContainer')
);
const LoginContainer = React.lazy(() => import('../Login/LoginContainer'));

const Main = (props) => {
  return (
    <div className={style.main}>
      <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
      <Route
        path='/messages/:userId?'
        render={withSuspense(MessagesContainer)}
      />
      <Route path='/friends' render={withSuspense(FriendsContainer)} />
      <Route path='/settings' render={withSuspense(SettingsContainer)} />
      {<Route path='' /> && <Redirect to={'/profile'} />}
      <Route path='/login' render={withSuspense(LoginContainer)} />
    </div>
  );
};

export default Main;
