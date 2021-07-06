import React, { useState } from 'react';
import style from '../Photo/Photo.module.css';
import Avatar from '../../../../utils/OverallComponents/Avatar/Avatar';
import { Redirect } from 'react-router-dom';

const Photo = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [redirect, setRedirect] = useState(false);

  return (
    <div
      className={style.photo}
      onMouseEnter={() => {
        props.isOwner && setEditMode(true);
      }}
      onMouseLeave={() => {
        props.isOwner && setEditMode(false);
      }}
    >
      {redirect && <Redirect to={'/settings'} />}
      <Avatar photo={props.photo} style={`avatar__large`} />
      {editMode && props.isOwner && (
        <div
          className={style.photo_editor}
          onClick={() => {
            setRedirect(true);
          }}
        >
          {/* <span className={style.photo_editor_text}> */}
            &#10006; Сменить Аватарку
          {/* </span> */}
        </div>
      )}
    </div>
  );
};

export default Photo;
