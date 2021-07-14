import React from 'react';
import '../Avatar/Avatar.css';
import avatar from '../../../assets/avatar.png';

const Avatar = (props) => {
  return (
    <figure>
      <img
        src={props.photo || avatar}
        className={props.style}
        alt={`avatar`}
      />
    </figure>
  );
};

export default Avatar;
