import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { withSuspense } from '../../hoc/withSuspense';
import Error404 from '../../utils/OverallComponents/Error404/Error404';
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
    <main className={style.main}>
      <Switch>
        <Route
          path='/profile/:userId?'
          render={withSuspense(ProfileContainer)}
        />
        <Route
          path='/messages/:userId?'
          render={withSuspense(MessagesContainer)}
        />
        <Route path='/friends' render={withSuspense(FriendsContainer)} />
        <Route path='/settings' render={withSuspense(SettingsContainer)} />
        <Route path='/login' render={withSuspense(LoginContainer)} />
        {<Redirect exact from='/' to='/profile' />}
        {<Route path='*' render={() => <Error404 />} />}
      </Switch>
    </main>
  );
};

export default Main;
