import React from 'react';
import { Redirect } from 'react-router';
import { Field } from 'redux-form';
import { Input } from '../../utils/validators/Forms/ValidationForms';
import { required } from '../../utils/validators/validators';
import style from '../Login/Login.module.css';
import border from '../Main/Main.module.css';
import logo from '../../assets/logo.png';

const Login = (props) => {
  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }

  return (
    <main className={`${style.login_wrapper} ${border.wrapper}`}>
      <figure className={style.login_wrapper_logo}>
        <img src={logo} alt='logoImg' />
        <figcaption className={style.login_wrapper_logo_text}>
          социальная сеть
        </figcaption>
      </figure>
      <form
        className={`${style.login_wrapper_form} ${style.login_wrapper_form_top}`}
      >
        {props.error && (
          <aside className={style.login_wrapper_form_error}>
            <b>{props.error}</b>
          </aside>
        )}
        <section className={style.login_wrapper_form_field}>
          <label className={style.login_wrapper_form_lbl}>
            <h7>
              <b>Логин: sashka.lunkin94@gmail.com</b>
            </h7>
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
        </section>
        <section className={style.login_wrapper_form_field}>
          <label className={style.login_wrapper_form_lbl}>
            <h7>
              <b>Пароль: SocialNetworkAPI</b>
            </h7>
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
        </section>
        <section className={style.login_wrapper_form_saveMe}>
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
        </section>
        {props.captcha && (
          <figure className={style.login_wrapper_form}>
            <img src={props.captcha} alt='captcha' width='100' />
            <Field
              className={style.login_wrapper_form_input_captcha}
              name='captcha'
              component='input'
              required
            />
          </figure>
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
    </main>
  );
};

export default Login;
