import React from 'react';
import { Route } from 'react-router-dom';
import style from '../Main/Main.module.css';
import Profile from '../Main/Profile/Profile';
import Messages from '../Main/Messages/Messages';
import Settings from '../Main/Settings/Settings';
import FriendsContainer from './Friends/FriendsContainer';
// import News from '../Main/News/News';
// import Music from '../Main/Music/Music';
// import Video from '../Main/Video/Video';

const Main = (props) => {
  return (
    <div className={style.main}>
      <Route path='/profile' render={() => <Profile />} />
      <Route path='/messages' render={() => <Messages />} />
      <Route path='/friends' render={() => <FriendsContainer />} />
      <Route path='/settings' render={() => <Settings />} />
      {/* <Route path='/news' render={() => <News />} />
      <Route path='/music' render={() => <Music />} />
      <Route path='/video' render={() => <Video />} /> */}
    </div>
  );
};

export default Main;
