import React, { useEffect } from 'react';
import style from '../Messages/Messages.module.css';
import ListFriends from './ListFriends/ListFriends';
import ListMessagesContainer from './ListMessages/ListMessagesContainer';

const Messages = (props) => {
  useEffect(() => {
    props.getUserProfile(
      props.currentPage,
      props.sizePage,
      props.searchName,
      props.searchFriends
    );
  }, []);

  return (
    <div className={style.container}>
      {console.log(props)}
      <ListFriends profiles={props.profiles} />
      <ListMessagesContainer />
    </div>
  );
};

export default Messages;
