import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../../../../../utils/OverallComponents/Avatar/Avatar';
import style from './FriendsProfile.module.css';

const FriendsProfile = (props) => {
  return (
    <li className={style.profile}>
      <NavLink to={'/profile/' + props.id} className={style.profile_link}>
        <Avatar photo={props.photo} style={`avatar__middle`} />
        {props.name}
      </NavLink>
    </li>
  );
};

export default FriendsProfile;
