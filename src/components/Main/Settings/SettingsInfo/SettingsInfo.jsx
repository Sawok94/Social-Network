import React from 'react';
import style from './SettingsInfo.module.css';
import { Field, reduxForm } from 'redux-form';

const SettingsInfo = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={style.setting_info}>
        <b>Обо мне</b>
        <table className={style.setting_info_edit}>
          <tr>
            <th>Мой никнейм:</th>
            <td>
              <Field
                name='fullName'
                component='input'
                placeholder='Введите имя...'
                maxlength='15'
                className={style.setting_field_name}
                required
              />
            </td>
          </tr>
          <tr>
            <th>Мои навыки:</th>
            <td>
              <Field
                name='lookingForAJobDescription'
                component='textarea'
                placeholder='Опишите Ваши навыки...'
                maxlength='50'
                className={style.setting_field_scills}
                required
              />
            </td>
          </tr>
          <tr>
            <th>Обо мне:</th>
            <td>
              <Field
                name='aboutMe'
                component='textarea'
                placeholder='Расскажите о себе...'
                maxlength='50'
                className={style.setting_field_aboutMe}
                required
              />
            </td>
          </tr>
          <tr>
            <th>Ищу работу:</th>
            <td>
              <Field
                name='lookingForAJob'
                component='input'
                type='checkbox'
                className={style.setting_field_job}
              />
            </td>
          </tr>
        </table>
      </div>
      <hr />
      <div className={style.setting_social}>
        <b>Социальные сети</b>
        <div>
          <table className={style.setting_info_edit}>
            {Object.keys(props.profile.contacts).map((key) => {
              return (
                <tr>
                  <th>
                    <b> {key}: </b>
                  </th>
                  <td>
                    <Field
                      name={`contacts.${key}`}
                      component='input'
                      type='url'
                      placeholder='Введите URL адрес...'
                      maxlength='50'
                      className={style.setting_field_name}
                    />
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>

      <button className={style.setting_btn}>Сохранить</button>
    </form>
  );
};

export default reduxForm({
  form: 'profileInfo',
})(SettingsInfo);
