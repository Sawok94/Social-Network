import React, { useEffect } from 'react';
import style from '../Messages/Messages.module.css';
import ListFriends from './ListFriends/ListFriends';
import ListMessagesContainer from './ListMessages/ListMessagesContainer';

const Messages = ({
  getUserProfile,
  currentPage,
  sizePage,
  searchName,
  searchFriends,
  profiles,
}) => {
  useEffect(() => {
    getUserProfile(currentPage, sizePage, searchName, searchFriends);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.messages}>
      <ListFriends profiles={profiles} />
      <ListMessagesContainer />
    </div>
  );
};

export default Messages;
