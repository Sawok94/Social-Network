import React, { useState } from 'react';
import style from '../PageSwitching/PageSwitching.module.css';
import left from '../../../assets/left.png';
import right from '../../../assets/right.png';

const PageSwitching = (props) => {
  let totalPages = [
    ...Array(Math.round(props.totalCount / props.sizePage)).keys(),
  ];

  const [startingPosition, setStartingPosition] = useState(1);

  const leftPageStartingPosition = (startingPosition - 1) * 10 + 1;

  const rightPageStartingPosition = startingPosition * 10;

  const onSetCurrentPage = (e) => {
    props.getUserProfile(+e.target.innerText);
  };

  return (
    <div className={style.pages}>
      <div
        className={style.pages__navigator}
        onClick={() => {
          leftPageStartingPosition > 1 &&
            setStartingPosition(startingPosition - 1);
        }}
      >
        <img src={left} alt='leftImg' />
      </div>
      <div>
        {totalPages
          .filter(
            (page) =>
              page >= leftPageStartingPosition &&
              page <= rightPageStartingPosition
          )
          .map((page) => {
            return (
              <span
                className={
                  props.currentPage === page ? style.pageActive : style.page
                }
                onClick={onSetCurrentPage}
              >
                {page}
              </span>
            );
          })}
      </div>
      <div
        className={style.pages__navigator}
        onClick={() => {
          // leftPageStartingPosition > 0 &&
          setStartingPosition(startingPosition + 1);
        }}
      >
        <img src={right} alt='rightImg' />
      </div>
    </div>
  );
};

export default PageSwitching;
