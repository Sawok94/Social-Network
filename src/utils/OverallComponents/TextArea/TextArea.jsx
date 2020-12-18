import React from 'react';
import style from '../../../utils/OverallComponents/TextArea/TextArea.module.css';
import avatar from '../../../assets/avatar.jpg';

const TextArea = (props) => {
  return (
    <div className={style.wall__form}>
      <img src={avatar} className={style.wall__form__avatar} alt='avatarImg' />
      <textarea
        className={style.wall__form__txtr}
        placeholder='Введите текст поста'
        cols='40'
        rows='3'
      ></textarea>
      <button className={style.wall__form__btn}>{props.btn}</button>
    </div>
  );
};

export default TextArea;
