import React from 'react';
import style from './SettingsInfo.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLength } from '../../../../utils/validators/validators';
import {
  Input,
  Textarea,
} from '../../../../utils/validators/Forms/ValidationForms';

const maxLengthNickName = maxLength(30);
const maxLengthTextArea = maxLength(100);
const maxLengthUrl = maxLength(100);

const SettingsInfo = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <section className={style.setting_info}>
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
                  className={style.setting_field_input}
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
                  className={style.setting_field_input}
                  required
                  minRows='2'
                  maxRows='3'
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
                  validate={[maxLengthTextArea]}
                  className={style.setting_field_input}
                  required
                  minRows='2'
                  maxRows='3'
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
      </section>
      <hr />
      <section className={style.setting_social}>
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
                        className={style.setting_field_input}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <button className={style.setting_btn}>Сохранить</button>
    </form>
  );
};

export default reduxForm({
  form: 'profileInfo',
})(SettingsInfo);
