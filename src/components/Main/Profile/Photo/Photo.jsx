import React from 'react';
import style from '../Photo/Photo.module.css';
import Avatar from '../../../../utils/OverallComponents/Avatar/Avatar';

const Photo = (props) => {
  return (
    <div className={style.photo}>
      <Avatar photo={props.photo} style='avatar__large' />
    </div>
  );
};

export default Photo;
