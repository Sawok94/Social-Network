import React from 'react';
import '../Avatar/Avatar.css';
import avatar from '../../../assets/avatar.jpg';

const Avatar = (props) => {
  return <img src={avatar} className={props.style} alt='avatarImg' />;
};

export default Avatar;
