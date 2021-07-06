import React from 'react';
import style from './ErrorAll.module.css';
import erorAll from '../../../assets/broken_link.png';

const ErrorAll = (props) => {
  return (
    <div className={style.errorAll}>
      <img src={erorAll} alt='errorimg' />
      <div className={style.errorAll_text}>
        <b>Упсс...</b>
        <b>Что-то пошло не так...</b>
        <b>Попробуйте снова</b>
      </div>
    </div>
  );
};

export default ErrorAll;
