import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../../../../utils/OverallComponents/Avatar/Avatar';
import style from './FriendsProfile.module.css';

const FriendsProfile = (props) => {
  return (
    <li className={style.friendsProfile}>
      <figure>
        <NavLink
          to={'/profile/' + props.id}
          className={style.friendsProfile_link}
        >
          <Avatar photo={props.photos.small} style={`avatar__middle`} />
        </NavLink>
      </figure>
      <figcaption className={style.friendsProfile__infoProfile}>
        <header className={style.friendsProfile__infoProfile_name}>
          <NavLink
            to={'/profile/' + props.id}
            className={style.friendsProfile_link}
          >
            <b>{props.name}</b>
          </NavLink>
        </header>
        <div className={style.friendsProfile__infoProfile_status}>
          {props.status || <i>Статус не указан</i>}
        </div>
      </figcaption>
      <div>
        <button
          className={style.friendsProfile__addFriendBtn}
          onClick={() => {
            props.followed
              ? props.unfollowUser(props.id)
              : props.followUser(props.id);
          }}
          disabled={props.followingInProgress.some((id) => id === props.id)}
        >
          {props.followed ? 'Удалить из друзей' : 'Добавить в друзья'}
        </button>
      </div>
    </li>
  );
};

export default FriendsProfile;
