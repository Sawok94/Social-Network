import React from 'react';
import Avatar from '../Avatar/Avatar';
import style from '../Message/Message.module.css';

const Message = (props) => {
  return (
    <section className={style.message}>
      <Avatar photo={props.photo} style={`avatar__small`} />
      <div>
        <div className={style.message__name}>
          <b>{props.login}</b>
          <i className={style.message__date}>{props.dateMessage}</i>
        </div>
        <div className={style.message__text}>{props.textMessage}</div>
      </div>
    </section>
  );
};

export default Message;
