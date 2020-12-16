import React from 'react';
import style from '../Wall/Wall.module.css';
import border from '../../Main.module.css';

const Wall = (props) => {
  return (
    <div className={`${style.wall} ${border.wrapper}`}>
      стена
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
    </div>
  );
};

export default Wall;
