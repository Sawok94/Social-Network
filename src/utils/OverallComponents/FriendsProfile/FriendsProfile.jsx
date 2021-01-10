import React from 'react';
import Avatar from '../Avatar/Avatar';
import style from './FriendsProfile.module.css';

const FriendsProfile = (props) => {
  return (
    <div className={style.friendsProfile}>
      <Avatar style='avatar__middle' />
      <div className={style.friendsProfile__infoProfile}>
        <div className={style.friendsProfile__infoProfile_name}>name</div>
        <div className={style.friendsProfile__infoProfile_info}>info</div>
      </div>
      <button className={style.friendsProfile__addFriendBtn}>
        Добавить в друзья
      </button>
    </div>
  );
};

export default FriendsProfile;
