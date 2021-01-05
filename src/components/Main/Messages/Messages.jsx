import React from 'react';
import style from '../Messages/Messages.module.css';
import ListFriends from './ListFriends/ListFriends';
import ListMessagesContainer from './ListMessages/ListMessagesContainer';

const Messages = (props) => {
  return (
    <div className={style.container}>
      <ListFriends />
      <ListMessagesContainer />
    </div>
  );
};

export default Messages;
