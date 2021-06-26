import React, { useState } from 'react';
import style from '../Photo/Photo.module.css';
import Avatar from '../../../../utils/OverallComponents/Avatar/Avatar';

const Photo = (props) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div
      className={style.photo}
      onMouseEnter={() => {
        setEditMode(true);
      }}
      onMouseLeave={() => {
        setEditMode(false);
      }}
    >
      <Avatar photo={props.photo} style='avatar__large' />
      {editMode && (
        <div className={style.photo_editor}>&#10006; Сменить Аватарку</div>
      )}
    </div>
  );
};

export default Photo;
