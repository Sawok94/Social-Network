import React from 'react';
import style from '../../Messages/ListMessages/ListMessages.module.css';
import border from '../../Main.module.css';
import AddMessage from './AddMessage/AddMessage';
import Message from '../../../../utils/OverallComponents/Message/Message';

const ListMessages = (props) => {
  let showMessages = props.messages.map((message) => (
    <Message key={message.id} textMessage={message.textMessage} />
  ));

  return (
    <div className={`${style.container} ${border.wrapper}`}>
      {showMessages}
      <AddMessage
        addMessage={props.addMessage}
        addChar={props.addChar}
        textMessage={props.textMessage}
      />
    </div>
  );
};

export default ListMessages;
