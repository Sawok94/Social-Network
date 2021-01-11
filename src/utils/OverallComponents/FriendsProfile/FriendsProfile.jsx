import React from 'react';
import Avatar from '../Avatar/Avatar';
import style from './FriendsProfile.module.css';

const FriendsProfile = (props) => {
  return (
    <div className={style.friendsProfile}>
      <div>
        <Avatar style='avatar__middle' />
      </div>
      <div className={style.friendsProfile__infoProfile}>
        <div className={style.friendsProfile__infoProfile_name}>
          {props.name}
        </div>
        <div className={style.friendsProfile__infoProfile_status}>
          {props.status || '---'}
        </div>
      </div>
      <div>
        <button className={style.friendsProfile__addFriendBtn}>
          Добавить в друзья
        </button>
      </div>
    </div>
  );
};

export default FriendsProfile;
