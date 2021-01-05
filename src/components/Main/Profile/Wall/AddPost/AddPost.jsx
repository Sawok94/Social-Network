import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from '../AddPost/AddPost.module.css';
import border from '../../../Main.module.css';
import Avatar from '../../../../../utils/OverallComponents/Avatar/Avatar';
import Button from '../../../../../utils/OverallComponents/Button/Button';

const AddPost = (props) => {
  return (
    <div className={`${style.wall__form} ${border.wrapper}`}>
      <form onSubmit={handleSubmit}>
        <Avatar style='avatar__small' />
        <Field name='textArea' component='textArea' placeholder='' />
        <button>Опубликовать</button>
      </form>
    </div>
  );
};

const AddPostReduxForm = reduxForm({
  form: post,
})(AddPost);

export default AddPostReduxForm;
