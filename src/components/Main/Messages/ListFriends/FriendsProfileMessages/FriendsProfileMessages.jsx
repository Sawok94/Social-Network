import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../../../../../utils/OverallComponents/Avatar/Avatar';
import style from './FriendsProfileMessages.module.css';

const FriendsProfileMessages = (props) => {
  return (
    <div className={style.friendsProfile}>
      <NavLink
        to={'/messages/' + props.id}
        className={style.friendsProfile_link}
      >
        <Avatar photo={props.photo} style={`avatar__small`} />
        <div className={style.friendsProfile_link_name}>{props.name}</div>
      </NavLink>
    </div>
  );
};

export default FriendsProfileMessages;
