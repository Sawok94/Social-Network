import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from '../AddMessage/AddMessage.module.css';
import border from '../../../Main.module.css';

const AddMessageForm = (props) => {
  return (
    <div className={border.wrapper}>
      <form onSubmit={props.handleSubmit} className={style.message__form}>
        <Field
          className={style.message__form_textArea}
          placeholder='Введите текст сообщения...'
          name='textArea'
          component='textArea'
          cols='40'
          rows='2'
        />
        <button className={style.message__form_button}>Отправить</button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'message',
})(AddMessageForm);
