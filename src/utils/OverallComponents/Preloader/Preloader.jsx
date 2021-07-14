import React from 'react';
import style from '../Preloader/Preloader.module.css';

const Preloader = () => {
  return (
    <article className={style.gooey}>
      <span className={style.dot}></span>
      <div className={style.dots}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </article>
  );
};

export default Preloader;
