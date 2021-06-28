import React from 'react';
import style from '../Settings/Settings.module.css';
import border from '../Main.module.css';
import SettingsInfo from './SettingsInfo/SettingsInfo.jsx';

const Settings = (props) => {
  let photoSelected = (e) => {
    e.target.files.length && props.updateAvatarPhoto(e.target.files[0]);
  };

  let updateInfo = (profileInfo) => {
    props.updateProfileInfo(profileInfo);
  };

  return (
    <div className={`${style.container} ${border.wrapper}`}>
      <div className={style.setting}>
        <div className={style.setting_avatar}>
          <b>Обновить аватарку</b>
          <div className={style.setting_avatar_file}>
            <input type='file' onChange={photoSelected} />
            {props.updateAvatar && (
              <span className={style.setting_avatar_succes}>
                * Фотография обновлена
              </span>
            )}
          </div>
        </div>
        <hr />
        <SettingsInfo onSubmit={updateInfo} />
        {props.updateInfo && <span>Информация обновлена</span>}
      </div>
    </div>
  );
};

export default Settings;
