import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import style from './AddMessage.module.css';
import border from '../../Main.module.css';
import { maxLength, required } from '../../../../utils/validators/validators';
import { Textarea } from '../../../../utils/validators/Forms/ValidationForms';

const maxLengthVal = maxLength(500);

const afterSubmit = (result, dispatch) => dispatch(reset('message'));

const AddMessageForm = (props) => {
  return (
    <article className={style.addMessageForm}>
      <div className={border.wrapper}>
        <form onSubmit={props.handleSubmit} className={style.message__form}>
          <Field
            placeholder=' Введите текст сообщения...'
            name='textArea'
            component={Textarea}
            className={style.message__form_field}
            validate={[required, maxLengthVal]}
            cols='40'
            minRows='2'
            maxRows='2'
          />
          <button className={style.message__form_button}>
            <b>Отправить</b>
          </button>
        </form>
      </div>
    </article>
  );
};

export default reduxForm({
  form: 'message',
  onSubmitSuccess: afterSubmit,
})(AddMessageForm);
