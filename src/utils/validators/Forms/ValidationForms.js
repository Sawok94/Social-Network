import React from 'react';
import style from './ValidationForms.module.css';

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div>
      <textarea
        className={`${style.textarea_successful} ${
          hasError && style.textarea_error
        }`}
        {...props}
        {...input}
      />
      {hasError && (
        <div className={style.text_error}>
          &#9940;
          {meta.error}
        </div>
      )}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div>
      <input
        className={`${style.textarea_successful} ${
          hasError && style.textarea_error
        }`}
        {...props}
        {...input}
      />
      {hasError && (
        <div className={style.text_error}>
          &#9940;
          {meta.error}
        </div>
      )}
    </div>
  );
};
