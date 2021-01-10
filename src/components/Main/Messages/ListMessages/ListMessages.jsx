import React from 'react';
import style from '../../Messages/ListMessages/ListMessages.module.css';
import border from '../../Main.module.css';
import AddMessageForm from '../ListMessages/AddMessage/AddMessage';
import Message from '../../../../utils/OverallComponents/Message/Message';

const ListMessages = (props) => {
  let showMessages = props.messages.map((message) => (
    <Message key={message.id} textMessage={message.textMessage} />
  ));

  const addNewMessage = (message) => {
    props.addMessage(message.textArea);
  };

  return (
    <div className={`${style.container} ${border.wrapper}`}>
      {showMessages}
      <AddMessageForm onSubmit={addNewMessage} />
    </div>
  );
};

export default ListMessages;
