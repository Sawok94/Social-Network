import React from 'react';
import style from '../Button/Button.module.css';

const Button = (props) => {
  const pushPostOfWall = () => {
    alert(props.value.current.value);
  };

  return (
    <button className={style.wall__form__btn} onClick={pushPostOfWall}>
      {props.btn}
    </button>
  );
};

export default Button;
