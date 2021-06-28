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
                // value={props.status}
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
                // value={props.status}
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
                // value={props.status}
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
                // value={props.status}
              />
            </td>
          </tr>
        </table>
      </div>
      <hr />
      <div className={style.setting_social}>
        <b>Социальные сети</b>
        {/* <SocialNetworks contacts={props.info.contacts} /> */}
        <div></div>
      </div>

      <button>Сохранить</button>
    </form>
  );
};

export default reduxForm({
  form: 'profileInfo',
})(SettingsInfo);
