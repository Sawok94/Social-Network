import React from 'react';
import { Redirect } from 'react-router';
import { Field } from 'redux-form';
import { Input } from '../../utils/validators/Forms/ValidationForms';
import { required } from '../../utils/validators/validators';
import style from '../Login/Login.module.css';
import border from '../Main/Main.module.css';
import logo from '../../assets/logoLogin.png';

const Login = (props) => {
  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }

  return (
    <div className={`${style.login_wrapper} ${border.wrapper}`}>
      <div className={style.login_wrapper_logo}>
        <img src={logo} alt='logoImg' />
        <div className={style.login_wrapper_logo_text}>социальная сеть</div>
      </div>
      <form
        className={`${style.login_wrapper_form} ${style.login_wrapper_form_top}`}
      >
        {props.error && (
          <div className={style.login_wrapper_form_error}>
            <b>{props.error}</b>
          </div>
        )}
        <div className={style.login_wrapper_form_field}>
          <label className={style.login_wrapper_form_lbl}>
            <b>Логин:</b>
          </label>
          <Field
            className={style.login_wrapper_form_input}
            name='emailInputForm'
            component={Input}
            validate={[required]}
            type='email'
            placeholder='Введите email...'
            required
          />
        </div>
        <div className={style.login_wrapper_form_field}>
          <label className={style.login_wrapper_form_lbl}>
            <b>Пароль:</b>
          </label>
          <Field
            className={style.login_wrapper_form_input}
            name='passwordInputForm'
            component={Input}
            validate={[required]}
            type='password'
            autoComplete='true'
            placeholder='Введите пароль...'
            required
          />
        </div>
        <div className={style.login_wrapper_form_saveMe}>
          <Field
            name='checkboxInputForm'
            component='input'
            type='checkbox'
            id='checkbox'
          />
          <label
            className={style.login_wrapper_form_saveMe_label}
            htmlFor='checkbox'
          >
            Сохранить аккаунт
          </label>
        </div>
        {props.captcha && (
          <div className={style.login_wrapper_form}>
            <img src={props.captcha} alt='captcha' width='100' />
            <Field
              className={style.login_wrapper_form_input_captcha}
              name='captcha'
              component='input'
              required
            />
          </div>
        )}
        <button
          className={style.login_wrapper_form_btn}
          type='submit'
          onClick={props.handleSubmit((data) => {
            props.login(
              data.emailInputForm,
              data.passwordInputForm,
              data.checkboxInputForm,
              data.captcha
            );
          })}
        >
          <b>Войти</b>
        </button>
      </form>
    </div>
  );
};

export default Login;
