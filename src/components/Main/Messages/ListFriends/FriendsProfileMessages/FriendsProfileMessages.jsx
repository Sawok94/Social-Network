import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../../../../../utils/OverallComponents/Avatar/Avatar';
import style from './FriendsProfileMessages.module.css';

const FriendsProfileMessages = (props) => {
  return (
    <li className={style.friendsProfile}>
      <NavLink
        to={'/messages/' + props.id}
        className={style.friendsProfile_link}
      >
        <Avatar photo={props.photo} style={`avatar__small`} />
        <figcaption className={style.friendsProfile_link_name}>
          {props.name}
        </figcaption>
      </NavLink>
    </li>
  );
};

export default FriendsProfileMessages;
