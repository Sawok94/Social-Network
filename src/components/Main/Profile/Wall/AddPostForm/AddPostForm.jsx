import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from '../AddPostForm/AddPostForm.module.css';
import border from '../../../Main.module.css';
import Avatar from '../../../../../utils/OverallComponents/Avatar/Avatar';
import {
  maxLength,
  required,
} from '../../../../../utils/validators/validators';

const maxLengthVal = maxLength(5);

const AddPostForm = (props) => {
  return (
    <div className={border.wrapper}>
      <form onSubmit={props.handleSubmit} className={style.wall__form}>
        <Avatar photo={props.photo} style='avatar__small' />
        <Field
          className={style.wall__form_textArea}
          placeholder=' Введите текст поста...'
          name='textAreaForm'
          component='textarea'
          validate={[required, maxLengthVal]}
          cols='40'
          rows='3'
        />
        <button className={style.wall__form_button}>Опубликовать</button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'post',
})(AddPostForm);
