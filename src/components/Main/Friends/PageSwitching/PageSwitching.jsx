import React from 'react';
import style from '../PageSwitching/PageSwitching.module.css';
import { NavLink } from 'react-router-dom';

const PageSwitching = (props) => {
  let pages = [];

  for (let i = 1; i < 10; i++) {
    pages.push(
      <div className={style.page}>
        <NavLink to='/ferea' activeClassName={style.active}>
          {i}
        </NavLink>
      </div>
    );
  }

  return <div className={style.pages}>{pages}</div>;
};

export default PageSwitching;
