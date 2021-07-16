import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import style from '../AddPostForm/AddPostForm.module.css';
import border from '../../../Main.module.css';
import Avatar from '../../../../../utils/OverallComponents/Avatar/Avatar';
import {
  maxLength,
  required,
} from '../../../../../utils/validators/validators';
import { Textarea } from '../../../../../utils/validators/Forms/ValidationForms';

const maxLengthVal = maxLength(500);

const afterSubmit = (result, dispatch) => dispatch(reset('post'));

const AddPostForm = (props) => {
  return (
    <section className={border.wrapper}>
      <form onSubmit={props.handleSubmit} className={style.wall__form}>
        <Avatar photo={props.photo} style={`avatar__small`} />
        <Field
          placeholder=' Введите текст поста...'
          name='textAreaForm'
          component={Textarea}
          className={style.wall__form_field}
          validate={[required, maxLengthVal]}
          cols='29'
          minRows='2'
          maxRows='10'
        />
        <button className={style.wall__form_button}>Опубликовать</button>
      </form>
    </section>
  );
};

export default reduxForm({
  form: 'post',
  onSubmitSuccess: afterSubmit,
})(AddPostForm);
