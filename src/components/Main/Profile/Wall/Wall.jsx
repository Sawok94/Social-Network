import React from 'react';
import style from '../Wall/Wall.module.css';
import border from '../../Main.module.css';
import TextArea from '../../../../utils/OverallComponents/TextArea/TextArea';

const Wall = (props) => {
  return (
    <div className={`${style.wall} ${border.wrapper}`}>
      <TextArea btn='Опубликовать' />
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
