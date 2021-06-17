import React from 'react';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../utils/validators/Forms/ValidationForms';
import { required } from '../../utils/validators/validators';
import style from '../Login/Login.module.css';
import border from '../Main/Main.module.css';

const Login = (props) => {
  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }

  return (
    <div className={`${style.login_wrapper} ${border.wrapper}`}>
      <form className={style.login_wrapper_form}>
        {props.error && <div className={style.login_wrapper_form_error} >{props.error}</div>}
        <div>
          <label className={style.login_wrapper_form_lbl}>Логин:</label>
          <Field
            className={style.login_wrapper_form_input}
            name='emailInputForm'
            component={Input}
            validate={[required]}
            type='email'
            placeholder='Введите email'
            maxlength='50'
            required
          />
        </div>
        <div>
          <label className={style.login_wrapper_form_lbl}>Пароль:</label>
          <Field
            className={style.login_wrapper_form_input}
            name='passwordInputForm'
            component={Input}
            validate={[required]}
            type='password'
            placeholder='Введите пароль'
            maxlength='50'
            required
          />
        </div>
        <div>
          <Field
            name='checkboxInputForm'
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
          onClick={props.handleSubmit((data) => {
            props.login(
              data.emailInputForm,
              data.passwordInputForm,
              data.checkboxInputForm
            );
          })}
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
