import React, { useState } from 'react';
import style from '../Photo/Photo.module.css';
import Avatar from '../../../../utils/OverallComponents/Avatar/Avatar';
import { Redirect } from 'react-router-dom';

const Photo = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [redirect, setRedirect] = useState(false);

  return (
    <figure
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
        <figcaption
          className={style.photo_editor}
          onClick={() => {
            setRedirect(true);
          }}
        >
          &#10006; Сменить Аватарку
        </figcaption>
      )}
    </figure>
  );
};

export default Photo;
