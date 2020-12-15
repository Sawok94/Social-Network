import React from 'react';
import style from '../Profile/Profile.module.css'

const Profile = (props) => {
  return (
  <div className={style.container}>
    <div className={style.container-photo}>1</div>
    <div className={style.container-info}>2</div>
    <div className={style.container-wall}>3</div>
  </div>
  );
};

export default Profile;
