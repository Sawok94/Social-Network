import React from 'react';
import style from './Error404.module.css';
import border from '../../../components/Main/Main.module.css';
import eror404 from '../../../assets/404.png';

const Error404 = (props) => {
  return (
    <aside className={border.wrapper}>
      <figure className={style.error404}>
        <img src={eror404} alt='404img' />
        <figcaption className={style.error404_text}>
          <b>Страница не найдена...</b>
        </figcaption>
      </figure>
    </aside>
  );
};

export default Error404;
