import React, { useState } from 'react';
import style from '../PageSwitching/PageSwitching.module.css';

const PageSwitching = (props) => {
  let pages = Math.ceil(props.totalCount / props.sizePage);

  let totalPages = [];

  for (let i = 0; i < pages; i++) {
    totalPages.push(i + 1);
  }

  const [startingPosition, setStartingPosition] = useState(1);

  const leftPageStartingPosition = (startingPosition - 1) * 10 + 1;

  const rightPageStartingPosition = startingPosition * 10;

  const onSetCurrentPage = (e) => {
    props.getUserProfile(+e.target.innerText, props.sizePage, props.searchName);
  };

  return (
    totalPages.length > 1 && (
      <div className={style.pages}>
        {
          <span
            className={style.pages__navigator}
            onClick={() => {
              leftPageStartingPosition > 1 &&
                setStartingPosition(startingPosition - 1);
            }}
          >
            &#171;
          </span>
        }
        <span>
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
        </span>
        {
          <span
            className={style.pages__navigator}
            onClick={() => {
              rightPageStartingPosition < totalPages.length &&
                setStartingPosition(startingPosition + 1);
            }}
          >
            &#187;
          </span>
        }
      </div>
    )
  );
};

export default PageSwitching;
