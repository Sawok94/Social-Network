import React, { useEffect } from 'react';
import style from '../Messages/Messages.module.css';
import ListFriends from './ListFriends/ListFriends';
import ListMessagesContainer from './ListMessages/ListMessagesContainer';
import AddMessageForm from './AddMessage/AddMessage';

const Messages = ({
  getUserProfile,
  currentPage,
  sizePage,
  searchName,
  searchFriends,
  profiles,
  addMessage,
}) => {
  useEffect(() => {
    getUserProfile(currentPage, sizePage, searchName, searchFriends);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clickDate = new Date();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
  };

  const addNewMessage = (message) => {
    addMessage(
      message.textArea.trim(),
      clickDate.toLocaleString('ru', options)
    );
  };

  return (
    profiles && (
      <div className={style.messages}>
        <ListFriends profiles={profiles} />
        <ListMessagesContainer />
        <AddMessageForm onSubmit={addNewMessage} />
      </div>
    )
  );
};

export default Messages;
