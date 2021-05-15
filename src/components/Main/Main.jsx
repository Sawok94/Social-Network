import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import LoginContainer from '../Login/LoginContainer';
import style from '../Main/Main.module.css';
import Settings from '../Main/Settings/Settings';
import FriendsContainer from './Friends/FriendsContainer';
import MessagesContainer from './Messages/MessagesContainer';
import ProfileContainer from './Profile/ProfileContainer';

const Main = (props) => {
  return (
    <div className={style.main}>
      <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
      <Route path='/messages/:userId?' render={() => <MessagesContainer />} />
      <Route path='/friends' render={() => <FriendsContainer />} />
      <Route path='/settings' render={() => <Settings />} />
      {<Route path='' /> && <Redirect to={'/profile'} />}
      <Route path='/login' render={() => <LoginContainer />} />
    </div>
  );
};

export default Main;
