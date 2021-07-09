import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './MyStatus.module.css';

const MyStatus = (props) => {
  const [editMode, setEditMode] = useState(false);

  const onKeyPressHandler = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <div
      className={style.status}
      onClick={() => {
        setEditMode(true);
      }}
    >
      {!editMode && <span>{props.status || <i>Статус не указан</i>}</span>}

      {editMode && (
        <form onBlur={props.handleSubmit} onKeyPress={onKeyPressHandler}>
          <Field
            name='statusInputForm'
            component='input'
            placeholder=' Введите текст статуса...'
            maxlength='300'
            autoFocus={true}
            value={props.status}
            onBlur={() => {
              setEditMode(false);
            }}
          />
        </form>
      )}
    </div>
  );
};

export default reduxForm({
  form: 'userMyStatus',
})(MyStatus);
