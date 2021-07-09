import React, { useEffect } from 'react';
import style from '../Settings/Settings.module.css';
import border from '../Main.module.css';
import SettingsInfo from './SettingsInfo/SettingsInfo.jsx';
import Preloader from '../../../utils/OverallComponents/Preloader/Preloader';
import downloadImg from '../../../assets/download.png';

const Settings = (props) => {
  useEffect(() => {
    props.getProfileSettings(props.myId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let photoSelected = (e) => {
    e.target.files.length && props.updateAvatarPhoto(e.target.files[0]);
  };

  let updateInfo = (profileInfo) => {
    props.updateProfileInfo(profileInfo);
  };

  return (
    <div className={`${style.container} ${border.wrapper}`}>
      {!props.profileForSettings ? (
        <Preloader />
      ) : (
        <div className={style.setting}>
          <div className={style.setting_avatar}>
            <b>Обновить аватарку</b>
            <div className={style.setting_avatar_wrapper}>
              <label className={style.setting_avatar_load} for='input__file'>
                <input
                  type='file'
                  onChange={photoSelected}
                  className={style.setting_avatar_file}
                  id='input__file'
                />
                <img
                  className={style.setting_avatar_img}
                  src={downloadImg}
                  alt='downloadImg'
                />
                <b>Выберите файл</b>
              </label>
            </div>
          </div>
          {props.updateAvatar && (
            <div className={style.setting_avatar_succes}>
              * Фотография обновлена
            </div>
          )}
          <hr />
          <SettingsInfo
            onSubmit={updateInfo}
            initialValues={props.profileForSettings}
            profile={props.profileForSettings}
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
