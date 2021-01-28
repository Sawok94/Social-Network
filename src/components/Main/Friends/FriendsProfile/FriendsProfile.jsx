import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../../../../utils/OverallComponents/Avatar/Avatar';
import style from './FriendsProfile.module.css';

const FriendsProfile = (props) => {
  return (
    <div className={style.friendsProfile}>
      <div>
        <NavLink to={'/profile/' + props.id} className={style.link}>
          <Avatar photo={props.photos.small} style='avatar__middle' />
        </NavLink>
      </div>
      <div className={style.friendsProfile__infoProfile}>
        <div className={style.friendsProfile__infoProfile_name}>
          <NavLink to={'/profile/' + props.id} className={style.link}>
            {props.name}
          </NavLink>
        </div>
        <div className={style.friendsProfile__infoProfile_status}>
          {props.status || '---'}
        </div>
      </div>{' '}
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
      </div>
    </div>
  );
};

export default FriendsProfile;
