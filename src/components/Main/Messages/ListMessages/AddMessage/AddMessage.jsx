import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from '../AddMessage/AddMessage.module.css';
import border from '../../../Main.module.css';
import {
  maxLength,
  required,
} from '../../../../../utils/validators/validators';
import { Textarea } from '../../../../../utils/validators/Forms/ValidationForms';

const maxLengthVal = maxLength(500);

const AddMessageForm = (props) => {
  return (
    <div className={style.addMessageForm}>
      <div className={border.wrapper}>
        <form onSubmit={props.handleSubmit} className={style.message__form}>
          <Field
            placeholder=' Введите текст сообщения...'
            name='textArea'
            component={Textarea}
            validate={[required, maxLengthVal]}
            cols='40'
            rows='2'
          />
          <button className={style.message__form_button}>Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'message',
})(AddMessageForm);
