import React from 'react';
import style from '../Settings/Settings.module.css';
import border from '../Main.module.css';

const Settings = (props) => {
  let photoSelected = (e) => {
    e.target.files.length && props.uploadAvatarPhoto(e.target.files[0]);
  };
  {
    console.log(props);
  }
  return (
    <div className={`${style.container} ${border.wrapper}`}>
      <div className={style.setting}>
        <div className={style.setting_avatar}>
          <b>Загрузить аватарку</b>
          <hr />
          <div>
            <input type='file' onChange={photoSelected} />
          </div>
        </div>

        <div className={style.setting_info}>
          <b>Обо мне</b>
          <hr />
          <div>
            <div>
              <b>Мой никнейм:</b>
              <input type='text' name='' id='' />
            </div>
            <div>
              <b>В поисках работы:</b>
              <input type='checkbox' name='' id='' />
            </div>
            <div>
              <b>Мои навыки:</b>
              <textarea name='' id='' cols='20' rows='2'></textarea>
            </div>
            <div>
              <b>Обо мне:</b>
              <textarea name='' id='' cols='20' rows='2' ></textarea>
            </div>
          </div>
        </div>

        <div className={style.setting_social}>
          <b>Социальные сети</b>
          <hr />
          {/* <SocialNetworks contacts={props.info.contacts} /> */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
