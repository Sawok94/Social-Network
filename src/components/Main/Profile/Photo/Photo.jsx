import React from 'react';
import style from '../Photo/Photo.module.css';
import border from '../../Main.module.css';

const Photo = (props) => {
  return <div className={`${style.photo} ${border.wrapper}`}>фото</div>;
};

export default Photo;
