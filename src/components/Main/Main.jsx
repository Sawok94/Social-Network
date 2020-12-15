import React from 'react';
import { Route } from 'react-router-dom';
import style from '../Main/Main.module.css';
import Profile from '../Main/Profile/Profile';
import News from '../Main/News/News';
import Messages from '../Main/Messages/Messages';
import Friends from '../Main/Friends/Friends';
import Music from '../Main/Music/Music';
import Video from '../Main/Video/Video';
import Settings from '../Main/Settings/Settings';

const Main = (props) => {
  return (
    <div className={style.main}>
      <Route path='/profile' render={() => <Profile />} />
      <Route path='/news' render={() => <News />} />
      <Route path='/messages' render={() => <Messages />} />
      <Route path='/friends' render={() => <Friends />} />
      <Route path='/music' render={() => <Music />} />
      <Route path='/video' render={() => <Video />} />
      <Route path='/settings' render={() => <Settings />} />
    </div>
  );
};

export default Main;
