import React from 'react';
import style from '../Button/Button.module.css';

const Button = (props) => {
  const pushPostOfWall = () => {
    props.addPost(props.value.current.value) ||
      props.addMessage(props.value.current.value);
  };

  return (
    <button className={style.wall__form__btn} onClick={pushPostOfWall}>
      {props.btn}
    </button>
  );
};

export default Button;
