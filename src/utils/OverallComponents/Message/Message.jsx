import React from 'react';
import Avatar from '../Avatar/Avatar';
import style from '../Message/Message.module.css';

const Message = (props) => {
  return (
    <div className={style.message}>
      <Avatar style='avatar__small' />
      <div>
        <div className={style.message__name}>Name</div>
        <div>{props.textMessage}</div>
      </div>
    </div>
  );
};

export default Message;
