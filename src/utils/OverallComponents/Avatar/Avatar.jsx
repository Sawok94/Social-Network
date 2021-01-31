import React from 'react';
import '../Avatar/Avatar.css';
import avatar from '../../../assets/avatar.png';

const Avatar = (props) => {
  return (
    <div>
      <img
        src={props.photo || avatar}
        className={props.style}
        alt={`avatar`}
      />
    </div>
  );
};

export default Avatar;
