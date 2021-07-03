import React from 'react';
import style from './SettingsInfo.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLength } from '../../../../utils/validators/validators';
import {
  Input,
  Textarea,
} from '../../../../utils/validators/Forms/ValidationForms';

const maxLengthNickName = maxLength(10);
const maxLengthTextArea = maxLength(30);
const maxLengthUrl = maxLength(40);

const SettingsInfo = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={style.setting_info}>
        <b>Обо мне</b>
        <table className={style.setting_info_edit}>
          <tbody>
            <tr>
              <th>Мой никнейм:</th>
              <td>
                <Field
                  name='fullName'
                  component={Input}
                  placeholder='Введите имя...'
                  validate={[maxLengthNickName]}
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
                  component={Textarea}
                  validate={[maxLengthTextArea]}
                  placeholder='Опишите Ваши навыки...'
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
                  component={Textarea}
                  placeholder='Расскажите о себе...'
                  validate={[maxLengthNickName]}
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
          </tbody>
        </table>
      </div>
      <hr />
      <div className={style.setting_social}>
        <b>Социальные сети</b>
        <div>
          <table className={style.setting_info_edit}>
            <tbody>
              {Object.keys(props.profile.contacts).map((key) => {
                return (
                  <tr key={key}>
                    <th>{key}:</th>
                    <td>
                      <Field
                        name={`contacts.${key}`}
                        component={Input}
                        type='url'
                        placeholder='Введите URL адрес...'
                        validate={[maxLengthUrl]}
                        className={style.setting_field_name}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
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
