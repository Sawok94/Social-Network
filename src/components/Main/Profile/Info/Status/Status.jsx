import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './Status.module.css';

const Status = (props) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div
      className={style.status}
      onClick={() => {
        setEditMode(true);
      }}
    >
      {!editMode && <span>{props.status || <i>Статус не указан</i>}</span>}

      {editMode && (
        <form onBlur={props.handleSubmit}>
          <Field
            name='statusInputForm'
            component='input'
            placeholder='Введите текст статуса...'
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
  form: 'userStatus',
})(Status);
