import React from 'react';
import Avatar from '../../../../utils/OverallComponents/Avatar/Avatar';
import style from './FriendsProfile.module.css';

const FriendsProfile = (props) => {
  return (
    <div className={style.friendsProfile}>
      <div>
        <Avatar photos={props.photos.small} style='avatar__middle' />
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
        <button
          className={style.friendsProfile__addFriendBtn}
          onClick={() => {
            props.followed
              ? props.unfollowUser(props.id)
              : props.followUser(props.id);
          }}
        >
          {props.followed ? 'Удалить из друзей' : 'Добавить в друзья'}
        </button>
        {/* {console.log(props)} */}
      </div>
    </div>
  );
};

export default FriendsProfile;
