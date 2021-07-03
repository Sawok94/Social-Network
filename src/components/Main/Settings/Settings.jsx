import React, { useEffect } from 'react';
import style from '../Settings/Settings.module.css';
import border from '../Main.module.css';
import SettingsInfo from './SettingsInfo/SettingsInfo.jsx';
import Preloader from '../../../utils/OverallComponents/Preloader/Preloader';

const Settings = (props) => {
  useEffect(() => {
    props.getProfileSettings(props.myId);
  }, []);

  let photoSelected = (e) => {
    e.target.files.length && props.updateAvatarPhoto(e.target.files[0]);
  };

  let updateInfo = (profileInfo) => {
    props.updateProfileInfo(profileInfo);
  };

  return (
    <div className={`${style.container} ${border.wrapper}`}>
      {!props.profileSettings ? (
        <Preloader />
      ) : (
        <div className={style.setting}>
          <div className={style.setting_avatar}>
            <b>Обновить аватарку</b>
            <input
              type='file'
              onChange={photoSelected}
              className={style.setting_avatar_file}
            />
          </div>
          {props.updateAvatar && (
            <div className={style.setting_avatar_succes}>
              * Фотография обновлена
            </div>
          )}
          <hr />
          <SettingsInfo
            onSubmit={updateInfo}
            initialValues={props.profileSettings}
            profile={props.profileSettings}
          />
          {props.updateInfo && (
            <div className={style.setting_avatar_succes}>
              * Информация обновлена
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Settings;
