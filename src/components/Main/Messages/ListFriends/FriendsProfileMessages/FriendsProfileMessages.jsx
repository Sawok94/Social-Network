import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../../../../../utils/OverallComponents/Avatar/Avatar';
import style from './FriendsProfileMessages.module.css';

const FriendsProfileMessages = (props) => {
  return (
    <div className={style.s}>
      <Avatar photo={props.photo} style='avatar__middle' />
      <div className={style.friendsProfile__infoProfile_name}>
        <NavLink to={'/profile/' + props.id} className={style.link}>
          {props.name}
        </NavLink>
      </div>
    </div>
  );
};

export default FriendsProfileMessages;
