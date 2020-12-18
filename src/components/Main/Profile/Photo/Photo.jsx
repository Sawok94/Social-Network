import React from 'react';
import style from '../Photo/Photo.module.css';
import border from '../../Main.module.css';
import Avatar from '../../../../utils/OverallComponents/Avatar/Avatar';

const Photo = (props) => {
  return (
    <div className={style.photo}>
      <Avatar style='avatar__large' />
    </div>
  );
};

export default Photo;
