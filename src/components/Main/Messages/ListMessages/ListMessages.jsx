import React from 'react';
import style from '../../Messages/ListMessages/ListMessages.module.css';
import border from '../../Main.module.css';
import AddMessageForm from '../ListMessages/AddMessage/AddMessage';
import Message from '../../../../utils/OverallComponents/Message/Message';

const ListMessages = (props) => {
  const addNewMessage = (message) => {
    props.addMessage(message.textArea.trim());
  };

  return (
    <div className={`${style.listMessages} ${border.wrapper}`}>
      {props.profile &&
        props.messages.map((message) => (
          <Message
            key={message.id}
            login={props.login}
            photo={props.profile.photos.small}
            textMessage={message.textMessage}
            dateMessage={message.dateMessage}
          />
        ))}
        {/* <AddMessageForm onSubmit={addNewMessage} /> */}
    </div>
  );
};

export default ListMessages;
