import React from 'react';
import style from '../../Messages/ListMessages/ListMessages.module.css';
import border from '../../Main.module.css';
import AddMessage from './AddMessage/AddMessage';
import Post from '../../../../utils/OverallComponents/Post/Post';

const ListMessages = (props) => {
  let showMessages = props.messages.map((message) => (
    <Post key={message.id} textMessage={message.textMessage} />
  ));

  return (
    <div className={`${style.container} ${border.wrapper}`}>
      <AddMessage
        addMessage={props.addMessage}
        addChar={props.addChar}
        textMessage={props.textMessage}
      />
      {showMessages}
    </div>
  );
};

export default ListMessages;
