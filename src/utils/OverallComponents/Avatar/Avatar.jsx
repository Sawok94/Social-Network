import React from 'react';
import '../Avatar/Avatar.css';
import avatar from '../../../assets/avatar.png';

const Avatar = (props) => {
  return (
    <img
      src={props.photo || avatar}
      className={props.style}
      alt='avatarImg'
    />
  );
};

export default Avatar;
