import React, { useState } from 'react';
import style from '../Info/Info.module.css';
import border from '../../Main.module.css';
import SocialNetworks from './SocialNetworks/SocialNetworks';
import MyStatus from './MyStatus/MyStatus';
import StrangerStatus from './StrangerStatus/StrangerStatus';
import settingImg from '../../../../assets/setting.png';
import { Redirect } from 'react-router-dom';

const Info = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [redirect, setRedirect] = useState(false);

  return (
    <article
      className={`${style.info} ${border.wrapper}`}
      onMouseEnter={() => {
        props.isOwner && setEditMode(true);
      }}
      onMouseLeave={() => {
        props.isOwner && setEditMode(false);
      }}
    >
      <section className={style.info_name}>{props.info.fullName}</section>
      <section className={style.info_status}>
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
      </section>
      <section className={style.info_lookingForAJob}>
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
        <div className={style.info_lookingForAJob_title}>
          <b>Ищу работу: </b>
          {props.info.lookingForAJob ? 'да' : 'нет'}
        </div>
        <div className={style.info_lookingForAJob_title}>
          <b>Мои навыки: </b>
          {props.info.lookingForAJobDescription || 'не указанно'}
        </div>
        <div className={style.info_lookingForAJob_title}>
          <b>Обо мне: </b>
          {props.info.aboutMe || 'не указанно'}
        </div>

        <SocialNetworks contacts={props.info.contacts} />
      </section>
    </article>
  );
};

export default Info;
