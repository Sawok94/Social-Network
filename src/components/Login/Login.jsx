import React from 'react';
import { Field } from 'redux-form';
import style from '../Login/Login.module.css';
import border from '../Main/Main.module.css';

const Login = (props) => {
  return (
    <div
      className={`${style.login_wrapper} ${border.wrapper}`}
      // onSubmit={(form) => {}}
    >
      {console.log(props)}
      <form className={style.login_wrapper_form} onSubmit={props.handleSubmit}>
        <div>
          <label className={style.login_wrapper_form_lbl}>Логин:</label>
          <Field
            className={style.login_wrapper_form_input}
            name='loginInputForm'
            component='input'
            type='text'
            placeholder='Введите логин'
            maxlength='50'
          />
        </div>
        <div>
          <label className={style.login_wrapper_form_lbl}>Пароль:</label>
          <Field
            className={style.login_wrapper_form_input}
            name='passwordInputForm'
            component='input'
            type='password'
            placeholder='Введите пароль'
            maxlength='50'
          />
        </div>
        <div>
          <Field
            name='passwordInputForm'
            component='input'
            type='checkbox'
            id='checkbox'
          />
          <label className={style.login_wrapper_form_label} htmlFor='checkbox'>
            Сохранить аккаунт
          </label>
        </div>
        <button
          className={style.login_wrapper_form_btn}
          type='submit'
          // disabled={}
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
