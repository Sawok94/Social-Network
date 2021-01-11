import React from 'react';
import style from '../PageSwitching/PageSwitching.module.css';
import left from '../../../../assets/left.png';
import right from '../../../../assets/right.png';

const PageSwitching = (props) => {
  let totalCount = !props.totalCount ? props.getTotalCount() : '';

  let totalPages = Math.round(props.totalCount / props.sizePage);

  let ttt = Math.round(totalPages / 10);

  let pages = [];

  let onSetCurrentPage = (e) => {
    props.getUserProfile(+e.target.innerText);
  };

  let onToggleLeft = () => {
    console.log();
  };

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <div className={style.page} onClick={onSetCurrentPage}>
        {i}
      </div>
    );
  }

  return (
    <div className={style.pages}>
      <div className={style.pages__navigator} onClick={onToggleLeft}>
        <img src={left} alt='leftImg' />
      </div>
      {totalCount}
      {pages}
      {console.log(ttt)}
      <div className={style.pages__navigator}>
        <img src={right} alt='rightImg' />
      </div>
    </div>
  );
};

export default PageSwitching;
