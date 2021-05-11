import React, { useState } from 'react';
import style from '../Info/Info.module.css';
import border from '../../Main.module.css';
import SocialNetworks from './SocialNetworks/SocialNetworks';

const Info = (props) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className={`${style.info} ${border.wrapper}`}>
      <div className={style.info_name}>{props.info.fullName}</div>
      <div className={style.info_status}>
        {!editMode && (
          <div
            onClick={() => {
              setEditMode(true);
            }}
          >
            {props.info.aboutMe || <i>Статус не указан</i>}
          </div>
        )}

        {editMode && (
          <input
            type='text'
            value={props.info.aboutMe || <i>Статус не указан</i>}
            onBlur={() => {
              setEditMode(false);
            }}
          />
        )}
      </div>
      <div className={style.info_lookingForAJob}>
        <div className={style.info_lookingForAJob_title}>Статус</div>
        <div className={style.info_lookingForAJobInfo}>
          <div className={style.info_lookingForAJobQuestion}>
            {props.info.lookingForAJob ? 'Ищу работу' : 'Не ищу работу'}
          </div>
          <div className={style.info_lookingForAJobDescription}>
            <span className={style.info_lookingForAJobDescription_comment}>
              {':'}
            </span>
            {`"${props.info.lookingForAJobDescription}"`}
          </div>
        </div>
        <SocialNetworks contacts={props.info.contacts} />
      </div>
    </div>
  );
};

export default Info;
