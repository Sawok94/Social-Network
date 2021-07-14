import React from 'react';
import style from '../../Messages/ListMessages/ListMessages.module.css';
import border from '../../Main.module.css';
import Message from '../../../../utils/OverallComponents/Message/Message';

const ListMessages = (props) => {
  return (
    <article className={`${style.listMessages} ${border.wrapper}`}>
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
    </article>
  );
};

export default ListMessages;
