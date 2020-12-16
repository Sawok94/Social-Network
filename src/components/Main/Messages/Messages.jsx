import React from 'react';
import style from '../Messages/Messages.module.css';
import ListFriends from './ListFriends/ListFriends';
import ListMessages from './ListMessages/ListMessages';

const Messages = (props) => {
  return (
    <div className={style.container}>
      <ListFriends />
      <ListMessages />
    </div>
  );
};

export default Messages;
