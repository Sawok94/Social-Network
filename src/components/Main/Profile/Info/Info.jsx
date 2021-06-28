import React, { useState } from 'react';
import style from '../Info/Info.module.css';
import border from '../../Main.module.css';
import SocialNetworks from './SocialNetworks/SocialNetworks';
import MyStatus from './MyStatus/MyStatus';
import StrangerStatus from './StrangerStatus/StrangerStatus';
import settingImg from '../../../../assets/icons8-настройки-15.png';
import { Redirect } from 'react-router-dom';

const Info = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [redirect, setRedirect] = useState(false);
  {
    console.log(props);
  }
  return (
    <div
      className={`${style.info} ${border.wrapper}`}
      onMouseEnter={() => {
        props.isOwner && setEditMode(true);
      }}
      onMouseLeave={() => {
        props.isOwner && setEditMode(false);
      }}
    >
      <div className={style.info_name}>{props.info.fullName}</div>
      <div className={style.info_status}>
        {props.myId === props.info.userId ? (
          <MyStatus
            onSubmit={(status) => {
              props.updateMyStatus(status.statusInputForm || '');
            }}
            status={props.status}
          />
        ) : (
          <StrangerStatus status={props.status} />
        )}
      </div>
      <div className={style.info_lookingForAJob}>
        {editMode && props.isOwner && (
          <img
            src={settingImg}
            alt='settingImg'
            onClick={() => {
              setRedirect(true);
            }}
            className={style.info_lookingForAJob_setting}
          />
        )}
        {redirect && <Redirect to={'/settings'} />}
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
